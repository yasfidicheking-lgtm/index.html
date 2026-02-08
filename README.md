<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>محول خطوط عربية - أكثر من 25 خط</title>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Amiri&family=Amiri+Quran&family=Cairo:wght@200..1000&family=Changa:wght@200..800&family=Dubai:wght@400;700&family=El+Messiri:wght@400..700&family=Harmattan:wght@400;700&family=Jomhuria&family=Lalezar&family=Lateef:wght@200..800&family=Markazi+Text:wght@400..700&family=Mirza:wght@400;500;600;700&family=Noto+Kufi+Arabic:wght@100..900&family=Noto+Naskh+Arabic:wght@400..700&family=Noto+Sans+Arabic:wght@100..900&family=Readex+Pro:wght@160..900&family=Reem+Kufi:wght@400..700&family=Scheherazade+New:wght@400;500;600;700&family=Tajawal:wght@200;300;400;500;700;800;900&display=swap" rel="stylesheet">

  <!-- خطوط إضافية من مصادر أخرى (CDN أو روابط مباشرة) -->
  <style>
    @font-face {
      font-family: 'Arabic Typesetting';
      src: url('https://cdn.jsdelivr.net/gh/google/fonts@master/ofl/arabictypesetting/ArabicTypesetting-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: 'Traditional Arabic';
      src: url('https://fonts.cdnfonts.com/s/14879/Traditional-Arabic.woff') format('woff');
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: 'KFGQPC Uthmanic Script';
      src: url('https://cdn.jsdelivr.net/gh/aliftype/qpc-uthmanic@master/KFGQPC-Uthmanic-Script-Regular.ttf') format('truetype');
    }

    @font-face {
      font-family: 'Al Qalam';
      src: url('https://cdn.jsdelivr.net/gh/fontsource/al-qalam@latest/files/al-qalam-arabic-400-normal.woff2') format('woff2');
    }

    @font-face {
      font-family: 'Geeza Pro';
      src: url('https://cdn.jsdelivr.net/gh/fontsource/geeza-pro@latest/files/geeza-pro-arabic-400-normal.woff2') format('woff2');
    }

    body {
      font-family: 'Cairo', 'Noto Sans Arabic', system-ui, sans-serif;
      background: #0d1117;
      color: #e6edf3;
      margin: 0;
      padding: 20px 15px;
      min-height: 100vh;
      direction: rtl;
      text-align: right;
    }

    .container { max-width: 960px; margin: 0 auto; }
    h1 { text-align: center; color: #58a6ff; margin-bottom: 40px; font-size: 2.3rem; }

    .select-wrapper {
      margin: 0 auto 40px;
      max-width: 580px;
    }

    #fontSelect {
      width: 100%;
      padding: 16px 24px;
      font-size: 1.35rem;
      border-radius: 12px;
      border: 1px solid #30363d;
      background: #161b22;
      color: white;
      font-family: inherit;
    }

    #fontSelect:focus {
      outline: none;
      border-color: #58a6ff;
      box-shadow: 0 0 0 4px rgba(88,166,255,0.25);
    }

    .preview-area {
      background: #161b22;
      border: 1px solid #30363d;
      border-radius: 16px;
      padding: 35px;
      min-height: 260px;
      font-size: 2.1rem;
      line-height: 1.8;
      white-space: pre-wrap;
      word-wrap: break-word;
      box-shadow: 0 6px 24px rgba(0,0,0,0.35);
    }

    .placeholder {
      color: #8b949e;
      font-style: italic;
    }

    label {
      display: block;
      margin-bottom: 14px;
      font-size: 1.35rem;
      color: #c9d1d9;
    }
  </style>
</head>
<body>

<div class="container">
  <h1>محول الخطوط العربية</h1>

  <div class="select-wrapper">
    <label for="fontSelect">اختر الخط:</label>
    <select id="fontSelect">
      <option value="Amiri">أميري</option>
      <option value="Amiri Quran">أميري - قرآن</option>
      <option value="Scheherazade New">شهرزاد جديد</option>
      <option value="Cairo">القاهرة</option>
      <option value="Tajawal">تاجوال</option>
      <option value="Noto Kufi Arabic">نوتو كوفي عربي</option>
      <option value="Noto Naskh Arabic">نوتو نسخ عربي</option>
      <option value="Noto Sans Arabic">نوتو سانس عربي</option>
      <option value="Reem Kufi">ريم كوفي</option>
      <option value="Readex Pro">ريديكس برو</option>
      <option value="Changa">تشانجا</option>
      <option value="Lateef">لطيف</option>
      <option value="Harmattan">هارماتان</option>
      <option value="Mirza">ميرزا</option>
      <option value="Markazi Text">مركزي تكست</option>
      <option value="Jomhuria">جمهورية</option>
      <option value="Lalezar">لالزار</option>
      <option value="Arabic Typesetting">الطباعة العربية</option>
      <option value="Traditional Arabic">عربي تقليدي</option>
      <option value="KFGQPC Uthmanic Script">خط عثماني (KFGQPC)</option>
      <option value="Al Qalam">القلم</option>
      <option value="Geeza Pro">جيزة برو</option>
      <!-- يمكنك إضافة المزيد هنا لاحقاً -->
    </select>
  </div>

  <label for="previewArea">اكتب النص هنا للتجربة:</label>
  <div id="previewArea" class="preview-area" contenteditable="true">
اكتب أو الصق النص هنا وسيتغير الخط تلقائياً
  </div>
</div>

<script>
  const select = document.getElementById('fontSelect');
  const preview = document.getElementById('previewArea');

  function changeFont() {
    const fontName = select.value;
    preview.style.fontFamily = `"${fontName}", "Noto Sans Arabic", "Segoe UI", sans-serif`;
  }

  select.addEventListener('change', changeFont);

  // إزالة placeholder عند الكتابة
  preview.addEventListener('input', function() {
    if (this.textContent.trim() !== '') {
      this.classList.remove('placeholder');
    } else {
      this.classList.add('placeholder');
    }
  });

  // تشغيل أول مرة
  changeFont();
</script>

</body>
</html>
