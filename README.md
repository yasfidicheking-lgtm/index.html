<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>عينة الخطوط العربية</title>

  <!-- Google Fonts - جميع الخطوط العربية المتوفرة تقريباً -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Amiri+Quran&family=Scheherazade+New:wght@400;700&family=Reem+Kufi:wght@400;500;600;700&family=Cairo:wght@200;300;400;600;700;900&family=Tajawal:wght@200;300;400;500;700;800;900&family=Changa:wght@200;300;400;500;600;700;800&family=El+Messiri:wght@400;500;600;700&family=Almarai:wght@300;400;700;800&family=Almarai:wght@300;400;700;800&family=Noto+Naskh+Arabic:wght@400;500;600;700&family=Noto+Kufi+Arabic:wght@100;200;300;400;500;600;700;900&family=Readex+Pro:wght@200;300;400;500;600;700;800&family=Al+Qalam:wght@400;700&family=Aref+Ruqaa:wght@400;700&family=Baloo+Bhaijaan+2:wght@400;500;600;700;800&family=Lateef:wght@200;300;400;500;600;700;800&family=Mirza:wght@400;500;600;700&family=Trirong:wght@100;200;300;400;500;600;700;800;900&family=Sahitya:wght@400;700&family=Katibeh:wght@400&family=Almendra+SC:wght@400;700&family=Big+Shoulders+Display:wght@100;200;300;400;500;600;700;800;900&family=Big+Shoulders+Inline+Display:wght@100;200;300;400;500;600;700;800;900&family=Big+Shoulders+Stencil+Display:wght@100;200;300;400;500;600;700;800;900&family=Big+Shoulders+Stencil+Text:wght@100;200;300;400;500;600;700;800;900&family=Big+Shoulders+Text:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">

  <style>
    * { margin:0; padding:0; box-sizing:border-box; }
    body {
      font-family: system-ui, sans-serif;
      background: #f8fafc;
      color: #1e293b;
      padding: 20px 12px;
      line-height: 1.6;
    }
    header {
      text-align: center;
      margin-bottom: 2rem;
    }
    h1 {
      color: #f97316;
      font-size: 2.4rem;
      margin-bottom: 0.6rem;
      font-weight: 700;
    }
    .controls {
      max-width: 700px;
      margin: 0 auto 2rem;
      text-align: center;
    }
    #search {
      width: 100%;
      padding: 14px 16px;
      font-size: 1.1rem;
      border: 2px solid #e5e7eb;
      border-radius: 10px;
      outline: none;
      transition: 0.2s;
      margin-bottom: 1rem;
    }
    #search:focus {
      border-color: #f97316;
      box-shadow: 0 0 0 4px rgba(249,115,22,0.15);
    }
    .container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 1.4rem;
      max-width: 1400px;
      margin: 0 auto;
    }
    .font-card {
      background: white;
      border-radius: 12px;
      padding: 1.4rem;
      box-shadow: 0 3px 12px rgba(0,0,0,0.08);
      transition: all 0.25s;
    }
    .font-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.12);
    }
    .font-title {
      font-size: 1.35rem;
      font-weight: 700;
      color: #1e40af;
      margin-bottom: 0.8rem;
      text-align: center;
    }
    .preview {
      font-size: 2rem;
      line-height: 1.8;
      min-height: 120px;
      margin: 0.8rem 0;
      color: #111827;
      text-align: center;
    }
    .category {
      font-size: 0.95rem;
      color: #64748b;
      text-align: center;
      margin-top: 0.5rem;
    }
    footer {
      text-align: center;
      padding: 2.5rem 1rem;
      color: #64748b;
      font-size: 0.95rem;
      margin-top: 3rem;
    }
  </style>
</head>
<body>

  <header>
    <h1>عينة الخطوط العربية</h1>
  </header>

  <div class="controls">
    <input type="search" id="search" placeholder="ابحث عن اسم الخط..." autocomplete="off">
  </div>

  <div class="container" id="fontContainer"></div>

  <footer>
    جميع الخطوط من Google Fonts • © 2026
  </footer>

  <script>
    const fonts = [
      { name: "Amiri", family: "'Amiri', serif", category: "نسخي تقليدي" },
      { name: "Amiri Quran", family: "'Amiri Quran', serif", category: "مصحف" },
      { name: "Scheherazade New", family: "'Scheherazade New', serif", category: "نسخي أدبي" },
      { name: "Reem Kufi", family: "'Reem Kufi', sans-serif", category: "كوفي عصري" },
      { name: "Noto Kufi Arabic", family: "'Noto Kufi Arabic', sans-serif", category: "كوفي" },
      { name: "Cairo", family: "'Cairo', sans-serif", category: "حديث واضح" },
      { name: "Tajawal", family: "'Tajawal', sans-serif", category: "عصري نظيف" },
      { name: "Changa", family: "'Changa', sans-serif", category: "جريء مميز" },
      { name: "El Messiri", family: "'El Messiri', sans-serif", category: "أنيق عصري" },
      { name: "Almarai", family: "'Almarai', sans-serif", category: "بسيط واضح" },
      { name: "Noto Naskh Arabic", family: "'Noto Naskh Arabic', serif", category: "نسخ كلاسيكي" },
      { name: "Readex Pro", family: "'Readex Pro', sans-serif", category: "حديث قوي" },
      { name: "Al Qalam", family: "'Al Qalam', cursive", category: "ديواني" },
      { name: "Aref Ruqaa", family: "'Aref Ruqaa', serif", category: "رقعة" },
      { name: "Baloo Bhaijaan 2", family: "'Baloo Bhaijaan 2', cursive", category: "مرح مرح" },
      { name: "Lateef", family: "'Lateef', serif", category: "نسخي أنيق" },
      { name: "Mirza", family: "'Mirza', cursive", category: "يدوي أنيق" },
      { name: "Trirong", family: "'Trirong', serif", category: "تايلاندي-عربي" },
      { name: "Sahitya", family: "'Sahitya', serif", category: "كلاسيكي هندي-عربي" },
      { name: "Katibeh", family: "'Katibeh', serif", category: "خطاط" },
    ];

    const container = document.getElementById("fontContainer");
    const searchInput = document.getElementById("search");

    function renderFonts(filteredFonts) {
      container.innerHTML = "";
      filteredFonts.forEach(font => {
        const card = document.createElement("div");
        card.className = "font-card";
        card.innerHTML = `
          <div class="font-title">${font.name}</div>
          <div class="preview" style="font-family: ${font.family};">الحمد لله رب العالمين • ${font.name}</div>
          <div class="category">${font.category}</div>
        `;
        container.appendChild(card);
      });
    }

    // عرض الكل في البداية
    renderFonts(fonts);

    // البحث
    searchInput.addEventListener("input",
