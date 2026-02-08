<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>خطوط ديواني - معاينة مباشرة</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <!-- خطوط Google الأساسية + خطوط إضافية -->
  <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Scheherazade+New:wght@400;700&family=Cairo:wght@400;700&family=Tajawal:wght@400;700&family=Noto+Kufi+Arabic:wght@400;700&family=Reem+Kufi:wght@400;700&family=Changa:wght@400;700&family=Almarai:wght@400;700&family=El+Messiri:wght@400;700&family=Readex+Pro:wght@400;700&display=swap" rel="stylesheet">

  <style>
    :root {
      --bg: #0f0f1a;
      --card-bg: #161b22;
      --text: #e6edf3;
      --accent: #7b5eff;
      --accent-dark: #5a44cc;
      --border: #2a2f3a;
      --input-bg: #1e2330;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: var(--bg);
      color: var(--text);
      font-family: 'Cairo', system-ui, sans-serif;
      padding: 20px 15px;
      min-height: 100vh;
      line-height: 1.6;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    header {
      text-align: center;
      margin-bottom: 40px;
    }

    h1 {
      font-size: 2.4rem;
      color: var(--accent);
      margin-bottom: 12px;
    }

    .intro {
      color: #a0a8b8;
      font-size: 1.15rem;
      max-width: 700px;
      margin: 0 auto 30px;
    }

    .input-wrapper {
      max-width: 800px;
      margin: 0 auto 50px;
      text-align: center;
    }

    #sampleText {
      width: 100%;
      padding: 18px 24px;
      font-size: 1.35rem;
      background: var(--input-bg);
      border: 1px solid var(--border);
      border-radius: 12px;
      color: white;
      font-family: 'Tajawal', sans-serif;
      resize: vertical;
      min-height: 110px;
    }

    #sampleText:focus {
      outline: none;
      border-color: var(--accent);
      box-shadow: 0 0 0 4px rgba(123, 94, 255, 0.15);
    }

    .fonts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
      gap: 24px;
    }

    .font-card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 12px;
      overflow: hidden;
      transition: all 0.25s ease;
      box-shadow: 0 4px 16px rgba(0,0,0,0.25);
    }

    .font-card:hover {
      transform: translateY(-4px);
      border-color: var(--accent);
      box-shadow: 0 12px 32px rgba(0,0,0,0.4);
    }

    .font-header {
      padding: 16px 20px;
      background: linear-gradient(135deg, #1e2330, #161b22);
      border-bottom: 1px solid var(--border);
      font-size: 1.35rem;
      font-weight: bold;
      color: var(--accent);
    }

    .font-preview {
      padding: 24px 20px;
      font-size: 1.85rem;
      min-height: 140px;
      line-height: 1.7;
      white-space: pre-wrap;
      word-wrap: break-word;
    }

    .default-text {
      color: #8899aa;
      font-style: italic;
    }

    @media (max-width: 600px) {
      .fonts-grid { grid-template-columns: 1fr; }
      h1 { font-size: 2rem; }
      .font-preview { font-size: 1.6rem; }
    }
  </style>
</head>
<body>

<div class="container">
  <header>
    <h1>خطوط ديواني وخطوط عربية مميزة</h1>
    <p class="intro">اكتب نصك في الأعلى وسيظهر تلقائيًا في جميع الخطوط لتتمكن من المقارنة والاختيار بسهولة</p>
  </header>

  <div class="input-wrapper">
    <textarea id="sampleText" placeholder="اكتب أو الصق النص هنا لتجربة الخطوط..."></textarea>
  </div>

  <div class="fonts-grid" id="fontsContainer">
    <!-- سيتم ملؤها بالجافا سكريبت -->
  </div>
</div>

<script>
  const fonts = [
    { name: "أميري", family: "Amiri" },
    { name: "شهرزاد جديد", family: "Scheherazade New" },
    { name: "القاهرة", family: "Cairo" },
    { name: "تاجوال", family: "Tajawal" },
    { name: "نوتو كوفي عربي", family: "Noto Kufi Arabic" },
    { name: "ريم كوفي", family: "Reem Kufi" },
    { name: "تشانجا", family: "Changa" },
    { name: "المراعي", family: "Almarai" },
    { name: "المسيري", family: "El Messiri" },
    { name: "ريديكس برو", family: "Readex Pro" },
    // أضف المزيد من الخطوط الديوانية أو غيرها هنا
    // مثال: { name: "ديواني تقليدي", family: "Traditional Arabic" },
  ];

  const container = document.getElementById('fontsContainer');
  const textInput = document.getElementById('sampleText');

  // إنشاء الكروت
  fonts.forEach(font => {
    const card = document.createElement('div');
    card.className = 'font-card';

    card.innerHTML = `
      <div class="font-header">${font.name}</div>
      <div class="font-preview" data-family="${font.family}">
        اكتب نصك أعلاه ليظهر هنا
      </div>
    `;

    container.appendChild(card);
  });

  // تحديث جميع المعاينات عند الكتابة
  function updatePreviews() {
    const text = textInput.value.trim();
    const previews = document.querySelectorAll('.font-preview');

    previews.forEach(preview => {
      const family = preview.getAttribute('data-family');
      if (text) {
        preview.textContent = text;
        preview.style.fontFamily = `"${family}", "Noto Sans Arabic", sans-serif`;
        preview.classList.remove('default-text');
      } else {
        preview.textContent = 'اكتب نصك أعلاه ليظهر هنا';
        preview.classList.add('default-text');
        preview.style.fontFamily = 'inherit';
      }
    });
  }

  textInput.addEventListener('input', updatePreviews);
  // تحديث أولي
  updatePreviews();
</script>

</body>
</html>
