<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>مكتبة الخطوط العربية</title>
  
  <meta name="description" content="تحميل خطوط عربية مجانية من Google Fonts - معاينة وروابط تحميل مباشرة"/>
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <style>
    :root {
      --bg: #0d1117;
      --card: #161b22;
      --text: #c9d1d9;
      --accent: #58a6ff;
      --accent-dark: #388bfd;
      --border: #30363d;
      --hover: #21262d;
    }

    * { margin:0; padding:0; box-sizing:border-box; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.6;
      min-height: 100vh;
    }

    header {
      text-align: center;
      padding: 2.5rem 1rem 1.5rem;
    }

    h1 {
      font-size: 2.5rem;
      color: var(--accent);
      margin-bottom: 0.5rem;
    }

    .subtitle {
      color: #8b949e;
      font-size: 1.1rem;
      max-width: 700px;
      margin: 0 auto;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem 4rem;
    }

    .search-box {
      margin: 2rem 0;
      text-align: center;
    }

    #searchInput {
      width: 100%;
      max-width: 550px;
      padding: 0.9rem 1.3rem;
      font-size: 1.1rem;
      border: 1px solid var(--border);
      border-radius: 8px;
      background: #0d1117;
      color: white;
    }

    #searchInput:focus {
      outline: none;
      border-color: var(--accent);
      box-shadow: 0 0 0 3px rgba(88,166,255,0.2);
    }

    .count {
      text-align: center;
      color: #8b949e;
      margin: 1rem 0 2rem;
      font-size: 1.1rem;
    }

    .fonts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
      gap: 1.4rem;
    }

    .font-card {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 10px;
      overflow: hidden;
      transition: all 0.2s;
    }

    .font-card:hover {
      border-color: var(--accent);
      transform: translateY(-6px);
      box-shadow: 0 14px 35px rgba(0,0,0,0.4);
    }

    .preview {
      padding: 2.8rem 1.8rem;
      font-size: 2.4rem;
      text-align: center;
      min-height: 160px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0,0,0,0.2);
      line-height: 1.5;
      direction: rtl;
    }

    .info {
      padding: 1.5rem 1.6rem;
    }

    .font-name {
      font-size: 1.45rem;
      margin-bottom: 0.7rem;
      color: var(--accent);
    }

    .actions {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      margin-top: 1.2rem;
    }

    .btn {
      padding: 0.7rem 1.5rem;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 500;
      transition: all 0.2s;
    }

    .btn-download {
      background: var(--accent);
      color: white;
    }

    .btn-download:hover { background: var(--accent-dark); }

    .btn-view {
      background: transparent;
      border: 1px solid var(--accent);
      color: var(--accent);
    }

    .btn-view:hover { background: rgba(88,166,255,0.12); }

    footer {
      text-align: center;
      padding: 3rem 1rem 2rem;
      color: #8b949e;
      font-size: 0.95rem;
      border-top: 1px solid var(--border);
    }

    @media (max-width: 600px) {
      h1 { font-size: 2rem; }
      .fonts-grid { grid-template-columns: 1fr; }
      .preview { font-size: 2.1rem; min-height: 140px; }
    }
  </style>
</head>
<body>

<header>
  <h1>مكتبة الخطوط العربية</h1>
  <p class="subtitle">أكثر من 60 خط عربي مجاني من Google Fonts — معاينة + تحميل مباشر</p>
</header>

<div class="container">

  <div class="search-box">
    <input type="text" id="searchInput" placeholder="ابحث عن اسم الخط (مثال: cairo tajawal amiri noto)">
  </div>

  <div class="count" id="fontCount"></div>

  <div class="fonts-grid" id="fontsGrid"></div>

</div>

<footer>
  <p>جميع الخطوط مأخوذة من Google Fonts — مجانية 100% للاستخدام الشخصي والتجاري</p>
  <p style="margin-top:0.8rem;">
    عدد الخطوط الحالي: <span id="countNumber">0</span> — يمكنك إضافة المزيد في مصفوفة <code>arabicFonts</code>
  </p>
</footer>

<script>
// قائمة الخطوط
const arabicFonts = [
  "Almarai", "Amiri", "Amiri Quran", "Aref Ruqaa", "Aref Ruqaa Ink",
  "Baloo Bhaijaan 2", "Blaka", "Blaka Hollow", "Cairo", "Changa",
  "El Messiri", "IBM Plex Sans Arabic", "Jomhuria", "Katibeh",
  "Klee One", "Lalezar", "Lateef", "Lemonada", "Mada",
  "Mirza", "Noto Kufi Arabic", "Noto Naskh Arabic", "Noto Nastaliq Urdu",
  "Noto Sans Arabic", "Noto Serif Arabic", "Readex Pro", "Reem Kufi",
  "Reem Kufi Ink", "Rakkas", "Scheherazade New", "Tajawal",
  "Alkalami", "Markazi Text", "Noto Sans Arabic UI",
  "Cairo Play", "Tajawal", "Amiri Italic", "El Messiri Display",
  "Beiruti", "IBM Plex Sans Arabic", "Changa", "Mada", "Lemonada",
  "Lateef", "Scheherazade New", "Amiri Quran", "Aref Ruqaa Ink",
  "Blaka Gothic", "Jomhuria", "Katibeh", "Lalezar",
  "Mirza", "Rakkas", "Reem Kufi Ink", "Baloo Bhaijaan 2",
  "Klee One", "Almarai", "Tajawal Variable", "Cairo Variable",
  // أضف المزيد هنا إذا بغيتي
];

// توليد الكروت تلقائياً
const grid = document.getElementById('fontsGrid');
const countEl = document.getElementById('countNumber');
const totalCountEl = document.getElementById('fontCount');

arabicFonts.forEach(font => {
  const safeFont = font.replace(/ /g, '+').replace(/,/g, '%2C');

  const card = document.createElement('div');
  card.className = 'font-card';
  card.style.fontFamily = `"${font}", "Segoe UI", sans-serif`;

  card.innerHTML = `
    <div class="preview">
      ${font} – أبجد هوز حطي كلمن سقط صفر ضرب جدع فيه ثم خذ قلمك ورسم خطاً مستقيماً والحمد لله
    </div>
    <div class="info">
      <div class="font-name">${font}</div>
      <div class="actions">
        <a href="https://fonts.google.com/download?family=${safeFont}" class="btn btn-download" target="_blank" rel="noopener">تحميل</a>
        <a href="https://fonts.google.com/specimen/${safeFont}" class="btn btn-view" target="_blank" rel="noopener">معاينة</a>
      </div>
    </div>
  `;

  grid.appendChild(card);
});

// تحديث العدد
const total = arabicFonts.length;
countEl.textContent = total;
totalCountEl.textContent = `عدد الخطوط المعروضة: ${total}`;

// البحث
const searchInput = document.getElementById('searchInput');
const fontCards = document.querySelectorAll('.font-card');

searchInput.addEventListener('input', function() {
  const query = this.value.toLowerCase().trim();
  let visible = 0;

  fontCards.forEach(card => {
    const name = card.querySelector('.font-name').textContent.toLowerCase();
    const show = name.includes(query) || query === '';
    card.style.display = show ? '' : 'none';
    if (show) visible++;
  });

  totalCountEl.textContent = `عدد الخطوط المعروضة: ${visible} / ${total}`;
});
</script>

</body>
</html>
