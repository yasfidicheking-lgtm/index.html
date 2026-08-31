// ========== حساب السعرات ==========
function calculateBMR(weight, height, age, gender) {
  // معادلة Mifflin-St Jeor
  if (gender === 'male') {
    return 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    return 10 * weight + 6.25 * height - 5 * age - 161;
  }
}

function getTargetCalories(tdee, goal) {
  if (goal === 'lose') {
    return Math.round(tdee - 500); // عجز 500 سعرة
  } else if (goal === 'gain') {
    return Math.round(tdee + 300); // فائض 300 سعرة
  } else {
    return Math.round(tdee);
  }
}

// ========== خطط التمارين ==========
function getWorkoutPlan(goal) {
  const plans = {
    lose: `
      <p><strong>الهدف:</strong> تنقيص الوزن + الحفاظ على العضلات</p>
      <ul>
        <li><strong>اليوم 1:</strong> كارديو 30-40 دقيقة (مشي سريع أو جري خفيف) + تمارين جسم علوي</li>
        <li><strong>اليوم 2:</strong> تمارين أرجل + بطن</li>
        <li><strong>اليوم 3:</strong> راحة أو مشي خفيف 30 دقيقة</li>
        <li><strong>اليوم 4:</strong> كارديو + تمارين ظهر وكتفين</li>
        <li><strong>اليوم 5:</strong> تمارين جسم كامل (Full Body)</li>
        <li><strong>اليوم 6:</strong> كارديو متوسط</li>
        <li><strong>اليوم 7:</strong> راحة كاملة</li>
      </ul>
      <p style="margin-top:12px; color:#94a3b8;">نصيحة: ركز على التمارين المركبة وزيد الكثافة تدريجياً.</p>
    `,
    gain: `
      <p><strong>الهدف:</strong> زيادة الكتلة العضلية</p>
      <ul>
        <li><strong>اليوم 1:</strong> صدر + ترايسبس</li>
        <li><strong>اليوم 2:</strong> ظهر + بايسبس</li>
        <li><strong>اليوم 3:</strong> أرجل (Squats, Lunges, Leg Press)</li>
        <li><strong>اليوم 4:</strong> راحة أو كارديو خفيف</li>
        <li><strong>اليوم 5:</strong> كتف + بطن</li>
        <li><strong>اليوم 6:</strong> جسم كامل أو ضعف النقاط</li>
        <li><strong>اليوم 7:</strong> راحة</li>
      </ul>
      <p style="margin-top:12px; color:#94a3b8;">نصيحة: زيد الأوزان تدريجياً (Progressive Overload) وكُل بروتين كافي.</p>
    `,
    maintain: `
      <p><strong>الهدف:</strong> الحفاظ على اللياقة والوزن</p>
      <ul>
        <li><strong>اليوم 1:</strong> تمارين قوة جسم علوي</li>
        <li><strong>اليوم 2:</strong> كارديو 30 دقيقة</li>
        <li><strong>اليوم 3:</strong> تمارين أرجل + بطن</li>
        <li><strong>اليوم 4:</strong> راحة أو يوغا / تمدد</li>
        <li><strong>اليوم 5:</strong> تمارين جسم كامل</li>
        <li><strong>اليوم 6:</strong> نشاط ترفيهي (مشي، سباحة، كرة...)</li>
        <li><strong>اليوم 7:</strong> راحة</li>
      </ul>
      <p style="margin-top:12px; color:#94a3b8;">نصيحة: حافظ على الانتظام أهم من الشدة العالية.</p>
    `
  };
  return plans[goal] || plans.maintain;
}

// ========== نظام غذائي بسيط ==========
function getDietPlan(goal, targetCalories) {
  const proteinTip = goal === 'gain' 
    ? 'ركز على البروتين (دجاج، بيض، تونة، عدس) — حوالي 1.8-2.2 غرام لكل كغ من وزنك.'
    : 'حافظ على بروتين متوسط إلى عالي باش ما تضيعش العضلات.';

  return `
    <p><strong>السعرات اليومية المستهدفة:</strong> حوالي <span style="color:#38bdf8">${targetCalories}</span> سعرة</p>
    <br>
    <p><strong>توزيع تقريبي:</strong></p>
    <ul>
      <li>الفطور: 25-30% من السعرات</li>
      <li>الغذاء: 35-40%</li>
      <li>العشاء: 25-30%</li>
      <li>سناكات: 10-15%</li>
    </ul>
    <br>
    <p><strong>نصائح عامة:</strong></p>
    <ul>
      <li>${proteinTip}</li>
      <li>شرب ماء بزاف (على الأقل 3 لتر)</li>
      <li>قلل السكريات والمشروبات الغازية</li>
      <li>كُل خضر وفواكه كل يوم</li>
      <li>ما تحرمش راسك من وجبة تحبها من مرة لمرة</li>
    </ul>
    <p style="margin-top:12px; color:#94a3b8;">ملاحظة: هذا نموذج عام. يفضل تستشير أخصائي تغذية للخطة الدقيقة.</p>
  `;
}

// ========== معالجة الفورم ==========
document.getElementById('fitness-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  const age = parseInt(document.getElementById('age').value);
  const gender = document.getElementById('gender').value;
  const activity = parseFloat(document.getElementById('activity').value);
  const goal = document.getElementById('goal').value;

  // الحسابات
  const bmr = calculateBMR(weight, height, age, gender);
  const tdee = bmr * activity;
  const target = getTargetCalories(tdee, goal);

  // عرض النتائج
  document.getElementById('bmr-value').textContent = Math.round(bmr);
  document.getElementById('tdee-value').textContent = Math.round(tdee);
  document.getElementById('target-value').textContent = target;

  document.getElementById('workout-plan').innerHTML = getWorkoutPlan(goal);
  document.getElementById('diet-plan').innerHTML = getDietPlan(goal, target);

  // إظهار النتائج
  document.getElementById('results-section').classList.remove('hidden');
  document.getElementById('results-section').scrollIntoView({ behavior: 'smooth' });
});

function resetForm() {
  document.getElementById('fitness-form').reset();
  document.getElementById('results-section').classList.add('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========== تتبع التقدم (LocalStorage) ==========
function saveProgress() {
  const weightInput = document.getElementById('progress-weight');
  const weight = parseFloat(weightInput.value);

  if (!weight || weight < 30 || weight > 250) {
    alert('دخل وزن صحيح من فضلك');
    return;
  }

  const entry = {
    weight: weight,
    date: new Date().toLocaleDateString('ar-MA', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }),
    timestamp: Date.now()
  };

  let progress = JSON.parse(localStorage.getItem('fitgoal_progress')) || [];
  progress.unshift(entry); // أحدث تسجيل الأول
  progress = progress.slice(0, 30); // نحتفظ بآخر 30 تسجيل فقط

  localStorage.setItem('fitgoal_progress', JSON.stringify(progress));
  weightInput.value = '';
  renderProgress();
}

function renderProgress() {
  const list = document.getElementById('progress-list');
  const progress = JSON.parse(localStorage.getItem('fitgoal_progress')) || [];

  if (progress.length === 0) {
    list.innerHTML = '<p class="empty-msg">ما كاين حتى تسجيل دابا. سجل وزنك الأول!</p>';
    return;
  }

  list.innerHTML = progress.map(item => `
    <div class="progress-item">
      <span class="date">${item.date}</span>
      <span class="weight">${item.weight} كغ</span>
    </div>
  `).join('');
}

// تحميل التقدم عند فتح الصفحة
renderProgress();
