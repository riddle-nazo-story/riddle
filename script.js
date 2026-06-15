function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

// スライド処理
let current = 0;
const slides = document.querySelectorAll(".slide");

setInterval(() => {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}, 3000);

const CONFIG = {
  apiRefreshMs: 5 * 60 * 1000,

const CONFIG = {
  apiRefreshMs: 5 * 60 * 1000,

// 画像URLを直接指定
  questionImage:
    "https://previews.dropbox.com/p/thumb/ADBtlsxg5dCaHBeL5RWI0FI_jtaACLtYY3pTzFjeiJKs1TRJd8qosbv9_4KdUQ_A1MxIdk6NHL7zt97HrNi-TWQI8Qwu4xWoA49Yfy1ckfssjwKAcUnRwNG0REesCM4dSdV7-o9x6Ku-58jfUvKV9yPP5scGOKCGOawLWG-nLGlVvbWsypQqQxUStumXYJdICarjAH2Fxrt5XyfAOvdI5SmWR-NZAqZNLK1eu6rk5ZCWBjC-9qPG0zwY_4wb6MsSzT2Ulhj5oHoUFhyo41ZgE5ScmxsCZS1oSsuVrI3BbsvqUKz6Sw8z3p0vka-nFyhCoOgSUl2N6fCzTuO-x4EO5oJD/p.png?is_prewarmed=true",
  correctAnswer: "ひさき",
  reportUrl: "https://x.gd/nivWm",
  maxVisibleSlots: 4,
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
};

const els = {
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
  gameGrid: document.getElementById("gameGrid"),
};

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
  const start = new Date(baseWeekStart);
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
      return { label: "○", text: "販売中", className: "is-sale" };
    case "FEW_LEFT":
      return { label: "△", text: "残りわずか", className: "is-few" };
    case "SOLD_OUT":
      return { label: "×", text: "満席", className: "is-sold" };
      case "NOT_SALE":
  return { label: "-", text: "公演終了", className: "is-notsale" };
    case "NOT_IN_SALES_PERIOD":
    case "BEFORE_SALES_PERIOD":
    case "AFTER_SALES_PERIOD":
      return { label: "―", text: "受付外", className: "is-closed" };
    default:
      return { label: "・", text: "受付外", className: "is-closed" };
  }
}

function normalizeSlot(slot) {
  return {
    ...slot,
    startAt: slot.startAt ?? "",
    endAt: slot.endAt ?? "",
    vacancyType: slot.vacancyType ?? "ON_SALE",
    url: slot.url ?? "",
  };
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

  for (const d of apiDates) {
    map.set(d.date, {
      date: d.date,
      slots: Array.isArray(d.slots) ? d.slots.map(normalizeSlot) : [],
    });
  }

  for (const d of manualDates) {
    if (!map.has(d.date)) {
      map.set(d.date, { date: d.date, slots: [] });
    }
    const current = map.get(d.date);
    current.slots.push(...(Array.isArray(d.slots) ? d.slots.map(normalizeSlot) : []));
  }

  for (const d of expandRangeDates(rangeDates)) {
    if (!map.has(d.date)) {
      map.set(d.date, { date: d.date, slots: [] });
    }
    const current = map.get(d.date);
    current.slots.push(...d.slots);
  }

  return [...map.values()].sort((a, b) => {
    if (a.date === "常設") return 1;
    if (b.date === "常設") return -1;
    return a.date.localeCompare(b.date);
  });
}

async function fetchEventData(spec) {
  let apiDates = [];

  if (spec.api) {
    try {
      const res = await fetch(`${spec.api}?t=${Date.now()}`, { cache: "no-store" });
      if (res.ok) {
        const json = await res.json();
        if (Array.isArray(json?.dates)) {
          apiDates = json.dates;
        }
      }
    } catch (error) {
      console.warn("API取得に失敗:", spec.title, error);
    }
  }

  const dates = mergeDates(apiDates, spec.manualDates || [], spec.rangeDates || []);
  return { ...spec, dates };
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

  state.selectedDate = state.allDates.find((d) => d !== "常設") || state.allDates[0] || today;
}

function renderDateStrip() {
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
  if (!start && !end) return "";
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
  els.ticketList.innerHTML = "";

  const visibleEvents = state.events
    .map((event) => ({
      ...event,
      slots: getVisibleSlotsForEvent(event),
    }))
    .filter((event) => event.slots.length > 0);

  if (!visibleEvents.length) {
    els.ticketList.innerHTML = `<div class="ticket-card">表示できる公演がありません。</div>`;
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

    const poster = document.createElement("img");
    poster.className = "ticket-card__poster";
    poster.src = event.image || "assets/placeholder.jpg";
    poster.alt = event.title;
    poster.addEventListener(
      "error",
      () => {
        poster.src = "assets/placeholder.jpg";
      },
      { once: true }
    );

    visual.appendChild(poster);

    const body = document.createElement("div");
    body.className = "ticket-card__body";

    const titleLink = document.createElement("a");
    titleLink.className = "ticket-card__title-link";
    titleLink.href = event.detailUrl || "#";

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
    detailLink.textContent = "公演詳細";

    const slotGrid = document.createElement("div");
    slotGrid.className = "slot-grid";

    const expanded = state.expandedEventKeys.has(eventKey(event));
    const shouldCollapse = event.slots.length > CONFIG.maxVisibleSlots && !expanded;
    const visibleSlots = shouldCollapse
      ? event.slots.slice(0, CONFIG.maxVisibleSlots - 1)
      : event.slots.slice();

    visibleSlots.forEach((slot) => {
      const status = getStatusMeta(slot.vacancyType);

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "slot-box";
      btn.setAttribute("aria-label", `${event.title} ${formatTimeLabel(slot)} ${status.text}`);

      btn.innerHTML = `
        <div class="slot-box__mark">${status.label}</div>
        <div class="slot-box__time">${escapeHtml(formatTimeLabel(slot))}</div>
      `;

      btn.addEventListener("click", () => {
        if (slot.vacancyType === "NOT_SALE") return; // ←ここ追加
        const url = slot.url || event.detailUrl;
        if (url) window.location.href = url;
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
  els.gameGrid.innerHTML = "";
  const template = document.getElementById("gameCardTemplate");

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
    img.addEventListener(
      "error",
      () => {
        img.src = "assets/placeholder.jpg";
      },
      { once: true }
    );

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
  els.drawer.classList.toggle("is-open", open);
  els.drawerBackdrop.classList.toggle("is-open", open);
  els.menuButton.setAttribute("aria-expanded", String(open));
}

function initDrawer() {
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
      els.reportArea.classList.add("is-visible");
      els.reportLink.href = CONFIG.reportUrl;
      return;
    }

    els.reportArea.classList.remove("is-visible");
    alert("不正解。何かが違うようです。");
  });
}

function initJump() {
  els.questionJump.addEventListener("click", () => {
    document.getElementById("ticketSection").scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function initStaticLinks() {
  document.querySelectorAll("[data-url]").forEach((el) => {
    const url = el.getAttribute("data-url");
    el.addEventListener("click", (e) => {
      if (!url || url === "#") e.preventDefault();
    });
  });
}

async function loadAllData() {
  els.ticketStatus.textContent = "最新情報を取得中...";

  state.events = await Promise.all(EVENTS.map(fetchEventData));

  const rawDates = state.events.flatMap((event) => event.dates.map((d) => d.date));
  state.allDates = [...new Set(rawDates.filter((d) => d && d !== "常設"))].sort((a, b) => a.localeCompare(b));

  state.baseWeekStart = getStartOfWeek(new Date());
  setSelectedDateFromTodayIfPossible();

  renderDateDisplay();
  renderDateStrip();
  renderTickets();
  renderGames();

  els.ticketStatus.textContent = "最新情報を反映しました。";
  els.ticketUpdatedAt.textContent = `更新日時: ${new Date().toLocaleString("ja-JP")}`;
  els.ticketSource.textContent = "公演情報";
  els.ticketSource.href = EVENTS[0]?.api || "#";
}

document.addEventListener("DOMContentLoaded", async () => {
  if (els.questionImage) {
    els.questionImage.src = CONFIG.questionImage;
    els.questionImage.addEventListener(
      "error",
      () => {
        els.questionImage.src = "assets/placeholder.jpg";
      },
      { once: true }
    );
  }

  initDrawer();
  initAnswerForm();
  initJump();
  initStaticLinks();

  els.prevWeek.addEventListener("click", () => moveWeek(-1));
  els.nextWeek.addEventListener("click", () => moveWeek(1));

  await loadAllData();
  setInterval(loadAllData, CONFIG.apiRefreshMs);
  
    document.querySelectorAll("a[href]").forEach(link => {
    if (link.getAttribute("href").startsWith("http")) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });
});
