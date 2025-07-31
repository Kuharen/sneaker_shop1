document.addEventListener("DOMContentLoaded", () => {
  const loading = document.getElementById("loading");
  const productList = document.getElementById("product-list");

  fetch(FULL_URL)
    .then((res) => res.json())
    .then((data) => {
      loading.style.display = "none";
      data.forEach((item) => {
        const card = document.createElement("div");
        card.className = "product";
        card.innerHTML = `
          <img src="${item.image}" alt="${item.name}" />
          <h3>${item.name}</h3>
          <p>${item.price}</p>
          <a href="${item.link}" target="_blank">Смотреть</a>
        `;
        productList.appendChild(card);
      });
    })
    .catch((error) => {
      loading.textContent = "Ошибка загрузки данных";
      console.error("Ошибка:", error);
    });
});