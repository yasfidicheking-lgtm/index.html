<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>عينة الخطوط العربية</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Amiri+Quran&family=Scheherazade+New&family=Reem+Kufi&family=Cairo:wght@300;400;600;700&family=Tajawal:wght@300;400;500;700&family=Changa:wght@400;500;600;700&family=El+Messiri:wght@400;500;600;700&family=Almarai:wght@300;400;700&family=Noto+Naskh+Arabic:wght@400;600;700&family=Noto+Kufi+Arabic:wght@400;500;600&family=Readex+Pro:wght@400;500;600&family=Al+Qalam:wght@400;700&family=Aref+Ruqaa:wght@400;700&family=Baloo+Bhaijaan+2:wght@400;500;600&family=Lateef:wght@400;600&family=Mirza:wght@400;500;600&family=Katibeh&display=swap" rel="stylesheet">

  <style>
    body {
      font-family: system-ui, sans-serif;
      background: #f8fafc;
      margin: 0;
      padding: 20px;
    }
    header {
      text-align: center;
      margin-bottom: 1.8rem;
    }
    h1 {
      color: #f97316;
      font-size: 2.6rem;
      margin: 0 0 0.6rem;
    }
    #search {
      width: 100%;
      max-width: 600px;
      margin: 0 auto 2rem;
      padding: 14px 16px;
      font-size: 1.1rem;
      border: 2px solid #e2e8f0;
      border-radius: 12px;
      display: block;
    }
    #search:focus {
      border-color: #f97316;
      outline: none;
      box-shadow: 0 0 0 4px rgba(249,115,22,0.15);
    }
    .container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 1.5rem;
      max-width: 1400px;
      margin: 0 auto;
    }
    .card {
      background: white;
      border-radius: 14px;
      padding: 1.5rem;
      box-shadow: 0 4px 14px rgba(0,0,0,0.08);
      transition: all 0.25s ease;
      cursor: pointer;
      text-align: center;
    }
    .card:hover {
      transform: translateY(-6px);
      box-shadow: 0 12px 24px rgba(0,0,0,0.14);
    }
    .font-title {
      font-size: 1.45rem;
      font-weight: bold;
      color: #1d4ed8;
      margin-bottom: 1rem;
    }
    .preview {
      font-size: 2.4rem;
      line-height: 1.7;
      min-height: 90px;
      color: #111827;
      margin-bottom: 0.8rem;
    }
    .category {
      font-size: 0.95rem;
      color: #64748b;
    }
  </style>
</head>
<body>

  <header>
    <h1>عينة الخطوط العربية</h1>
  </header>

  <input type="search" id="search" placeholder="ابحث عن اسم الخط..." autocomplete="off">

  <div class="container" id="fontContainer"></div>

  <script>
    const fonts = [
      { name: "Amiri", family: "'Amiri', serif", category: "نسخي تقليدي" },
      { name: "Amiri Quran", family: "'Amiri Quran', serif", category: "مصحف" },
      { name: "Scheherazade New", family: "'Scheherazade New', serif", category: "نسخي أدبي" },
      { name: "Reem Kufi", family: "'Reem Kufi', sans-serif", category: "كوفي عصري" },
      { name: "Cairo", family: "'Cairo', sans-serif", category: "حديث واضح" },
      { name: "Tajawal", family: "'Tajawal', sans-serif", category: "عصري نظيف" },
      { name: "Changa", family: "'Changa', sans-serif", category: "جريء مميز" },
      { name: "El Messiri", family: "'El Messiri', sans-serif", category: "أنيق عصري" },
      { name: "Almarai", family: "'Almarai', sans-serif", category: "بسيط واضح" },
      { name: "Noto Naskh Arabic", family: "'Noto Naskh Arabic', serif", category: "نسخ كلاسيكي" },
      { name: "Noto Kufi Arabic", family: "'Noto Kufi Arabic', sans-serif", category: "كوفي حديث" },
      { name: "Readex Pro", family: "'Readex Pro', sans-serif", category: "حديث قوي" },
      { name: "Al Qalam", family: "'Al Qalam', cursive", category: "ديواني" },
      { name: "Aref Ruqaa", family: "'Aref Ruqaa', serif", category: "رقعة" },
      { name: "Lateef", family: "'Lateef', serif", category: "نسخي أنيق" },
      { name: "Mirza", family: "'Mirza', cursive", category: "يدوي" },
      { name: "Katibeh", family: "'Katibeh', serif", category: "خطاط" },
      // أضف أي خطوط أخرى إذا بغيتي
    ];

    const container = document.getElementById("fontContainer");
    const searchInput = document.getElementById("search");

    function renderFonts(filtered) {
      container.innerHTML = "";
      filtered.forEach(font => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <div class="font-title">${font.name}</div>
          <div class="preview" style="font-family:${font.family}">
            الحمد لله رب العالمين
          </div>
          <div class="category">${font.category}</div>
        `;
        card.addEventListener("click", () => {
          window.location.href = `font.html?name=\( {encodeURIComponent(font.name)}&family= \){encodeURIComponent(font.family)}`;
        });
        container.appendChild(card);
      });
    }

    renderFonts(fonts);

    searchInput.addEventListener("input", () => {
      const term = searchInput.value.trim().toLowerCase();
      const filtered = term 
        ? fonts.filter(f => f.name.toLowerCase().includes(term) || f.category.toLowerCase().includes(term))
        : fonts;
      renderFonts(filtered);
    });
  </script>
</body>
</html>
