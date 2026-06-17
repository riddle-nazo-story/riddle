const CONFIG = {
  brand: {
    name: "RIDDLE STORY",
    mark: "4"
  },

  theme: {
    navy: "#050811",
    navy2: "#0a1424",
    blue: "#3f7cff",
    gold: "#c8a75d",
    red: "#b6182d"
  },

  hero: {
    kicker: "ONLINE ARG",
    title: "とあるホテルの秘密",
    catch: "そのホテルには、開けてはいけない記録がある。",
    lead: "閉ざされたホテルの管理端末に残されたログ、客室情報、監視記録。あなたは断片化した情報を調査し、ある夜に起きた“秘密”へ近づいていく。",

    // 画像を入れる場合は assets/hotel.jpg を置く。まだない場合は空文字にする。
    image: "assets/hotel.jpg",
    symbol: "404"
  },

  links: {
    ticket: "https://example.com/ticket",
    contact: "https://example.com/contact"
  },

  specs: [
    ["形式", "オンラインARG / 謎解き"],
    ["人数", "1〜4人推奨"],
    ["時間", "約60〜90分"],
    ["端末", "スマホ／タブレット／PC"],
    ["料金", "1,500円〜"]
  ],

  news: [
    { date: "2026.06.20", text: "『とあるホテルの秘密』特設サイトを公開しました。" },
    { date: "2026.06.21", text: "調査チケットの販売を開始しました。" },
    { date: "2026.06.22", text: "管理端末の一部ログに破損を確認しました。" }
  ],

  storyLead: "あるホテルの管理端末に、不可解な記録が残されていた。",

  story: [
    "あなたがアクセスしたのは、今は使われていないはずのホテル管理端末だった。",
    "客室管理、入退室ログ、遺失物記録、セキュリティ履歴。そこには、通常では表示されないはずの情報が残されている。",
    "しかし記録の一部は破損しており、ところどころ文字化けやエラーが混ざっていた。",
    "復元されていくログの中で、何度も現れるひとつの部屋番号。",
    "そして、消されたはずの宿泊者名。",
    "このホテルで何が起きたのか。あなたは端末に残された断片を読み解き、隠された秘密へ辿り着かなければならない。",
    "■■■■■■■■■■ / ROOM DATA ERROR / 彼女はまだ、そこにいる。"
  ],

  features: [
    {
      title: "客室管理ログ",
      text: "宿泊者情報、部屋番号、異常なステータスを調査します。通常表示されない部屋が見つかるかもしれません。",
      code: "ROOM_LOG"
    },
    {
      title: "スタッフ入場履歴",
      text: "日付、時刻、スタッフIDから行動の矛盾を探します。同じ人物なのに、名前が違う記録も……。",
      code: "STAFF_ID"
    },
    {
      title: "システムリセット",
      text: "破損した画像とコード入力を使って、封印された情報を復元します。間違えると別の記録へ飛ばされることも。",
      code: "RESET_404"
    },
    {
      title: "AIコンシェルジュ",
      text: "ホテル内の案内AIに残された会話ログを調査します。AIは真実を隠しているのか、それとも守っているのか。",
      code: "AI_LOG"
    }
  ],

  howto: [
    {
      title: "チケットを購入",
      text: "チケット販売ページから参加チケットを購入してください。購入後、ゲーム開始ページのURLが案内されます。"
    },
    {
      title: "管理端末へアクセス",
      text: "ゲームページにアクセスし、ホテルの管理端末を調査します。スマホでもプレイ可能ですが、PCだとより見やすく遊べます。"
    },
    {
      title: "記録を読み解く",
      text: "客室情報、ログ、画像、入力欄などを調べながら、隠された違和感を見つけてください。"
    },
    {
      title: "秘密へ辿り着く",
      text: "すべての断片がつながったとき、ホテルに隠された本当の出来事が明らかになります。"
    }
  ],

  tickets: [
    {
      name: "通常チケット",
      price: "1,500円",
      note: "1人用",
      recommend: false,
      details: ["ゲームページURL付き", "スマホ・PC対応", "1人でじっくり調査する方向け"]
    },
    {
      name: "ペアチケット",
      price: "2,600円",
      note: "2人用",
      recommend: true,
      details: ["2人で相談しながら遊べる", "オンライン通話での参加におすすめ", "通常より少しお得"]
    },
    {
      name: "グループチケット",
      price: "4,800円",
      note: "3〜4人用",
      recommend: false,
      details: ["複数人での調査向け", "情報共有しながら進めやすい", "チーム参加におすすめ"]
    }
  ],

  gameInfo: [
    ["販売開始", "2026年6月21日(日) 12:00〜"],
    ["ゲーム公開", "2026年6月22日(月) 18:00〜"],
    ["想定所要時間", "約60〜90分"],
    ["推奨人数", "1〜4人"],
    ["販売場所", "BOOTH / チケット販売サイトなど"],
    ["必要なもの", "インターネットに接続できる端末、メモ用紙、筆記用具"],
    ["雰囲気", "ホラー / ARG / 調査型 / 端末探索"]
  ],

  notices: [
    {
      title: "プレイ環境について",
      items: [
        "スマートフォン、タブレット、PCなどのインターネットに接続できる端末が必要です。",
        "ブラウザのJavaScriptを有効にしてプレイしてください。",
        "通信環境の良い場所でのプレイを推奨します。"
      ]
    },
    {
      title: "演出について",
      items: [
        "本サイトにはノイズ、点滅、グリッチ、エラー表示などの演出が含まれます。",
        "強い点滅が苦手な方は、端末の視覚効果軽減設定をご利用ください。",
        "音声演出を追加する場合は、音量にご注意ください。"
      ]
    },
    {
      title: "ネタバレについて",
      items: [
        "謎の答え、解法、エンディング内容の投稿は禁止です。",
        "感想投稿は歓迎です。ただし、これから遊ぶ方の楽しみを奪わない範囲でお願いします。",
        "スクリーンショットを投稿する場合は、ネタバレが含まれていないかご確認ください。"
      ]
    },
    {
      title: "チケットについて",
      items: [
        "購入後のお客様都合による返金はできません。",
        "ゲームURLの共有、譲渡、転売は禁止です。",
        "複数回プレイする場合は、必要に応じて追加でチケットをご購入ください。"
      ]
    }
  ],

  terminalLines: [
    "[00:00:01] HOTEL MANAGEMENT SYSTEM booting...",
    "[00:00:02] loading room database... OK",
    "[00:00:04] loading staff entry logs... OK",
    "[00:00:06] security camera archive... ERROR",
    "[00:00:07] missing file: /archive/room/■■■/last_guest.dat",
    "[00:00:09] AI concierge status: ONLINE",
    "[00:00:11] warning: duplicated staff ID detected",
    "[00:00:13] restore key required: SYSTEM_RESET_CODE",
    "[00:00:15] message recovered: まだ、終わっていない",
    "[00:00:16] access denied."
  ],

  errors: [
    "記録の復元に失敗しました。",
    "ROOM DATA が破損しています。",
    "存在しない部屋番号が参照されました。",
    "AI_CONCIERGE: 応答がありません。",
    "削除済みログを検出しました。"
  ],

  cta: {
    title: "あなたは、このホテルの秘密に辿り着けるか。",
    text: "すべての記録は、まだ削除されていない。"
  },

  footer: {
    copyright: "© RIDDLE STORY"
  }
};

const $ = (id) => document.getElementById(id);

function setText(id, text) {
  const el = $(id);
  if (el) el.textContent = text;
}

function applyTheme() {
  document.documentElement.style.setProperty("--navy", CONFIG.theme.navy);
  document.documentElement.style.setProperty("--navy2", CONFIG.theme.navy2);
  document.documentElement.style.setProperty("--blue", CONFIG.theme.blue);
  document.documentElement.style.setProperty("--gold", CONFIG.theme.gold);
  document.documentElement.style.setProperty("--red", CONFIG.theme.red);
}

function setupBasic() {
  document.title = `${CONFIG.hero.title}｜${CONFIG.brand.name}`;
  setText("brandMark", CONFIG.brand.mark);
  setText("brandName", CONFIG.brand.name);
  setText("heroKicker", CONFIG.hero.kicker);
  setText("mainTitle", CONFIG.hero.title);
  setText("catchCopy", CONFIG.hero.catch);
  setText("leadText", CONFIG.hero.lead);
  setText("visualSymbol", CONFIG.hero.symbol);
  setText("storyLead", CONFIG.storyLead);
  setText("ticketLead", "購入後、ゲーム開始ページのURLをご確認ください。");
  setText("ctaTitle", CONFIG.cta.title);
  setText("ctaText", CONFIG.cta.text);
  setText("copyright", CONFIG.footer.copyright);
  $("mainTitle").dataset.text = CONFIG.hero.title;
  $("ctaButton").href = CONFIG.links.ticket;
}

function setupHeroImage() {
  if (!CONFIG.hero.image) return;

  document.querySelector(".hero").style.setProperty(
    "--hero-image",
    `url("${CONFIG.hero.image}")`
  );

  const area = $("visualArea");
  const img = document.createElement("img");
  img.src = CONFIG.hero.image;
  img.alt = CONFIG.hero.title;

  img.onerror = () => {
    area.innerHTML = `
      <div class="visual-placeholder">
        <div class="visual-symbol">${CONFIG.hero.symbol}</div>
        <p>MAIN VISUAL<br>NOT FOUND</p>
      </div>
    `;
  };

  area.innerHTML = "";
  area.appendChild(img);
}

function renderSpecs() {
  const area = $("specList");
  area.innerHTML = "";
  CONFIG.specs.forEach(([label, value]) => {
    const div = document.createElement("div");
    div.className = "spec-line";
    div.innerHTML = `<dt>${label}</dt><dd>${value}</dd>`;
    area.appendChild(div);
  });
}

function renderNews() {
  const area = $("newsList");
  area.innerHTML = "";
  CONFIG.news.forEach((item) => {
    const div = document.createElement("article");
    div.className = "news-item";
    div.innerHTML = `<div class="news-date">${item.date}</div><div class="news-text">${item.text}</div>`;
    area.appendChild(div);
  });
}

function renderStory() {
  const area = $("storyText");
  area.innerHTML = "";
  CONFIG.story.forEach((text) => {
    const p = document.createElement("p");
    p.textContent = text;
    if (text.includes("■■") || text.includes("ERROR")) p.className = "corrupted";
    area.appendChild(p);
  });
}

function renderFeatures() {
  const area = $("featureList");
  area.innerHTML = "";
  CONFIG.features.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "feature-card slide-card";
    card.dataset.code = item.code || "LOG";
    card.innerHTML = `
      <div class="feature-num">LOG ${String(index + 1).padStart(2, "0")}</div>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    `;
    area.appendChild(card);
  });
  buildDots("featureList", "featureDots");
}

function renderHowto() {
  const area = $("howList");
  area.innerHTML = "";
  CONFIG.howto.forEach((item) => {
    const card = document.createElement("article");
    card.className = "how-item";
    card.innerHTML = `
      <div class="how-num"></div>
      <div>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>
    `;
    area.appendChild(card);
  });
}

function renderTickets() {
  const area = $("ticketList");
  area.innerHTML = "";
  CONFIG.tickets.forEach((ticket) => {
    const card = document.createElement("article");
    card.className = "ticket-card slide-card" + (ticket.recommend ? " recommend" : "");
    const details = ticket.details.map((text) => `<li>${text}</li>`).join("");
    card.innerHTML = `
      ${ticket.recommend ? `<div class="ticket-label">おすすめ</div>` : ""}
      <h3>${ticket.name}</h3>
      <div class="ticket-price">${ticket.price}<small> / ${ticket.note}</small></div>
      <a href="${CONFIG.links.ticket}" class="btn primary" target="_blank" rel="noopener">購入する</a>
      <ul class="ticket-info">${details}</ul>
    `;
    area.appendChild(card);
  });
  buildDots("ticketList", "ticketDots");
}

function renderGameInfo() {
  const table = $("gameInfoTable");
  table.innerHTML = "";
  CONFIG.gameInfo.forEach(([label, value]) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<th>${label}</th><td>${value}</td>`;
    table.appendChild(tr);
  });
}

function renderNotices() {
  const area = $("noticeList");
  area.innerHTML = "";
  CONFIG.notices.forEach((notice) => {
    const details = document.createElement("details");
    const items = notice.items.map((item) => `<li>${item}</li>`).join("");
    details.innerHTML = `
      <summary>${notice.title}</summary>
      <div class="notice-body"><ul>${items}</ul></div>
    `;
    area.appendChild(details);
  });
}

function setupMenu() {
  const button = $("menuButton");
  const nav = $("nav");
  button.addEventListener("click", () => document.body.classList.toggle("menu-open"));
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => document.body.classList.remove("menu-open"));
  });
}

function getCards(track) {
  return Array.from(track.querySelectorAll(".slide-card"));
}

function getClosestCardIndex(track) {
  const cards = getCards(track);
  if (!cards.length) return 0;
  const trackCenter = track.getBoundingClientRect().left + track.clientWidth / 2;
  let closest = 0;
  let min = Infinity;

  cards.forEach((card, index) => {
    const rect = card.getBoundingClientRect();
    const cardCenter = rect.left + rect.width / 2;
    const diff = Math.abs(trackCenter - cardCenter);
    if (diff < min) {
      min = diff;
      closest = index;
    }
  });

  return closest;
}

function scrollToCard(track, index) {
  const cards = getCards(track);
  if (!cards.length) return;
  const safeIndex = Math.max(0, Math.min(index, cards.length - 1));
  cards[safeIndex].scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "center"
  });
  updateDots(track.id, safeIndex);
}

function buildDots(trackId, dotsId) {
  const track = $(trackId);
  const dots = $(dotsId);
  if (!track || !dots) return;

  dots.innerHTML = "";
  getCards(track).forEach((_, index) => {
    const dot = document.createElement("span");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => scrollToCard(track, index));
    dots.appendChild(dot);
  });
}

function updateDots(trackId, index) {
  const dots = trackId === "featureList" ? $("featureDots") : $("ticketDots");
  if (!dots) return;
  Array.from(dots.children).forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

function setupSliderButtons() {
  document.querySelectorAll("[data-slider-prev]").forEach((button) => {
    button.addEventListener("click", () => {
      const track = $(button.dataset.sliderPrev);
      const now = getClosestCardIndex(track);
      scrollToCard(track, now - 1);
    });
  });

  document.querySelectorAll("[data-slider-next]").forEach((button) => {
    button.addEventListener("click", () => {
      const track = $(button.dataset.sliderNext);
      const now = getClosestCardIndex(track);
      scrollToCard(track, now + 1);
    });
  });

  ["featureList", "ticketList"].forEach((id) => {
    const track = $(id);
    if (!track) return;
    let timer;
    track.addEventListener("scroll", () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        updateDots(id, getClosestCardIndex(track));
      }, 80);
    });
  });
}

function setupTopButton() {
  const button = $("topButton");
  window.addEventListener("scroll", () => {
    button.classList.toggle("show", window.scrollY > 500);
  });
  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function setupTerminal() {
  const target = $("terminalLog");
  if (!target) return;
  let lineIndex = 0;
  target.textContent = "";

  function addLine() {
    if (lineIndex >= CONFIG.terminalLines.length) return;
    const line = CONFIG.terminalLines[lineIndex];
    const isError = /ERROR|warning|denied|missing/.test(line);
    target.innerHTML += `${isError ? '<span class="terminal-error">' : '<span>'}${line}</span>\n`;
    lineIndex += 1;
    setTimeout(addLine, isError ? 520 : 360);
  }

  addLine();
}

function triggerGlitch() {
  const flash = $("screenFlash");
  const toast = $("fakeError");
  const errorText = $("fakeErrorText");

  document.body.classList.add("glitching");
  flash.classList.remove("show");
  void flash.offsetWidth;
  flash.classList.add("show");

  errorText.textContent = CONFIG.errors[Math.floor(Math.random() * CONFIG.errors.length)];
  toast.classList.remove("show");
  void toast.offsetWidth;
  toast.classList.add("show");

  setTimeout(() => document.body.classList.remove("glitching"), 650);
}

function setupHorrorEffects() {
  setTimeout(triggerGlitch, 1600);
  setInterval(() => {
    if (document.hidden) return;
    if (Math.random() > 0.55) triggerGlitch();
  }, 9000);
}

function init() {
  applyTheme();
  setupBasic();
  setupHeroImage();
  renderSpecs();
  renderNews();
  renderStory();
  renderFeatures();
  renderHowto();
  renderTickets();
  renderGameInfo();
  renderNotices();
  setupMenu();
  setupSliderButtons();
  setupTopButton();
  setupTerminal();
  setupHorrorEffects();
}

init();
