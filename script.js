fetch(WEBAPP_URL)
  .then(res => res.json())
  .then(data => {
    const catalog = document.getElementById('catalog');
    catalog.innerHTML = JSON.stringify(data, null, 2);
  })
  .catch(err => {
    document.getElementById('catalog').innerText = 'Ошибка загрузки каталога';
    console.error(err);
  });
