async function loadCatalog() {
  const container = document.getElementById("catalog");
  try {
    const res = await fetch(WEBAPP_URL);
    const data = await res.json();

    container.innerHTML = "";

    data.forEach((item) => {
      if (!item.telegram || !item.telegram.includes("/")) return;

      const parts = item.telegram.split("/");
      const postId = parts.pop();
      const channel = parts.pop().replace("@", "");

      const proxyUrl = `${WEBAPP_URL}?mode=post&channel=${channel}&id=${postId}`;

      const card = document.createElement("div");
      card.className = "card";

      const iframe = document.createElement("iframe");
      iframe.src = proxyUrl;

      card.appendChild(iframe);
      container.appendChild(card);
    });
  } catch (e) {
    container.innerHTML = "Ошибка загрузки товаров.";
    console.error(e);
  }
}

window.addEventListener("DOMContentLoaded", loadCatalog);