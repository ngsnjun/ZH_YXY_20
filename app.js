/* ============================================================
   社团分类 · App logic
   Simple screen state machine: hero / quiz / result / directory
   Bilingual: LANG toggles between "zh" (data.js) and "en" (i18n.js)
   ============================================================ */

(function () {
  "use strict";

  const screens = {
    hero: document.getElementById("screen-hero"),
    quiz: document.getElementById("screen-quiz"),
    result: document.getElementById("screen-result"),
    directory: document.getElementById("screen-directory")
  };

  const state = {
    index: 0,
    answers: new Array(QUESTIONS.length).fill(null), // each: option object chosen
    lastResult: null // { clubId, opts } — kept so language toggle can re-render it
  };

  let LANG = "zh";

  function t(key) {
    const entry = STRINGS[key];
    if (!entry) return "";
    return entry[LANG] != null ? entry[LANG] : entry.zh;
  }

  function clubsActive() { return LANG === "en" ? CLUBS_EN : CLUBS; }
  function questionsActive() { return LANG === "en" ? QUESTIONS_EN : QUESTIONS; }
  function axesActive() { return LANG === "en" ? AXES_EN : AXES_ZH; }

  function findClub(id) {
    return clubsActive().find(c => c.id === id);
  }

  function applyStaticI18n() {
    document.documentElement.lang = LANG === "en" ? "en" : "zh-CN";
    document.title = t("page-title");
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const entry = STRINGS[key];
      if (!entry) return;
      const value = entry[LANG] != null ? entry[LANG] : entry.zh;
      if (entry.html) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    });
  }

  function showScreen(name) {
    Object.entries(screens).forEach(([key, el]) => {
      el.hidden = key !== name;
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ---------------- Quiz ---------------- */

  // Option hover is switched on only after the pointer genuinely moves on a
  // freshly rendered question (see .hover-ready in styles.css).
  let lastPointer = { x: -1, y: -1 };
  let armPos = null;
  document.addEventListener("pointermove", e => {
    lastPointer = { x: e.clientX, y: e.clientY };
    if (!armPos) return;
    if (Math.abs(e.clientX - armPos.x) + Math.abs(e.clientY - armPos.y) >= 3) {
      document.getElementById("options-wrap").classList.add("hover-ready");
      armPos = null;
    }
  });

  function resetQuiz() {
    state.index = 0;
    state.answers = new Array(QUESTIONS.length).fill(null);
  }

  function renderQuestion() {
    const questions = questionsActive();
    const total = questions.length;
    const i = state.index;
    const q = questions[i];

    document.getElementById("q-current").textContent = String(i + 1).padStart(2, "0");
    document.getElementById("q-total").textContent = String(total);
    document.getElementById("q-index-label").textContent = String(i + 1).padStart(2, "0");
    document.getElementById("q-text").textContent = q.q;
    document.getElementById("q-hint").textContent = q.hint || t("quiz-hint-default");

    const fillPct = Math.round((i / total) * 100);
    document.getElementById("progress-fill").style.width = fillPct + "%";

    const letters = ["A", "B", "C", "D", "E"];
    const wrap = document.getElementById("options-wrap");
    wrap.innerHTML = "";
    wrap.classList.remove("hover-ready");
    armPos = { x: lastPointer.x, y: lastPointer.y };
    q.options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.className = "option";
      btn.type = "button";
      btn.innerHTML =
        '<span class="opt-letter">' + letters[idx] + '</span><span>' + opt.label + "</span>";
      btn.addEventListener("click", () => selectOption(idx));
      wrap.appendChild(btn);
    });

    const prevBtn = document.getElementById("btn-prev");
    prevBtn.disabled = i === 0;
  }

  function selectOption(idx) {
    const q = questionsActive()[state.index];
    state.answers[state.index] = q.options[idx];

    if (state.index < QUESTIONS.length - 1) {
      state.index += 1;
      renderQuestion();
    } else {
      finishQuiz();
    }
  }

  document.getElementById("btn-prev").addEventListener("click", () => {
    if (state.index > 0) {
      state.index -= 1;
      renderQuestion();
    }
  });

  function finishQuiz() {
    const scores = {};
    CLUBS.forEach(c => { scores[c.id] = 0; });

    const MAIN_PTS = 3; // an option's main 文化班 gets 3; related ones get 1
    const mainHits = {};
    const lastMain = {};
    CLUBS.forEach(c => { mainHits[c.id] = 0; lastMain[c.id] = -1; });

    state.answers.forEach((opt, qi) => {
      if (!opt) return;
      Object.entries(opt.scores).forEach(([clubId, pts]) => {
        scores[clubId] = (scores[clubId] || 0) + pts;
        if (pts >= MAIN_PTS) {
          mainHits[clubId] += 1;
          lastMain[clubId] = qi;
        }
      });
    });

    // Ties: more main-option picks first, then whichever you picked most recently.
    // (Not club order, so no 文化班 is favoured just for being listed first.)
    const ranked = CLUBS
      .map(c => ({ id: c.id, score: scores[c.id] || 0 }))
      .sort((a, b) =>
        b.score - a.score ||
        mainHits[b.id] - mainHits[a.id] ||
        lastMain[b.id] - lastMain[a.id]
      );

    const top = ranked[0];
    const second = ranked[1];

    let matchPct;
    if (top.score <= 0) {
      matchPct = 60;
    } else {
      const gapRatio = (top.score - second.score) / top.score;
      matchPct = Math.round(60 + gapRatio * 38);
      matchPct = Math.max(60, Math.min(98, matchPct));
    }

    // Top 3 recommendations. #1 keeps the percentage above; #2 and #3 are shown
    // relative to #1 (their score ÷ #1's score × #1's percentage).
    const top3 = ranked.slice(0, 3).map((r, i) => ({
      id: r.id,
      pct: i === 0 || top.score <= 0 ? matchPct : Math.max(1, Math.round(matchPct * r.score / top.score))
    }));

    const opts = { matched: true, matchPct, top3, rank: 0 };
    state.lastResult = { clubId: top.id, opts };
    renderResult(top.id, opts);
    showScreen("result");
  }

  /* ---------------- Result ---------------- */

  const AXES_ZH = [
    { key: "energy", label: "热血指数", lo: "静心内敛", hi: "热血奔放" },
    { key: "stage", label: "舞台感", lo: "幕后专精", hi: "台前主角" },
    { key: "style", label: "风格感", lo: "传统底蕴", hi: "潮流现代" },
    { key: "team", label: "协作感", lo: "个人钻研", hi: "团队默契" }
  ];

  // Logos live in assets/logos/<id>.png. 浪潮剧坊's logo is white-on-black, so its badge is dark.
  const LOGO_DARK = { langchao: true };
  const logoSrc = club => "assets/logos/" + club.id + ".png";
  const logoBadgeClass = (club, extra) => "logo-badge" + (extra ? " " + extra : "") + (LOGO_DARK[club.id] ? " dark" : "");

  // "Your top 3" list on a quiz result. Tapping an item shows that class's full profile.
  function renderTop3(opts) {
    const card = document.getElementById("r-top3");
    const list = document.getElementById("r-top3-list");
    const items = opts && opts.matched && opts.top3;
    if (!items || items.length < 2) {
      card.hidden = true;
      list.innerHTML = "";
      return;
    }
    list.innerHTML = "";
    items.forEach((item, i) => {
      const c = findClub(item.id);
      if (!c) return;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "top3-item" + (i === (opts.rank || 0) ? " is-current" : "");
      if (i === (opts.rank || 0)) btn.setAttribute("aria-current", "true");
      btn.innerHTML =
        '<span class="top3-rank">' + (i + 1) + "</span>" +
        '<span class="' + logoBadgeClass(c, "logo-badge-sm") + '"><img src="' + logoSrc(c) + '" alt=""></span>' +
        '<span class="top3-main"><span class="top3-name"></span><span class="top3-sub"></span></span>' +
        '<span class="top3-pct">' + item.pct + "%</span>";
      btn.querySelector(".top3-name").textContent = c.name;
      btn.querySelector(".top3-sub").textContent = c.partner ? t("partner-badge") + " · " + c.archetype : c.archetype;
      btn.addEventListener("click", () => {
        const next = { matched: true, matchPct: item.pct, top3: items, rank: i };
        state.lastResult = { clubId: item.id, opts: next };
        renderResult(item.id, next);
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
      list.appendChild(btn);
    });
    card.hidden = false;
  }

  // Result-page labels that read "文化班" normally but "合作伙伴" for the partner.
  const PARTNER_LABEL_KEYS = ["scroll-cue", "axes-card-kicker", "axes-note", "why-card-h2", "about-card-kicker"];

  function labelFor(key, isPartner) {
    return isPartner && STRINGS[key + "-partner"] ? t(key + "-partner") : t(key);
  }

  function renderResult(clubId, opts) {
    const club = findClub(clubId);
    if (!club) return;
    const matched = !!(opts && opts.matched);
    const isPartner = !!club.partner;

    PARTNER_LABEL_KEYS.forEach(key => {
      const el = document.querySelector('[data-i18n="' + key + '"]');
      if (el) el.textContent = labelFor(key, isPartner);
    });

    document.getElementById("r-image").src = club.image;
    document.getElementById("r-image").alt = club.name;
    document.getElementById("r-logo").src = logoSrc(club);
    document.getElementById("r-logo").alt = club.name + " logo";
    document.getElementById("r-logo-badge").className = logoBadgeClass(club, "logo-badge-lg");
    document.getElementById("r-name").textContent = club.name;
    document.getElementById("r-archetype").textContent = club.archetype;

    const kicker = document.getElementById("r-kicker");
    const badge = document.getElementById("r-match-badge");
    const quote = document.getElementById("r-quote");
    const scrollCue = document.querySelector(".scroll-cue");

    renderTop3(opts);

    if (matched) {
      const rank = (opts && opts.rank) || 0;
      kicker.textContent = rank === 0
        ? labelFor("r-kicker-matched", isPartner)
        : t("r-kicker-rank" + (rank + 1));
      badge.hidden = false;
      document.getElementById("r-match-pct").textContent = opts.matchPct + "%";
      quote.textContent = "“" + club.quote + "”";
      scrollCue.hidden = false;
    } else {
      kicker.textContent = labelFor("r-kicker-browse", isPartner);
      badge.hidden = true;
      quote.textContent = "“" + club.quote + "”";
      scrollCue.hidden = true;
    }

    const tagsWrap = document.getElementById("r-tags");
    tagsWrap.innerHTML = "";
    club.tags.forEach(tag => {
      const span = document.createElement("span");
      span.className = "tag-pill";
      span.textContent = tag;
      tagsWrap.appendChild(span);
    });

    const axesWrap = document.getElementById("r-axes");
    axesWrap.innerHTML = "";
    axesActive().forEach(ax => {
      const val = club.axes[ax.key] != null ? club.axes[ax.key] : 50;
      const row = document.createElement("div");
      row.className = "axis-row";
      row.innerHTML =
        '<div class="axis-labels"><span>' + ax.label + '</span><span>' + val + '%</span></div>' +
        '<div class="axis-track"><div class="axis-fill" style="width:' + val + '%;"></div></div>' +
        '<div class="axis-labels" style="margin-top:4px;"><span class="lo">' + ax.lo +
        '</span><span class="hi">' + ax.hi + "</span></div>";
      axesWrap.appendChild(row);
    });

    document.getElementById("r-why").textContent = club.why;
    document.getElementById("r-bright-title").textContent = club.bright.title;
    document.getElementById("r-bright-text").textContent = club.bright.text;
    document.getElementById("r-shadow-title").textContent = club.shadow.title;
    document.getElementById("r-shadow-text").textContent = club.shadow.text;
    document.getElementById("r-amplified").textContent = club.amplified;

    document.getElementById("r-about-name").textContent = club.name + labelFor("about-name-suffix", isPartner);
    document.getElementById("r-about-activities").textContent = club.about.activities;
    document.getElementById("r-about-forwho").textContent = club.about.forWho;
    document.getElementById("r-about-line").textContent = club.about.line;

    const igLink = document.getElementById("r-ig");
    const igUrl = typeof INSTAGRAM !== "undefined" ? INSTAGRAM[club.id] : null;
    if (igUrl) {
      igLink.href = igUrl;
      const handle = igUrl.replace(/\/+$/, "").split("/").pop();
      document.getElementById("r-ig-text").textContent = t("ig-follow") + " @" + handle;
      igLink.hidden = false;
    } else {
      igLink.hidden = true;
      igLink.removeAttribute("href");
    }
  }

  /* ---------------- Directory ---------------- */

  function renderDirectory() {
    const grid = document.getElementById("directory-grid");
    grid.innerHTML = "";
    clubsActive().forEach(club => {
      const card = document.createElement("button");
      card.className = "club-card";
      card.type = "button";
      card.innerHTML =
        '<div class="thumb"><img src="' + club.image + '" alt="' + club.name + '" loading="lazy">' +
        '<span class="' + logoBadgeClass(club) + '"><img src="' + logoSrc(club) + '" alt="' + club.name + ' logo" loading="lazy"></span>' +
        (club.partner ? '<span class="partner-badge">' + t("partner-badge") + "</span>" : "") +
        "</div>" +
        '<div class="club-body">' +
        '<p class="club-name">' + club.name + "</p>" +
        '<p class="club-archetype">' + club.archetype + "</p>" +
        '<p class="club-line">' + club.about.line + "</p>" +
        "</div>";
      card.addEventListener("click", () => {
        const opts = { matched: false };
        state.lastResult = { clubId: club.id, opts };
        renderResult(club.id, opts);
        showScreen("result");
      });
      grid.appendChild(card);
    });
  }

  /* ---------------- Language toggle ---------------- */

  function refreshVisibleScreen() {
    applyStaticI18n();
    if (!screens.quiz.hidden) {
      renderQuestion();
    } else if (!screens.result.hidden && state.lastResult) {
      renderResult(state.lastResult.clubId, state.lastResult.opts);
    } else if (!screens.directory.hidden) {
      renderDirectory();
    }
  }

  document.getElementById("lang-toggle").addEventListener("click", () => {
    LANG = LANG === "zh" ? "en" : "zh";
    document.getElementById("lang-toggle").textContent = LANG === "zh" ? "EN" : "中文";
    refreshVisibleScreen();
  });

  /* ---------------- Nav dispatch ---------------- */

  document.querySelectorAll("[data-nav]").forEach(el => {
    el.addEventListener("click", () => {
      const target = el.getAttribute("data-nav");
      if (target === "quiz") {
        resetQuiz();
        renderQuestion();
        showScreen("quiz");
      } else if (target === "quiz-retake") {
        resetQuiz();
        renderQuestion();
        showScreen("quiz");
      } else if (target === "directory") {
        renderDirectory();
        showScreen("directory");
      } else if (target === "hero") {
        showScreen("hero");
      }
    });
  });

  /* ---------------- Init ---------------- */

  showScreen("hero");
})();
