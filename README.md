<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>كم باقي على رمضان؟</title>
  <style>
    body {
      margin: 0;
      min-height: 100vh;
      background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
      color: white;
      font-family: system-ui, -apple-system, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    h1 {
      font-size: 3.2rem;
      margin: 0.4em 0 0.8em;
      color: #f9d923;
      text-shadow: 0 0 20px rgba(249, 217, 35, 0.5);
    }

    .countdown {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1.2rem;
      margin: 1rem;
    }

    .box {
      background: rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255,255,255,0.15);
      border-radius: 16px;
      padding: 1.2rem 1.8rem;
      min-width: 110px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.4);
    }

    .number {
      font-size: 3.8rem;
      font-weight: bold;
      color: #f9d923;
      line-height: 1;
      margin-bottom: 0.3em;
    }

    .label {
      font-size: 1.1rem;
      opacity: 0.9;
      color: #e0e0e0;
    }

    .message {
      margin-top: 2.5rem;
      font-size: 1.4rem;
      color: #a8dadc;
    }

    @media (max-width: 500px) {
      h1 { font-size: 2.6rem; }
      .number { font-size: 3rem; }
      .box { min-width: 90px; padding: 1rem 1.4rem; }
    }
  </style>
</head>
<body>

  <h1>كم باقي على رمضان؟</h1>

  <div class="countdown" id="countdown">
    <div class="box"><div class="number" id="days">00</div><div class="label">أيام</div></div>
    <div class="box"><div class="number" id="hours">00</div><div class="label">ساعات</div></div>
    <div class="box"><div class="number" id="minutes">00</div><div class="label">دقائق</div></div>
    <div class="box"><div class="number" id="seconds">00</div><div class="label">ثواني</div></div>
  </div>

  <div class="message" id="message">رمضان قريب جداً... اللهم بلغنا رمضان 🌙</div>

  <script>
    // ← غيّر هذا التاريخ حسب التقويم المتوقع
    // مثال: رمضان 1447 متوقع حوالي 18 فبراير 2026
    const ramadanDate = new Date("2026-02-18T00:00:00"); // ← هنا تغيّر التاريخ

    function updateCountdown() {
      const now = new Date();
      const diff = ramadanDate - now;

      if (diff <= 0) {
        document.getElementById("countdown").innerHTML = 
          '<div style="font-size:2.5rem; color:#f9d923; padding:2rem;">رمضان بدأ! 🌙</div>';
        document.getElementById("message").style.display = "none";
        return;
      }

      const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      document.getElementById("days").textContent    = String(days).padStart(2, "0");
      document.getElementById("hours").textContent   = String(hours).padStart(2, "0");
      document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
      document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
    }

    // تحديث كل ثانية
    setInterval(updateCountdown, 1000);
    // تشغيل أول مرة فوراً
    updateCountdown();
  </script>

</body>
</html>
