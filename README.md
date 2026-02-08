<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>موسوعة الحديث الشريف</title>

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: Tahoma, Arial, "Segoe UI", sans-serif;
      background: #f5f7fa;
      color: #2d3748;
      line-height: 1.6;
      min-height: 100vh;
    }

    header {
      background: linear-gradient(135deg, #1e40af, #3b82f6);
      color: white;
      padding: 2rem 1rem;
      text-align: center;
      box-shadow: 0 4px 10px rgba(0,0,0,0.15);
    }

    header h1 {
      font-size: 2.1rem;
      margin-bottom: 0.5rem;
    }

    header p {
      font-size: 1.1rem;
      opacity: 0.95;
    }

    .search-box {
      padding: 1.5rem 1rem;
      text-align: center;
      background: white;
      box-shadow: 0 2px 8px rgba(0,0,0,0.06);
    }

    #search {
      width: 90%;
      max-width: 500px;
      padding: 0.9rem 1.2rem;
      font-size: 1.05rem;
      border: 1px solid #d1d5db;
      border-radius: 10px;
      outline: none;
      transition: border-color 0.2s;
    }

    #search:focus {
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59,130,246,0.15);
    }

    .container {
      padding: 1.5rem;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 1.25rem;
      max-width: 1280px;
      margin: 0 auto;
    }

    .card {
      background: white;
      border-radius: 12px;
      padding: 1.4rem;
      box-shadow: 0 3px 12px rgba(0,0,0,0.07);
      transition: all 0.25s ease;
      cursor: pointer;
    }

    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.12);
    }

    .card h3 {
      color: #1e40af;
      margin-bottom: 0.6rem;
      font-size: 1.25rem;
    }

    .card p {
      color: #4b5563;
      font-size: 0.95rem;
    }

    footer {
      text-align: center;
      padding: 1.5rem;
      background: #1f2937;
      color: white;
      margin-top: 2rem;
      font-size: 0.95rem;
    }

    @media (max-width: 500px) {
      header h1 { font-size: 1.8rem; }
      .card { padding: 1.2rem; }
    }
  </style>
</head>
<body>

  <header>
    <h1>📖 موسوعة الحديث الشريف</h1>
    <p>جميع كتب الحديث المتوفرة عبر API مفتوح</p>
  </header>

  <div class="search-box">
    <input type="search" id="search" placeholder="ابحث عن اسم كتاب أو لغة..." autocomplete="off">
  </div>

  <div class="container" id="books">
    <!-- الكتب ستظهر هنا -->
  </div>

  <footer>
    © 2026 – موقع الحديث الشريف • بيانات من Hadith API
  </footer>

  <script>
    let allBooks = [];

    fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions.json")
      .then(res => {
        if (!res.ok) throw new Error("مشكلة في جلب البيانات");
        return res.json();
      })
      .then(data => {
        allBooks = data;
        displayBooks(allBooks);
      })
      .catch(err => {
        console.error(err);
        document.getElementById("books").innerHTML = 
          '<p style="text-align:center; color:#e53e3e; padding:2rem;">حدث خطأ أثناء تحميل الكتب. حاول لاحقًا.</p>';
      });

    function displayBooks(books) {
      const container = document.getElementById("books");
      container.innerHTML = "";

      if (books.length === 0) {
        container.innerHTML = '<p style="grid-column:1/-1; text-align:center; padding:2rem; color:#718096;">لا توجد نتائج مطابقة</p>';
        return;
      }

      books.forEach(book => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <h3>${book.name || "غير معروف"}</h3>
          <p>اللغة: ${book.language || "—"}</p>
          ${book.author ? `<p>المؤلف: ${book.author}</p>` : ""}
        `;
        container.appendChild(card);
      });
    }

    document.getElementById("search").addEventListener("input", function() {
      const value = this.value.trim().toLowerCase();
      const filtered = allBooks.filter(book =>
        (book.name || "").toLowerCase().includes(value) ||
        (book.language || "").toLowerCase().includes(value) ||
        (book.author || "").toLowerCase().includes(value)
      );
      displayBooks(filtered);
    });
  </script>

</body>
</html>
