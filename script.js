
fetch(WEBAPP_URL)
  .then(res => res.json())
  .then(data => {
    const catalog = document.getElementById("catalog");
    catalog.innerHTML = data.map(item => `<div>${item[0]}</div>`).join("");
  })
  .catch(err => {
    document.getElementById("catalog").innerText = "❌ Ошибка загрузки каталога";
    console.error(err);
  });
