د<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>عينة الخطوط العربية</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <!-- بعض الخطوط الشائعة من Google Fonts (يمكنك إضافة المزيد) -->
  <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Cairo:wght@300;400;600;700&family=Tajawal:wght@300;400;500;700&family=Noto+Naskh+Arabic:wght@400;600;700&family=Reem+Kufi:wght@400;500;600&family=Changa:wght@400;500;600&family=El+Messiri:wght@400;500;600;700&family=Almarai:wght@300;400;700&family=Almarai:wght@800&display=swap" rel="stylesheet">

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: #f8fafc;
      color: #1e293b;
      line-height: 1.6;
      padding: 20px;
    }

    header {
      text-align: center;
      padding: 2rem 1rem;
      background: linear-gradient(135deg, #1e3a8a, #3b82f6);
      color: white;
      border-radius: 12px;
      margin-bottom: 2rem;
      box-shadow: 0 4px 16px rgba(0,0,0,0.15);
    }

    h1 {
      font-size: 2.4rem;
      margin-bottom: 0.5rem;
    }

    .controls {
      max-width: 700px;
      margin: 0 auto 2rem;
      text-align: center;
    }

    #demo-text {
      width: 100%;
      padding: 14px 16px;
      font-size: 1.25rem;
      border: 1px solid #cbd5e1;
      border-radius: 10px;
      margin-bottom: 1.5rem;
      font-family: 'Cairo', sans-serif;
      direction: rtl;
      text-align: right;
    }

    .font-size-slider {
      width: 100%;
      margin: 1rem 0;
    }

    .container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
      gap: 1.4rem;
      max-width: 1400px;
      margin: 0 auto;
    }

    .font-card {
      background: white;
      border-radius: 12px;
      padding: 1.5rem;
      box-shadow: 0 3px 12px rgba(0,0,0,0.08);
      transition: all 0.22s ease;
      overflow: hidden;
    }

    .font-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.12);
    }

    .font-name {
      font-size: 1.4rem;
      font-weight: 600;
      margin-bottom: 0.8rem;
      color: #1d4ed8;
    }

    .preview {
      font-size: 1.6rem;
      line-height: 2;
      min-height: 120px;
      margin-bottom: 1rem;
      color: #111827;
    }

    footer {
      text-align: center;
      padding: 2rem 1rem;
      color: #64748b;
      font-size: 0.95rem;
      margin-top: 3rem;
    }
  </style>
</head>
<body>

  <header>
    <h1>عينة الخطوط العربية</h1>
    <p>تجربة الخطوط العربية الشائعة مباشرة</p>
  </header>

  <div class="controls">
    <input type="text" id="demo-text" value="الحمد لله رب العالمين • اكتب نصك هنا لتجربة الخطوط" placeholder="اكتب نصك هنا...">
    <div>
      <label for="font-size">حجم النص: <span id="size-value">28</span>px</label><br>
      <input type="range" id="font-size" class="font-size-slider" min="16" max="60" value="28">
    </div>
  </div>

  <div class="container" id="fonts-container"></div>

  <footer>
    جميع الخطوط من Google Fonts • © 2026
  </footer>

  <script>
    const fonts = [
      { name: "Amiri", family: "'Amiri', serif", category: "تقليدي / كتابي" },
      { name: "Cairo", family: "'Cairo', sans-serif", category: "حديث • واضح" },
      { name: "Tajawal", family: "'Tajawal', sans-serif", category: "عصري • نظيف" },
      { name: "Noto Naskh Arabic", family: "'Noto Naskh Arabic', serif", category: "ناسخ كلاسيكي" },
      { name: "Reem Kufi", family: "'Reem Kufi', sans-serif", category: "كوفي عصري" },
      { name: "Changa", family: "'Changa', sans-serif", category: "جريء • مميز" },
      { name: "El Messiri", family: "'El Messiri', sans-serif", category: "أنيق • عصري" },
      { name: "Almarai", family: "'Almarai', sans-serif", category: "بسيط • واضح" },
      // أضف أي خطوط أخرى تريدها هنا
    ];

    const container = document.getElementById("fonts-container");
    const demoInput = document.getElementById("demo-text");
    const fontSizeSlider = document.getElementById("font-size");
    const sizeValue = document.getElementById("size-value");

    // عرض جميع الخطوط
    fonts.forEach(font => {
      const card = document.createElement("div");
      card.className = "font-card";
      card.innerHTML = `
        <div class="font-name">\( {font.name} <small>( \){font.category})</small></div>
        <div class="preview" style="font-family: ${font.family};">
          ${demoInput.value || "الحمد لله رب العالمين"}
        </div>
      `;
      container.appendChild(card);
    });

    // تحديث النصوص عند الكتابة
    demoInput.addEventListener("input", updatePreviews);

    // تحديث حجم النص
    fontSizeSlider.addEventListener("input", () => {
      sizeValue.textContent = fontSizeSlider.value;
      updatePreviews();
    });

    function updatePreviews() {
      const text = demoInput.value || "الحمد لله رب العالمين";
      const size = fontSizeSlider.value + "px";

      document.querySelectorAll(".preview").forEach(preview => {
        preview.textContent = text;
        preview.style.fontSize = size;
      });
    }
  </script>

</body>
</html>
