<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>عينة الخطوط العربية</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <!-- أغلب الخطوط العربية الشائعة من Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Amiri+Quran&family=Scheherazade+New:wght@400;700&family=Reem+Kufi:wght@400;500;600;700&family=Cairo:wght@300;400;600;700&family=Tajawal:wght@300;400;500;700&family=Changa:wght@400;500;600;700&family=El+Messiri:wght@400;500;600;700&family=Almarai:wght@300;400;700&family=Noto+Naskh+Arabic:wght@400;600;700&family=Noto+Kufi+Arabic:wght@400;500;600&family=Readex+Pro:wght@400;500;600&family=Al+Qalam:wght@400;700&family=Aref+Ruqaa:wght@400;700&family=Baloo+Bhaijaan+2:wght@400;500;600&family=Lateef:wght@400;600&family=Mirza:wght@400;500;600&family=Trirong:wght@400;600&family=Katibeh:wght@400&display=swap" rel="stylesheet">

  <style>
    body { font-family: system-ui, sans-serif; background: #f8fafc; color: #1e293b; padding: 20px; }
    header { text-align: center; margin-bottom: 2rem; }
    h1 { color: #f97316; font-size: 2.5rem; margin-bottom: 0.5rem; }
    #search {
      width: 100%;
      max-width: 600px;
      padding: 14px 16px;
      font-size: 1.1rem;
      border: 2px solid #e5e7eb;
      border-radius: 12px;
      margin: 0 auto 2rem;
      display: block;
    }
    #search:focus { border-color: #f97316; outline: none; box-shadow: 0 0 0 4px rgba(249,115,22,0.2); }
    .container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.5rem;
      max-width: 1400px;
      margin: 0 auto;
    }
    .card {
      background: white;
      border-radius: 12px;
      padding: 1.4rem;
      box-shadow: 0 3px 12px rgba(0,0,0,0.08);
      transition: 0.25s;
      cursor: pointer;
      text-align: center;
    }
    .card:hover { transform: translateY(-5px); box-shadow: 0 10px 24px rgba(0,0,0,0.14); }
    .font-title { font-size: 1.4rem; font-weight: bold; color: #1e40af; margin-bottom: 0.8rem; }
    .preview { font-size: 2.2rem; line-height: 1.8; min-height: 80px; margin: 0.5rem 0; }
    .category { font-size: 0.95rem; color: #64748b; }
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
      { name: "Noto Kufi Arabic", family: "'Noto Kufi Arabic', sans-serif", category: "كوفي حديث" },
      { name: "Cairo", family: "'Cairo', sans-serif", category: "حديث واضح" },
      { name: "Tajawal", family: "'Tajawal', sans-serif", category: "عصري نظيف" },
      { name: "Changa", family: "'Changa', sans-serif", category: "جريء مميز" },
      { name: "El Messiri", family: "'El Messiri', sans-serif", category: "أنيق عصري" },
      { name: "Almarai", family: "'Almarai', sans-serif", category: "بسيط واضح" },
      { name: "Noto Naskh Arabic", family: "'Noto Naskh Arabic', serif", category: "نسخ كلاسيكي" },
      { name: "Readex Pro", family: "'Readex Pro', sans-serif", category: "حديث قوي" },
      { name: "Al Qalam", family: "'Al Qalam', cursive", category: "ديواني" },
      { name: "Aref Ruqaa", family: "'Aref Ruqaa', serif", category: "رقعة" },
      { name: "Baloo Bhaijaan 2", family: "'Baloo Bhaijaan 2', cursive", category: "مرح" },
      { name: "Lateef", family: "'Lateef', serif", category: "نسخي أنيق" },
      { name: "Mirza", family: "'Mirza', cursive", category: "يدوي" },
      { name: "Katibeh", family: "'Katibeh', serif", category: "خطاط" },
      // يمكنك إضافة المزيد هنا
    ];

    const container = document.getElementById("fontContainer");
    const search = document.getElementById("search");

    function renderFonts(list) {
      container.innerHTML = "";
      list.forEach(font => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <div class="font-title">${font.name}</div>
          <div class="preview" style="font-family:${font.family}">
            الحمد لله رب العالمين
          </div>
          <div class="category">${font.category}</div>
        `;
        card.onclick = () => {
          window.location.href = `font.html?name=\( {encodeURIComponent(font.name)}&family= \){encodeURIComponent(font.family)}`;
        };
        container.appendChild(card);
      });
    }

    renderFonts(fonts);

    search.addEventListener("input", () => {
      const term = search.value.trim().toLowerCase();
      if (!term) return renderFonts(fonts);
      const filtered = fonts.filter(f => 
        f.name.toLowerCase().includes(term) || 
        f.category.toLowerCase().includes(term)
      );
      renderFonts(filtered);
    });
  </script>
</body>
</html>
