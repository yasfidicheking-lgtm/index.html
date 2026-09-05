// بيانات وهمية
const fakeStudent = {
  name: "أحمد بن علي",
  grades: [
    { subject: "الرياضيات", f1: 15, f2: 17, avg: 16 },
    { subject: "الفيزياء", f1: 14, f2: 16, avg: 15 },
    { subject: "العربية", f1: 16, f2: 15, avg: 15.5 },
    { subject: "الفرنسية", f1: 13, f2: 14, avg: 13.5 },
    { subject: "الإنجليزية", f1: 17, f2: 18, avg: 17.5 },
    { subject: "الفلسفة", f1: 14, f2: 15, avg: 14.5 }
  ],
  absences: [
    { date: "12/03/2026", reason: "مرض" },
    { date: "05/04/2026", reason: "ظرف عائلي" },
    { date: "18/05/2026", reason: "بدون مبرر" }
  ]
};

// عناصر الصفحة
const loginPage = document.getElementById("login-page");
const dashboard = document.getElementById("dashboard");
const loginForm = document.getElementById("login-form");
const logoutBtn = document.getElementById("logout-btn");
const gradesBody = document.getElementById("grades-body");
const absenceList = document.getElementById("absence-list");

// تسجيل الدخول
loginForm.addEventListener("submit", function(e) {
  e.preventDefault();
  
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (username === "eleve" && password === "1234") {
    // إظهار لوحة التحكم
    loginPage.classList.add("hidden");
    dashboard.classList.remove("hidden");
    
    // ملء البيانات
    fillDashboard();
  } else {
    alert("اسم المستخدم أو كلمة المرور غير صحيحة\nجرب: eleve / 1234");
  }
});

// تسجيل الخروج
logoutBtn.addEventListener("click", function() {
  dashboard.classList.add("hidden");
  loginPage.classList.remove("hidden");
  loginForm.reset();
});

// ملء لوحة التحكم
function fillDashboard() {
  // النقط
  gradesBody.innerHTML = "";
  fakeStudent.grades.forEach(g => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${g.subject}</td>
      <td>${g.f1}</td>
      <td>${g.f2}</td>
      <td><strong>${g.avg}</strong></td>
    `;
    gradesBody.appendChild(row);
  });

  // الغيابات
  absenceList.innerHTML = "";
  fakeStudent.absences.forEach(a => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${a.reason}</span>
      <span class="date">${a.date}</span>
    `;
    absenceList.appendChild(li);
  });
}
