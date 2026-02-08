<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>مكتبة الخطوط العربية</title>
  
  <meta name="description" content="تحميل خطوط عربية مجانية من Google Fonts"/>
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-WL9T5F2N');</script>
  <!-- End Google Tag Manager -->

  <style>
    :root {
      --bg: #0d1117;
      --card: #161b22;
      --text: #c9d1d9;
      --accent: #58a6ff;
      --accent-dark: #388bfd;
      --border: #30363d;
    }

    * { margin:0; padding:0; box-sizing:border-box; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.6;
      min-height: 100vh;
    }

    header { text-align:center; padding:2.5rem 1rem 1.5rem; }
    h1 { font-size:2.5rem; color:var(--accent); margin-bottom:0.5rem; }
    .subtitle { color:#8b949e; font-size:1.1rem; max-width:700px; margin:0 auto; }
    .container { max-width:1200px; margin:0 auto; padding:0 1rem 4rem; }
    .search-box { margin:2rem 0; text-align:center; }
    #searchInput {
      width:100%; max-width:550px; padding:0.9rem 1.3rem;
      font-size:1.1rem; border:1px solid var(--border); border-radius:8px;
      background:#0d1117; color:white;
    }
    #searchInput:focus { outline:none; border-color:var(--accent); box-shadow:0 0 0 3px rgba(88,166,255,0.2); }
    .count { text-align:center; color:#8b949e; margin:1rem 0 2rem; font-size:1.1rem; }
    .fonts-grid { display:grid; grid-template-columns:repeat(auto-fill, minmax(340px,1fr)); gap:1.4rem; }
    .font-card {
      background:var(--card); border:1px solid var(--border); border-radius:10px;
      overflow:hidden; transition:all 0.2s;
    }
    .font-card:hover {
      border-color:var(--accent); transform:translateY(-6px);
      box-shadow:0 14px 35px rgba(0,0,0,0.4);
    }
    .preview {
      padding:2.5rem 1rem; font-size:3.5rem; text-align:center;
      min-height:160px; display:flex; align-items:center; justify-content:center;
      background:rgba(0,0,0,0.3); direction:rtl; font-weight:normal;
    }
    .info { padding:1.4rem 1.5rem; }
    .font-name-ar { font-size:1.45rem; margin-bottom:0.4rem; color:var(--accent); }
    .font-name-en { font-size:0.95rem; color:#8b949e; margin-bottom:0.6rem; }
    .actions { display:flex; gap:1rem; flex-wrap:wrap; margin-top:1rem; }
    .btn {
      padding:0.7rem 1.4rem; border-radius:6px; text-decoration:none;
      font-weight:500; transition:all 0.2s;
    }
    .btn-download { background:var(--accent); color:white; }
    .btn-download:hover { background:var(--accent-dark); }
    .btn-view { background:transparent; border:1px solid var(--accent); color:var(--accent); }
    .btn-view:hover { background:rgba(88,166,255,0.12); }
    footer { text-align:center; padding:3rem 1rem 2rem; color:#8b949e; font-size:0.95rem; border-top:1px solid var(--border); }

    @media (max-width: 600px) {
      .preview { font-size:2.8rem; min-height:130px; }
    }
  </style>
</head>
<body>

  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WL9T5F2N"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->

<header>
  <h1>مكتبة الخطوط العربية</h1>
  <p class="subtitle">خطوط عربية مجانية من Google Fonts — معاينة وتحميل مباشر</p>
</header>

<div class="container">

  <div class="search-box">
    <input type="text" id="searchInput" placeholder="ابحث عن اسم الخط (مثال: كايرو، تاجوال، أميري، نوتو)">
  </div>

  <div class="count" id="fontCount"></div>

  <div class="fonts-grid" id="fontsGrid"></div>

</div>

<footer>
  <p>جميع الخطوط من Google Fonts — مجانية للاستخدام الشخصي والتجاري</p>
</footer>

<script>
// قائمة الخطوط (يمكنك إضافة المزيد)
const arabicFonts = [
  { en: "Almarai",          ar: "المرآة" },
  { en: "Amiri",            ar: "أميري" },
  { en: "Amiri Quran",      ar: "أميري قرآن" },
  { en: "Aref Ruqaa",       ar: "عارف رقعة" },
  { en: "Aref Ruqaa Ink",   ar: "عارف رقعة حبر" },
  { en: "Baloo Bhaijaan 2", ar: "بالو بهيجان 2" },
  { en: "Cairo",            ar: "كايرو" },
  { en: "Changa",           ar: "تشانجا" },
  { en: "El Messiri",       ar: "المسيري" },
  { en: "Jomhuria",         ar: "جمهورية" },
  { en: "Katibeh",          ar: "كاتبه" },
  { en: "Lateef",           ar: "لطيف" },
  { en: "Lemonada",         ar: "ليمونادا" },
  { en: "Mada",
