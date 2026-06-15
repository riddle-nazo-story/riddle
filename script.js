"use strict";

const CONFIG = {
  apiRefreshMs: 5 * 60 * 1000,

  // 問題画像はローカルファイルで管理するのが安定します。
  // 画像を差し替える時は assets/question.jpg を入れ替えるだけでOK。
  questionImage: "assets/question-004.jpg",
  correctAnswer: "AI",
  reportUrl: "https://x.gd/nivWm",
  maxVisibleSlots: 4,
  apiTimeoutMs: 10000,
  topicAutoMs: 5000,
};

const EVENTS = [
  {
    title: "テスト公演",
    catch: "すべての謎を解け！　30min/40min",
    image: "assets/test.jpg",
    detailUrl: "https://example.com/hotel",
    api: "https://pubapi.escape.id/e/MY3qtFqNrj5a/loc/U4Etz4rYhyNb/slots.json",
    manualDates: [],
    rangeDates: [],
  },
    {
    title: "AIが作ったゲームからの脱出",
    catch: "セレクトアンサーを攻略せよ。",
    image: "assets/escape-ai-game.jpg",
    detailUrl: "https://sites.google.com/view/riddlestory-wait/er3buiv3g45",
    api: null,
    rangeDates: [
      {
        start: "2026-06-20",
        end: "2050-12-31",
        slots: [
          { startAt: "0:00", vacancyType: "NOT_SALE", url: "https://sites.google.com/view/riddlestory-wait/er3buiv3g45" },
        ],
      },
    ],
  },
  {
    title: "とあるホテルの秘密",
    catch: "ホテルに隠された、衝撃の真実に迫れ—。",
    image: "assets/hotel.jpg",
    detailUrl: "https://shop.daiyonkyokai.net/products/26030302?srsltid=AfmBOort5suGu_p4YT1jxlBUvmQoRywWc4zYJ0bB9Qm_Wv33BuevGOr_",
    api: null,
    rangeDates: [
      {
        start: "2026-02-07",
        end: "2050-12-31",
        slots: [
          { startAt: "0:00", vacancyType: "ON_SALE", url: "https://riddle-nazo-story.github.io/4-start/" },
        ],
      },
    ],
  },
  {
    title: "RIDDLE STORY 1",
    catch: "█████の願いを叶えよう。",
    image: "assets/riddlestory1.jpg",
    detailUrl: "https://nazo-shop.booth.pm/items/6993104",
    api: null,
    rangeDates: [
      {
        start: "2025-04-13",
        end: "2025-05-14",
        slots: [
          { startAt: "0:00", vacancyType: "NOT_SALE", url: "https://nazo-shop.booth.pm/items/6993104" },
        ],
      },
    ],
  },
  {
    title: "【アーカイブ】RIDDLE STORY 2",
    catch: "███を救いだせ！！",
    image: "assets/riddlestory2.jpg",
    detailUrl: "https://nazo-shop.booth.pm/items/7303330",
    api: null,
    rangeDates: [
      {
        start: "2025-07-15",
        end: "2050-07-14",
        slots: [
          { startAt: "0:00", vacancyType: "ON_SALE", url: "https://nazo-shop.booth.pm/items/7303330" },
        ],
      },
    ],
  },
  {
    title: "【アーカイブ】RIDDLE STORY 1",
    catch: "█████の願いを叶えよう。",
    image: "assets/riddlestory1.jpg",
    detailUrl: "https://nazo-shop.booth.pm/items/6993104",
    api: null,
    rangeDates: [
      {
        start: "2025-05-15",
        end: "2050-05-14",
        slots: [
          { startAt: "0:00", vacancyType: "ON_SALE", url: "https://nazo-shop.booth.pm/items/6993104" },
        ],
      },
    ],
  },
  {
    title: "RIDDLE STORY 2",
    catch: "███を救いだせ！！",
    image: "assets/riddlestory2.jpg",
    detailUrl: "https://nazo-shop.booth.pm/items/7303330",
    api: null,
    rangeDates: [
      {
        start: "2025-06-23",
        end: "2025-07-14",
        slots: [
          { startAt: "0:00", vacancyType: "NOT_SALE", url: "https://nazo-shop.booth.pm/items/7303330" },
        ],
      },
    ],
  },
  {
    title: "閉ざされた会議室からの脱出",
    catch: "延長料金は1,000万円！？",
    image: "assets/meeting.jpg",
    detailUrl: "https://riddle-nazo-story.github.io/riddle-mini-1/",
    api: null,
    manualDates: [
      {
        date: "2026-03-22",
        slots: [
          { startAt: "10:30", endAt: "10:50", vacancyType: "NOT_SALE", url: "https://escape.id/RIDDLESTORY-org/e-mini-1/" },
          { startAt: "11:00", endAt: "11:20", vacancyType: "NOT_SALE", url: "https://escape.id/RIDDLESTORY-org/e-mini-1/" },
          { startAt: "11:30", endAt: "11:50", vacancyType: "NOT_SALE", url: "https://escape.id/RIDDLESTORY-org/e-mini-1/" },
          { startAt: "12:00", endAt: "12:20", vacancyType: "NOT_SALE", url: "https://escape.id/RIDDLESTORY-org/e-mini-1/" },
          { startAt: "12:30", endAt: "12:50", vacancyType: "NOT_SALE", url: "https://escape.id/RIDDLESTORY-org/e-mini-1/" },
          { startAt: "13:00", endAt: "13:20", vacancyType: "NOT_SALE", url: "https://escape.id/RIDDLESTORY-org/e-mini-1/" },
          { startAt: "13:30", endAt: "13:50", vacancyType: "NOT_SALE", url: "https://escape.id/RIDDLESTORY-org/e-mini-1/" },
          { startAt: "14:00", endAt: "14:20", vacancyType: "NOT_SALE", url: "https://escape.id/RIDDLESTORY-org/e-mini-1/" },
        ],
      },
    ],
    rangeDates: [],
  },
  {
    title: "不可解な転落事故からの脱出",
    catch: "転落事故の真犯人を見つけ出せ！",
    image: "assets/tenraku.jpg",
    detailUrl: "https://tenraku-escape.jimdofree.com/",
    api: null,
    manualDates: [
      {
        date: "2025-09-13",
        slots: [
          { startAt: "20:50", endAt: "22:30", vacancyType: "NOT_SALE", url: "https://teket.jp/14570/55886" },
        ],
      },
      {
        date: "2025-09-14",
        slots: [
          { startAt: "20:50", endAt: "22:30", vacancyType: "NOT_SALE", url: "https://teket.jp/14570/55886" },
        ],
      },
      {
        date: "2025-09-15",
        slots: [
          { startAt: "20:50", endAt: "22:30", vacancyType: "NOT_SALE", url: "https://teket.jp/14570/55886" },
        ],
      },{
        date: "2025-09-19",
        slots: [
          { startAt: "20:50", endAt: "22:30", vacancyType: "NOT_SALE", url: "https://teket.jp/14570/55886" },
        ],
      },
      {
        date: "2025-09-20",
        slots: [
          { startAt: "20:50", endAt: "22:30", vacancyType: "NOT_SALE", url: "https://teket.jp/14570/55886" },
        ],
      },
      {
        date: "2025-09-21",
        slots: [
          { startAt: "20:50", endAt: "22:30", vacancyType: "NOT_SALE", url: "https://teket.jp/14570/55886" },
        ],
      },
      {
        date: "2025-09-22",
        slots: [
          { startAt: "20:50", endAt: "22:30", vacancyType: "NOT_SALE", url: "https://teket.jp/14570/55886" },
        ],
      },
      {
        date: "2025-09-26",
        slots: [
          { startAt: "20:50", endAt: "22:30", vacancyType: "NOT_SALE", url: "https://teket.jp/14570/55886" },
        ],
      },
      {
        date: "2025-09-27",
        slots: [
          { startAt: "20:50", endAt: "22:30", vacancyType: "NOT_SALE", url: "https://teket.jp/14570/55886" },
        ],
      },
      {
        date: "2025-10-10",
        slots: [
          { startAt: "20:50", endAt: "22:30", vacancyType: "NOT_SALE", url: "https://teket.jp/14570/55886" },
        ],
      },
      {
        date: "2025-10-11",
        slots: [
          { startAt: "20:50", endAt: "22:30", vacancyType: "NOT_SALE", url: "https://teket.jp/14570/55886" },
        ],
      },
      {
        date: "2025-10-12",
        slots: [
          { startAt: "20:50", endAt: "22:30", vacancyType: "NOT_SALE", url: "https://teket.jp/14570/55886" },
        ],
      },
      {
        date: "2025-10-13",
        slots: [
          { startAt: "20:50", endAt: "22:30", vacancyType: "NOT_SALE", url: "https://teket.jp/14570/55886" },
        ],
      },
      {
        date: "2025-10-17",
        slots: [
          { startAt: "20:50", endAt: "22:30", vacancyType: "NOT_SALE", url: "https://teket.jp/14570/55886" },
        ],
      },
      {
        date: "2025-10-18",
        slots: [
          { startAt: "20:50", endAt: "22:30", vacancyType: "NOT_SALE", url: "https://teket.jp/14570/55886" },
        ],
      },
      {
        date: "2025-10-19",
        slots: [
          { startAt: "20:50", endAt: "22:30", vacancyType: "NOT_SALE", url: "https://teket.jp/14570/55886" },
        ],
      },
      {
        date: "2025-10-20",
        slots: [
          { startAt: "20:50", endAt: "22:30", vacancyType: "NOT_SALE", url: "https://teket.jp/14570/55886" },
        ],
      },
      {
        date: "2025-10-24",
        slots: [
          { startAt: "20:50", endAt: "22:30", vacancyType: "NOT_SALE", url: "https://teket.jp/14570/55886" },
        ],
      },
      {
        date: "2025-10-25",
        slots: [
          { startAt: "20:50", endAt: "22:30", vacancyType: "NOT_SALE", url: "https://teket.jp/14570/55886" },
        ],
      },
    ],
    rangeDates: [],
  },
];


const GOODS = [
  {
    label: "おすすめ",
    title: "RIDDLE STORY 1 公式攻略本",
    price: "1,000円(税込)",
    desc: "RIDDLE STORY 1の物語や謎を振り返れる公式攻略本です。遊んだ後の余韻にも、これから知りたい人にもおすすめ。",
    image: "assets/goods-1.jpg",
    url: "https://nazo-shop.booth.pm/items/6993104",
  },
  {
    label: "公式攻略本",
    title: "【電子版】RIDDLE STORY 2 公式攻略本",
    price: "950円",
    desc: "███を救い出せ！！RIDDLE STORY 2のアーカイブです。",
    image: "assets/riddlestory2.jpg",
    url: "https://nazo-shop.booth.pm/items/7303330",
  },
  {
    label: "ショップ",
    title: "RIDDLE STORY 公式ショップ",
    price: "商品一覧",
    desc: "RIDDLE STORY関連商品はこちらから確認できます。",
    image: "assets/goods-1.jpg",
    url: "https://nazo-shop.booth.pm/",
  },
];

const GAMES = [
  {
    title: "とあるホテルの秘密",
    catch: "ホテルに隠された、衝撃の真実に迫れ—。",
    badge: "随時スタート",
    subBadge: "4~5時間",
    image: "assets/hotel-1.jpg",
    url: "https://riddle-nazo-story.github.io/4-start/",
  },
  {
    title: "閉ざされた会議室からの脱出",
    catch: "延長料金は1,000万円！？画像は前のものです。",
    badge: "一斉スタート",
    subBadge: "20分",
    image: "assets/meeting-1.jpg",
    url: "https://riddle-nazo-story.github.io/riddle-mini-1/",
  },
  {
    title: "不可解な転落事故からの脱出",
    catch: "転落事故の真犯人を見つけ出せ！",
    badge: "一斉スタート",
    subBadge: "90分~",
    image: "assets/tenraku-1.jpg",
    url: "https://tenraku-escape.jimdofree.com/",
  },
  {
    title: "RIDDLE STORY 2",
    catch: "███を救い出せ！！",
    badge: "一斉スタート",
    subBadge: "アーカイブあり",
    image: "assets/riddlestory2-1.jpg",
    url: "https://nazo-shop.booth.pm/items/7303330",
  },
  {
    title: "RIDDLE STORY 1",
    catch: "█████の願いを叶えよう。",
    badge: "一斉スタート",
    subBadge: "アーカイブあり",
    image: "assets/riddlestory1-1.jpg",
    url: "https://booth.pm/ja/items/6993104",
  },
];

const state = {
  events: [],
  allDates: [],
  selectedDate: "",
  weekOffset: 0,
  baseWeekStart: null,
  expandedEventKeys: new Set(),
  firstLoadDone: false,
  topicIndex: 0,
  topicTimer: null,
  goodsIndex: 0,
};

const els = {};

function cacheElements() {
  Object.assign(els, {
    menuButton: document.getElementById("menuButton"),
    drawer: document.getElementById("drawer"),
    drawerBackdrop: document.getElementById("drawerBackdrop"),
    questionJump: document.getElementById("questionJump"),
    questionImage: document.getElementById("questionImage"),
    answerForm: document.getElementById("answerForm"),
    answerInput: document.getElementById("answerInput"),
    reportArea: document.getElementById("reportArea"),
    reportLink: document.getElementById("reportLink"),
    prevWeek: document.getElementById("prevWeek"),
    nextWeek: document.getElementById("nextWeek"),
    dateDisplay: document.getElementById("dateDisplay"),
    dateStrip: document.getElementById("dateStrip"),
    ticketList: document.getElementById("ticketList"),
    ticketStatus: document.getElementById("ticketStatus"),
    ticketUpdatedAt: document.getElementById("ticketUpdatedAt"),
    ticketSource: document.getElementById("ticketSource"),
    ticketRefreshButton: document.getElementById("ticketRefreshButton"),
    gameGrid: document.getElementById("gameGrid"),
    topicSlider: document.getElementById("topicSlider") || document.querySelector(".slider"),
    topicPrev: document.getElementById("topicPrev"),
    topicNext: document.getElementById("topicNext"),
    topicDots: document.getElementById("topicDots"),
    goodsSlider: document.getElementById("goodsSlider"),
    goodsPrev: document.getElementById("goodsPrev"),
    goodsNext: document.getElementById("goodsNext"),
    goodsDots: document.getElementById("goodsDots"),
  });
}

function escapeHtml(text) {
  return String(text ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function toYmd(dateObj) {
  const y = dateObj.getFullYear();
  const m = String(dateObj.getMonth() + 1).padStart(2, "0");
  const d = String(dateObj.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function getStartOfWeek(dateObj) {
  const d = new Date(dateObj);
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() - d.getDay());
  return d;
}

function getWeekDatesFromBase(baseWeekStart, offsetWeek) {
  const start = new Date(baseWeekStart || getStartOfWeek(new Date()));
  start.setDate(start.getDate() + offsetWeek * 7);

  const arr = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    arr.push(d);
  }
  return arr;
}

function formatMonthDay(dateObj) {
  return `${dateObj.getMonth() + 1}/${dateObj.getDate()}`;
}

function weekdayLabel(dateObj) {
  return ["日", "月", "火", "水", "木", "金", "土"][dateObj.getDay()];
}

function getStatusMeta(vacancyType) {
  switch (vacancyType) {
    case "ON_SALE":
      return { label: "○", text: "販売中", className: "is-sale", clickable: true };
    case "FEW_LEFT":
      return { label: "△", text: "残りわずか", className: "is-few", clickable: true };
    case "SOLD_OUT":
      return { label: "×", text: "満席", className: "is-sold", clickable: false };
    case "NOT_SALE":
      return { label: "-", text: "公演終了", className: "is-notsale", clickable: false };
    case "NOT_IN_SALES_PERIOD":
    case "BEFORE_SALES_PERIOD":
    case "AFTER_SALES_PERIOD":
      return { label: "―", text: "受付外", className: "is-closed", clickable: false };
    default:
      return { label: "・", text: "受付外", className: "is-closed", clickable: false };
  }
}

function normalizeSlot(slot = {}) {
  return {
    ...slot,
    startAt: slot.startAt ?? slot.start_at ?? slot.start ?? slot.startTime ?? slot.start_time ?? "",
    endAt: slot.endAt ?? slot.end_at ?? slot.end ?? slot.endTime ?? slot.end_time ?? "",
    vacancyType: slot.vacancyType ?? slot.vacancy_type ?? slot.status ?? slot.vacancy ?? "ON_SALE",
    url: slot.url ?? slot.purchaseUrl ?? slot.purchase_url ?? slot.detailUrl ?? slot.detail_url ?? "",
  };
}

function normalizeApiDates(json) {
  const candidates = [
    json?.dates,
    json?.data?.dates,
    json?.event?.dates,
    Array.isArray(json) ? json : null,
  ];

  const dates = candidates.find(Array.isArray) || [];
  return dates
    .map((d) => ({
      date: d.date ?? d.ymd ?? d.day ?? "",
      slots: Array.isArray(d.slots) ? d.slots.map(normalizeSlot) : [],
    }))
    .filter((d) => d.date);
}

function expandRangeDates(rangeDates = []) {
  const result = [];

  for (const range of rangeDates) {
    const start = new Date(`${range.start}T00:00:00`);
    const end = new Date(`${range.end}T00:00:00`);

    if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) continue;

    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      result.push({
        date: toYmd(d),
        slots: (range.slots || []).map(normalizeSlot),
      });
    }
  }

  return result;
}

function mergeDates(apiDates = [], manualDates = [], rangeDates = []) {
  const map = new Map();

  const addDate = (dateObj) => {
    if (!dateObj?.date) return;
    if (!map.has(dateObj.date)) {
      map.set(dateObj.date, { date: dateObj.date, slots: [] });
    }
    const current = map.get(dateObj.date);
    current.slots.push(...(Array.isArray(dateObj.slots) ? dateObj.slots.map(normalizeSlot) : []));
  };

  apiDates.forEach(addDate);
  manualDates.forEach(addDate);
  expandRangeDates(rangeDates).forEach(addDate);

  return [...map.values()].sort((a, b) => {
    if (a.date === "常設") return 1;
    if (b.date === "常設") return -1;
    return a.date.localeCompare(b.date);
  });
}

async function fetchWithTimeout(url, timeoutMs = CONFIG.apiTimeoutMs) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const separator = url.includes("?") ? "&" : "?";
    const res = await fetch(`${url}${separator}t=${Date.now()}`, {
      cache: "no-store",
      signal: controller.signal,
      headers: { Accept: "application/json" },
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } finally {
    clearTimeout(timer);
  }
}

async function fetchEventData(spec) {
  let apiDates = [];
  let apiOk = true;
  let apiError = "";

  if (spec.api) {
    try {
      const json = await fetchWithTimeout(spec.api);
      apiDates = normalizeApiDates(json);
    } catch (error) {
      apiOk = false;
      apiError = error?.name === "AbortError" ? "タイムアウト" : String(error?.message || error);
      console.warn("API取得に失敗:", spec.title, apiError);
    }
  }

  const dates = mergeDates(apiDates, spec.manualDates || [], spec.rangeDates || []);
  return { ...spec, dates, apiOk, apiError };
}

function getTodayYmd() {
  return toYmd(new Date());
}

function setSelectedDateFromTodayIfPossible() {
  const today = getTodayYmd();
  const dateSet = new Set(state.allDates.filter((d) => d !== "常設"));

  if (dateSet.has(today)) {
    state.selectedDate = today;
    return;
  }

  state.selectedDate = today;
}

function renderDateStrip() {
  if (!els.dateStrip) return;
  els.dateStrip.innerHTML = "";

  const weekDates = getWeekDatesFromBase(state.baseWeekStart, state.weekOffset);
  const today = getTodayYmd();

  weekDates.forEach((dateObj) => {
    const ymd = toYmd(dateObj);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "day-box";
    button.dataset.ymd = ymd;

    const day = dateObj.getDay();
    if (day === 6) button.classList.add("is-sat");
    if (day === 0) button.classList.add("is-sun");
    if (ymd === state.selectedDate) button.classList.add("is-active");
    if (ymd === today) button.classList.add("is-today");

    button.innerHTML = `
      <div class="day-box__monthday">${formatMonthDay(dateObj)}</div>
      <div class="day-box__weekday">${weekdayLabel(dateObj)}</div>
    `;

    button.addEventListener("click", () => {
      state.selectedDate = ymd;
      renderDateStrip();
      renderDateDisplay();
      renderTickets();
    });

    els.dateStrip.appendChild(button);
  });
}

function renderDateDisplay() {
  if (!els.dateDisplay) return;
  const d = state.selectedDate;
  if (!d || d === "常設") {
    els.dateDisplay.textContent = "常設";
    return;
  }

  const dateObj = new Date(`${d}T00:00:00`);
  if (Number.isNaN(dateObj.getTime())) {
    els.dateDisplay.textContent = d;
    return;
  }

  els.dateDisplay.textContent = `${dateObj.getFullYear()}年${dateObj.getMonth() + 1}月${dateObj.getDate()}日`;
}

function formatTimePart(value) {
  if (!value) return "";
  if (/^\d{1,2}:\d{2}$/.test(value)) return value;
  const parts = String(value).split(" ");
  if (parts.length >= 2) return parts[1].slice(0, 5);
  return String(value).slice(0, 5);
}

function formatTimeLabel(slot) {
  const start = formatTimePart(slot.startAt);
  const end = formatTimePart(slot.endAt);
  if (!start && !end) return "随時";
  if (start && !end) return `${start}-`;
  return `${start} - ${end}`;
}

function getVisibleSlotsForEvent(event) {
  return event.dates
    .filter((d) => d.date === state.selectedDate || d.date === "常設")
    .flatMap((d) => d.slots);
}

function eventKey(event) {
  return `${event.title}__${state.selectedDate}`;
}

function renderTickets() {
  if (!els.ticketList) return;
  els.ticketList.innerHTML = "";

  const visibleEvents = state.events
    .map((event) => ({
      ...event,
      slots: getVisibleSlotsForEvent(event),
    }))
    .filter((event) => event.slots.length > 0);

  if (!visibleEvents.length) {
    els.ticketList.innerHTML = `<div class="ticket-card">この日に表示できる公演はありません。</div>`;
    return;
  }

  for (const event of visibleEvents) {
    const card = document.createElement("article");
    card.className = "ticket-card";

    const inner = document.createElement("div");
    inner.className = "ticket-card__inner";

    const visual = document.createElement("a");
    visual.className = "ticket-card__visual";
    visual.href = event.detailUrl || "#";
    visual.target = "_blank";
    visual.rel = "noopener noreferrer";

    const poster = document.createElement("img");
    poster.className = "ticket-card__poster";
    poster.src = event.image || "assets/placeholder.jpg";
    poster.alt = event.title;
    poster.addEventListener("error", () => { poster.src = "assets/placeholder.jpg"; }, { once: true });

    visual.appendChild(poster);

    const body = document.createElement("div");
    body.className = "ticket-card__body";

    const titleLink = document.createElement("a");
    titleLink.className = "ticket-card__title-link";
    titleLink.href = event.detailUrl || "#";
    titleLink.target = "_blank";
    titleLink.rel = "noopener noreferrer";

    const title = document.createElement("h3");
    title.className = "ticket-card__title";
    title.textContent = event.title;

    titleLink.appendChild(title);

    const catchText = document.createElement("p");
    catchText.className = "ticket-card__catch";
    catchText.textContent = event.catch || "";

    const detailLink = document.createElement("a");
    detailLink.className = "ticket-card__detail";
    detailLink.href = event.detailUrl || "#";
    detailLink.target = "_blank";
    detailLink.rel = "noopener noreferrer";
    detailLink.textContent = "公演詳細";

    const slotGrid = document.createElement("div");
    slotGrid.className = "slot-grid";

    const expanded = state.expandedEventKeys.has(eventKey(event));
    const shouldCollapse = event.slots.length > CONFIG.maxVisibleSlots && !expanded;
    const visibleSlots = shouldCollapse
      ? event.slots.slice(0, Math.max(CONFIG.maxVisibleSlots - 1, 1))
      : event.slots.slice();

    visibleSlots.forEach((slot) => {
      const status = getStatusMeta(slot.vacancyType);
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `slot-box ${status.className}`;
      btn.setAttribute("aria-label", `${event.title} ${formatTimeLabel(slot)} ${status.text}`);

      if (!status.clickable) {
        btn.classList.add("is-disabled");
        btn.setAttribute("aria-disabled", "true");
      }

      btn.innerHTML = `
        <div class="slot-box__mark">${status.label}</div>
        <div class="slot-box__time">${escapeHtml(formatTimeLabel(slot))}</div>
      `;

      btn.addEventListener("click", () => {
        if (!status.clickable) return;
        const url = slot.url || event.detailUrl;
        if (url) window.open(url, "_blank", "noopener,noreferrer");
      });

      slotGrid.appendChild(btn);
    });

    if (shouldCollapse) {
      const moreButton = document.createElement("button");
      moreButton.type = "button";
      moreButton.className = "slot-box slot-box--more";
      moreButton.innerHTML = `
        <div class="slot-box__mark">＋</div>
        <div class="slot-box__time">もっと見る</div>
      `;
      moreButton.addEventListener("click", () => {
        state.expandedEventKeys.add(eventKey(event));
        renderTickets();
      });
      slotGrid.appendChild(moreButton);
    } else if (event.slots.length > CONFIG.maxVisibleSlots && expanded) {
      const closeButton = document.createElement("button");
      closeButton.type = "button";
      closeButton.className = "slot-box slot-box--more";
      closeButton.innerHTML = `
        <div class="slot-box__mark">－</div>
        <div class="slot-box__time">閉じる</div>
      `;
      closeButton.addEventListener("click", () => {
        state.expandedEventKeys.delete(eventKey(event));
        renderTickets();
      });
      slotGrid.appendChild(closeButton);
    }

    body.append(titleLink, catchText, detailLink, slotGrid);
    inner.append(visual, body);
    card.append(inner);
    els.ticketList.appendChild(card);
  }
}

function renderGames() {
  if (!els.gameGrid) return;
  els.gameGrid.innerHTML = "";
  const template = document.getElementById("gameCardTemplate");
  if (!template) return;

  GAMES.forEach((game) => {
    const node = template.content.cloneNode(true);
    const link = node.querySelector(".game-card");
    const img = node.querySelector(".game-card__thumb");
    const title = node.querySelector(".game-card__title");
    const catchText = node.querySelector(".game-card__catch");
    const badge = node.querySelector(".game-card__badge");
    const subBadge = node.querySelector(".game-card__badge--sub");

    link.href = game.url || "#";
    link.addEventListener("click", (e) => {
      if (!game.url || game.url === "#") e.preventDefault();
    });

    img.src = game.image || "assets/placeholder.jpg";
    img.alt = game.title;
    img.addEventListener("error", () => { img.src = "assets/placeholder.jpg"; }, { once: true });

    title.textContent = game.title;
    catchText.textContent = game.catch || "";
    badge.textContent = game.badge || "";
    subBadge.textContent = game.subBadge || "";

    els.gameGrid.appendChild(node);
  });
}

function moveWeek(delta) {
  const currentWeekDates = getWeekDatesFromBase(state.baseWeekStart, state.weekOffset);
  const currentIndex = currentWeekDates.findIndex((d) => toYmd(d) === state.selectedDate);
  const safeIndex = currentIndex >= 0 ? currentIndex : 0;

  state.weekOffset += delta;

  const nextWeekDates = getWeekDatesFromBase(state.baseWeekStart, state.weekOffset);
  state.selectedDate = toYmd(nextWeekDates[Math.min(safeIndex, 6)]);

  renderDateStrip();
  renderDateDisplay();
  renderTickets();
}

function setDrawer(open) {
  if (!els.drawer || !els.drawerBackdrop || !els.menuButton) return;
  els.drawer.classList.toggle("is-open", open);
  els.drawerBackdrop.classList.toggle("is-open", open);
  els.menuButton.setAttribute("aria-expanded", String(open));
}

function initDrawer() {
  if (!els.menuButton || !els.drawer || !els.drawerBackdrop) return;

  els.menuButton.addEventListener("click", () => {
    const open = !els.drawer.classList.contains("is-open");
    setDrawer(open);
  });

  els.drawerBackdrop.addEventListener("click", () => setDrawer(false));
  els.drawer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setDrawer(false));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setDrawer(false);
  });
}

function initAnswerForm() {
  if (!els.answerForm || !els.answerInput) return;

  els.answerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = els.answerInput.value.trim();
    const normalized = value.replace(/\s+/g, "").toLowerCase();
    const correct = String(CONFIG.correctAnswer).replace(/\s+/g, "").toLowerCase();

    if (!value) {
      alert("答えを入力してください。");
      return;
    }

    if (normalized === correct) {
      els.reportArea?.classList.add("is-visible");
      if (els.reportLink) els.reportLink.href = CONFIG.reportUrl;
      return;
    }

    els.reportArea?.classList.remove("is-visible");
    alert("不正解。何かが違うようです。");
  });
}

function initJump() {
  if (!els.questionJump) return;
  els.questionJump.addEventListener("click", () => {
    document.getElementById("ticketSection")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function initStaticLinks() {
  document.querySelectorAll("[data-url]").forEach((el) => {
    const url = el.getAttribute("data-url");
    el.addEventListener("click", (e) => {
      if (!url || url === "#") e.preventDefault();
    });
  });

  document.querySelectorAll("a[href]").forEach((link) => {
    const href = link.getAttribute("href") || "";
    if (href.startsWith("http")) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });
}

function initQuestionImage() {
  if (!els.questionImage) return;
  if (CONFIG.questionImage) els.questionImage.src = CONFIG.questionImage;
  els.questionImage.addEventListener("error", () => {
    els.questionImage.src = "assets/placeholder.jpg";
  }, { once: true });
}

function initTopicSlider() {
  if (!els.topicSlider) return;

  const links = [...els.topicSlider.querySelectorAll("a")];
  if (!links.length) return;

  links.forEach((link, index) => {
    link.classList.add("topic-slide-link");
    const img = link.querySelector(".slide") || link.querySelector("img");
    if (img) img.classList.toggle("active", index === 0);
    link.classList.toggle("is-active", index === 0);
  });

  function renderTopic() {
    links.forEach((link, index) => {
      const active = index === state.topicIndex;
      link.classList.toggle("is-active", active);
      const img = link.querySelector(".slide") || link.querySelector("img");
      if (img) img.classList.toggle("active", active);
    });

    if (els.topicDots) {
      els.topicDots.querySelectorAll(".topic-dot").forEach((dot, index) => {
        dot.classList.toggle("is-active", index === state.topicIndex);
        dot.setAttribute("aria-current", index === state.topicIndex ? "true" : "false");
      });
    }
  }

  function showTopic(nextIndex, resetTimer = true) {
    state.topicIndex = (nextIndex + links.length) % links.length;
    renderTopic();
    if (resetTimer) restartTopicTimer();
  }

  function restartTopicTimer() {
    clearInterval(state.topicTimer);
    state.topicTimer = setInterval(() => showTopic(state.topicIndex + 1, false), CONFIG.topicAutoMs);
  }

  if (els.topicDots) {
    els.topicDots.innerHTML = "";
    links.forEach((_, index) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "topic-dot";
      dot.setAttribute("aria-label", `トピックス${index + 1}を表示`);
      dot.addEventListener("click", () => showTopic(index));
      els.topicDots.appendChild(dot);
    });
  }

  els.topicPrev?.addEventListener("click", () => showTopic(state.topicIndex - 1));
  els.topicNext?.addEventListener("click", () => showTopic(state.topicIndex + 1));

  renderTopic();
  restartTopicTimer();
}


function initGoodsSlider() {
  if (!els.goodsSlider || !Array.isArray(GOODS) || GOODS.length === 0) return;

  els.goodsSlider.innerHTML = "";

  GOODS.forEach((goods, index) => {
    const slide = document.createElement("article");
    slide.className = "goods-slide";
    if (index === 0) slide.classList.add("is-active");

    const safeUrl = goods.url || "#";
    const safeImage = goods.image || "assets/placeholder.jpg";

    slide.innerHTML = `
      <div class="goods-slide__image-wrap">
        <img class="goods-slide__image" src="${escapeHtml(safeImage)}" alt="${escapeHtml(goods.title || "グッズ")}">
      </div>

      <div class="goods-slide__body">
        <div class="goods-slide__label">${escapeHtml(goods.label || "GOODS")}</div>
        <h3 class="goods-slide__title">${escapeHtml(goods.title || "")}</h3>
        <p class="goods-slide__price">${escapeHtml(goods.price || "")}</p>
        <p class="goods-slide__desc">${escapeHtml(goods.desc || "")}</p>
        <a class="goods-slide__button" href="${escapeHtml(safeUrl)}" target="_blank" rel="noopener noreferrer">
          詳細・購入はこちら
        </a>
      </div>
    `;

    const img = slide.querySelector("img");
    img?.addEventListener("error", () => {
      img.src = "assets/placeholder.jpg";
    }, { once: true });

    els.goodsSlider.appendChild(slide);
  });

  function renderGoods(index) {
    const slides = [...els.goodsSlider.querySelectorAll(".goods-slide")];
    if (!slides.length) return;

    state.goodsIndex = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
      slide.classList.toggle("is-active", i === state.goodsIndex);
    });

    els.goodsDots?.querySelectorAll(".goods-dot").forEach((dot, i) => {
      dot.classList.toggle("is-active", i === state.goodsIndex);
      dot.setAttribute("aria-current", i === state.goodsIndex ? "true" : "false");
    });
  }

  if (els.goodsDots) {
    els.goodsDots.innerHTML = "";
    GOODS.forEach((_, index) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "goods-dot";
      dot.setAttribute("aria-label", `グッズ${index + 1}を表示`);
      dot.addEventListener("click", () => renderGoods(index));
      els.goodsDots.appendChild(dot);
    });
  }

  els.goodsPrev?.addEventListener("click", () => renderGoods(state.goodsIndex - 1));
  els.goodsNext?.addEventListener("click", () => renderGoods(state.goodsIndex + 1));

  renderGoods(0);
}

async function loadAllData({ keepDate = false, manual = false } = {}) {
  if (!els.ticketStatus) return;

  const beforeSelectedDate = state.selectedDate;
  const beforeWeekOffset = state.weekOffset;

  els.ticketStatus.textContent = manual ? "チケット情報を再取得中..." : "最新情報を取得中...";
  if (els.ticketRefreshButton) els.ticketRefreshButton.disabled = true;

  try {
    state.events = await Promise.all(EVENTS.map(fetchEventData));

    const rawDates = state.events.flatMap((event) => event.dates.map((d) => d.date));
    state.allDates = [...new Set(rawDates.filter((d) => d && d !== "常設"))].sort((a, b) => a.localeCompare(b));

    if (!state.firstLoadDone || !state.baseWeekStart) {
      state.baseWeekStart = getStartOfWeek(new Date());
      setSelectedDateFromTodayIfPossible();
      state.weekOffset = 0;
    } else if (keepDate) {
      state.selectedDate = beforeSelectedDate || getTodayYmd();
      state.weekOffset = beforeWeekOffset;
    }

    renderDateDisplay();
    renderDateStrip();
    renderTickets();
    renderGames();

    const apiFailures = state.events.filter((event) => event.api && !event.apiOk);
    if (apiFailures.length) {
      els.ticketStatus.textContent = "一部APIの取得に失敗しました。手動設定分は表示しています。";
    } else {
      els.ticketStatus.textContent = "最新情報を反映しました。";
    }

    if (els.ticketUpdatedAt) {
      els.ticketUpdatedAt.textContent = `更新日時: ${new Date().toLocaleString("ja-JP")}`;
    }

    const firstApi = EVENTS.find((event) => event.api)?.api;
    if (els.ticketSource) {
      els.ticketSource.textContent = firstApi ? "公演情報API" : "公演情報";
      els.ticketSource.href = firstApi || "#";
    }

    state.firstLoadDone = true;
  } catch (error) {
    console.error("チケット情報の更新に失敗:", error);
    els.ticketStatus.textContent = "チケット情報の更新に失敗しました。時間をおいて再度お試しください。";
  } finally {
    if (els.ticketRefreshButton) els.ticketRefreshButton.disabled = false;
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  cacheElements();

  initQuestionImage();
  initDrawer();
  initAnswerForm();
  initJump();
  initStaticLinks();
  initTopicSlider();
  initGoodsSlider();

  els.prevWeek?.addEventListener("click", () => moveWeek(-1));
  els.nextWeek?.addEventListener("click", () => moveWeek(1));
  els.ticketRefreshButton?.addEventListener("click", () => loadAllData({ keepDate: true, manual: true }));

  await loadAllData();
  setInterval(() => loadAllData({ keepDate: true }), CONFIG.apiRefreshMs);
});
