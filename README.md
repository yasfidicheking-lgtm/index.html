<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>موسوعة الحديث الشريف</title>

<style>
body{
    margin:0;
    font-family:Tahoma, Arial;
    background:#f4f6f9;
}

header{
    background:#0d6efd;
    color:white;
    padding:20px;
    text-align:center;
}

.search-box{
    text-align:center;
    margin:20px;
}

input{
    padding:10px;
    width:80%;
    max-width:400px;
    border-radius:8px;
    border:1px solid #ccc;
}

.container{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:15px;
    padding:20px;
}

.card{
    background:white;
    padding:15px;
    border-radius:12px;
    box-shadow:0 4px 10px rgba(0,0,0,0.08);
    transition:0.3s;
}

.card:hover{
    transform:scale(1.03);
}

footer{
    text-align:center;
    padding:15px;
    background:#eee;
    margin-top:20px;
}
</style>
</head>

<body>

<header>
    <h1>📖 موسوعة الحديث الشريف</h1>
    <p>جميع كتب الحديث من API مفتوح</p>
</header>

<div class="search-box">
    <input type="text" id="search" placeholder="ابحث عن كتاب حديث...">
</div>

<div class="container" id="books"></div>

<footer>
    © 2026 - موقع الحديث الشريف
</footer>

<script>
let allBooks = [];

fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions.json")
.then(response => response.json())
.then(data => {
    allBooks = data;
    displayBooks(allBooks);
});

function displayBooks(books){
    const container = document.getElementById("books");
    container.innerHTML = "";
    books.forEach(book => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>${book.name}</h3>
            <p>اللغة: ${book.language}</p>
        `;
        container.appendChild(card);
    });
}

document.getElementById("search").addEventListener("input", function(){
    const value = this.value.toLowerCase();
    const filtered = allBooks.filter(book => 
        book.name.toLowerCase().includes(value)
    );
    displayBooks(filtered);
});
</script>

</body>
</html>
