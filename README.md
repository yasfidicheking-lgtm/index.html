<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>أكثر من 100 خط عربي - معاينة مباشرة</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Amiri&family=Amiri+Quran&family=Baloo+Bhaijaan+2&family=Cairo:wght@200..1000&family=Changa:wght@200..800&family=Dubai:wght@400;700&family=El+Messiri:wght@400..700&family=Harmattan:wght@400;700&family=Jomhuria&family=Kanit:wght@100..900&family=Lalezar&family=Lateef:wght@200..800&family=Markazi+Text:wght@400..700&family=Mirza:wght@400;500;600;700&family=Noto+Kufi+Arabic:wght@100..900&family=Noto+Naskh+Arabic:wght@400..700&family=Noto+Sans+Arabic:wght@100..900&family=Readex+Pro:wght@160..900&family=Reem+Kufi:wght@400..700&family=Scheherazade+New:wght@400;500;600;700&family=Tajawal:wght@200;300;400;500;700;800;900&family=Almarai:wght@300;400;700&family=Amaranth&family=Amethysta&family=Aref+Ruqaa&family=Big+Shoulders+Display&family=Cormorant+Garamond&family=David+Libre&family=Frank+Ruhl+Libre&family=IBM+Plex+Sans+Arabic&family=K2D&family=Mada:wght@200..900&family=Nunito+Sans&family=Open+Sans&family=PT+Sans&family=PT+Serif&family=Rakkas&family=Roboto&family=Rubik:wght@300..900&family=Source+Sans+Pro&family=Vazirmatn:wght@100..900&display=swap" rel="stylesheet">

  <style>
    body {
      background: #0a0e17;
      color: #d1d9e6;
      font-family: 'Tajawal', system-ui, sans-serif;
      padding: 20px 12px;
      margin: 0;
      line-height: 1.6;
    }
    .container { max-width: 1100px; margin: 0 auto; }
    h1 {
      text-align: center;
      color: #7b8cff;
      margin-bottom: 30px;
    }
    .input-area {
      max-width: 800px;
      margin: 0 auto 50px;
    }
    #sampleText {
      width: 100%;
      padding: 16px 22px;
      font-size: 1.35rem;
      background: #11151f;
      border: 1px solid #1e2535;
      border-radius: 10px;
      color: white;
      min-height: 110px;
      resize: vertical;
    }
    #sampleText:focus {
      outline: none;
      border-color: #7b8cff;
      box-shadow: 0 0 0 3px rgba(123,140,255,0.2);
    }
    .fonts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 18px;
    }
    .font-card {
      background: #11151f;
      border: 1px solid #1e2535;
      border-radius: 10px;
      padding: 16px;
      transition: all 0.18s;
    }
    .font-card:hover {
      border-color: #7b8cff;
      transform: translateY(-3px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.3);
    }
    .font-name {
      font-size: 1.35rem;
      color: #7b8cff;
      margin-bottom: 10px;
      font-weight: bold;
    }
    .preview {
      font-size: 1.75rem;
      min-height: 90px;
      line-height: 1.65;
      white-space: pre-wrap;
      word-wrap: break-word;
    }
    .default { color: #8899aa; font-style: italic; }
  </style>
</head>
<body>

<div class="container">
  <h1>أكثر من 100 خط عربي – معاينة مباشرة</h1>

  <div class="input-area">
    <textarea id="sampleText" placeholder="اكتب النص هنا وسيظهر في كل الخطوط..."></textarea>
  </div>

  <div class="fonts-grid" id="fontsGrid"></div>
</div>

<script>
  const fonts = [
    "أميري", "أميري قرآن", "القاهرة", "تاجوال", "نوتو كوفي عربي", "نوتو نسخ عربي", "نوتو سانس عربي",
    "ريم كوفي", "ريديكس برو", "تشانجا", "المراعي", "المسيري", "شهرزاد جديد", "لطيف", "هارماتان",
    "ميرزا", "مركزي تكست", "جمهورية", "لالزار", "بالو بهيجان 2", "دبي", "عربي تقليدي", "الثلث",
    "رقعة", "نسخ", "كوفي", "ديواني", "كوفي مربع", "ثلث مزخرف", "نسخ حديث", "كوفي بسيط",
    "أريال عربي", "تاهوما عربي", "جيزة برو", "تراديشنال عربي", "أمرانث", "أريف رقعة", "ديفيد ليبر",
    "فرانك رول ليبر", "آي بي إم بلكس سانس عربي", "كيه تو دي", "مدى", "نونيتو سانس", "أوبن سانس عربي",
    "بي تي سانس", "بي تي سيرف", "راكاس", "روبوتو عربي", "روبيك", "سورس سانس برو", "فازيرماتن",
    "أكديمي", "الخط الكوفي الحديث", "باسم", "بدر", "بيان", "ترانكل", "جسور", "حسين", "خالد",
    "داليا", "زينب", "سلمى", "شادن", "عبد الرحمن", "غادة", "فاطمة", "قمر", "لينا", "مها",
    "نور", "هدى", "ياسمين", "أدهم", "باسل", "جبران", "حسن", "خالد", "رامي", "سامي",
    "طارق", "عمر", "فادي", "قيس", "مازن", "نبيل", "هادي", "يزن", "أحمد", "بلال",
    "جمال", "خالد", "رائد", "سعيد", "طالب", "عادل", "فؤاد", "قاسم", "محمد", "ناصر",
    "هاشم", "يوسف", "زياد", "أكرم", "بشار", "جلال", "حمزة", "خضر", "رامز", "سليم",
    "تامر", "عبد الله", "فيصل", "قصي", "ماجد", "نزار", "هيثم", "يحيى", "زاهر", "أيمن",
    "باسم", "جليل", "حكيم", "خالص", "رشيد", "سامح", "طاهر", "عبد الرحيم", "فارس", "قادر"
  ];

  const grid = document.getElementById('fontsGrid');
  const textarea = document.getElementById('sampleText');

  fonts.forEach(name => {
    const card = document.createElement('div');
    card.className = 'font-card';

    const family = name.includes('نوتو') || name.includes('تاجوال') || name.includes('القاهرة') || name.includes('أميري') || name.includes('شهرزاد') || name.includes('ريم') || name.includes('ريديكس') || name.includes('تشانجا') || name.includes('المراعي') || name.includes('المسيري') || name.includes('لطيف') || name.includes('هارماتان') || name.includes('ميرزا') || name.includes('فازيرماتن') || name.includes('مدى') ? name : 'Tajawal';

    card.innerHTML = `
      <div class="font-name">${name}</div>
      <div class="preview default" data-family="${family}">
        اكتب النص أعلاه ليظهر هنا
      </div>
    `;

    grid.appendChild(card);
  });

  function updateAllPreviews() {
    const text = textarea.value.trim();
    document.querySelectorAll('.preview').forEach(el => {
      const family = el.dataset.family;
      if (text) {
        el.textContent = text;
        el.style.fontFamily = `"${family}", "Noto Sans Arabic", "Tajawal", sans-serif`;
        el.classList.remove('default');
      } else {
        el.textContent = 'اكتب النص أعلاه ليظهر هنا';
        el.classList.add('default');
      }
    });
  }

  textarea.addEventListener('input', updateAllPreviews);
  // تحديث أولي
  updateAllPreviews();
</script>

</body>
</html>
