document.body.innerHTML = `
  <section id="weather">
    <h2>Погода зараз</h2>
    <div id="weatherInfo">Завантаження...</div>
    <form id="cityForm">
      <input type="text" id="cityInput" placeholder="Введіть місто" required>
      <button type="submit">Показати погоду</button>
    </form>
  </section>
`;

const weatherInfo = document.getElementById('weatherInfo');
const cityForm = document.getElementById('cityForm');
const cityInput = document.getElementById('cityInput');
const apiKey = '74edfad5154a489883b150505251906';
const cityMap = {
  'київ': 'Kyiv',
  'львів': 'Lviv',
  'харків': 'Kharkiv',
  'одеса': 'Odesa',
  'дніпро': 'Dnipro',
  'запоріжжя': 'Zaporizhia',
  'чернігів': 'Chernihiv',
  'черкаси': 'Cherkasy',
  'житомир': 'Zhytomyr',
  'полтава': 'Poltava',
  'суми': 'Sumy',
  'ужгород': 'Uzhhorod',
  'івано-франківськ': 'Ivano-Frankivsk',
  'тернопіль': 'Ternopil',
  'луцьк': 'Lutsk',
  'вінниця': 'Vinnytsia',
  'миколаїв': 'Mykolaiv',
  'херсон': 'Kherson',
  'чернівці': 'Chernivtsi',
  'рівне': 'Rivne',
  'кропивницький': 'Kropyvnytskyi'
};

function getWeather(cityName) {
  weatherInfo.innerHTML = 'Завантаження...';
  const cityKey = cityName.trim().toLowerCase();
  const query = cityMap[cityKey] || cityName;
  fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(query)}&lang=uk`)
    .then(response => response.json())
    .then(data => {
      if (data.error) throw new Error();
      const temp = data.current.temp_c;
      const desc = data.current.condition.text;
      const icon = data.current.condition.icon;
      weatherInfo.innerHTML = `
        <div style="margin-bottom:18px;">
          <p><strong>${data.location.name}:</strong> ${temp}°C, ${desc}</p>
          <img src="https:${icon}" alt="icon">
        </div>
      `;
    })
    .catch(() => {
      weatherInfo.innerHTML = `<p>Не вдалося отримати погоду для ${cityName} 😞</p>`;
    });
}

getWeather('Київ');

cityForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (city) {
    getWeather(city);
    cityInput.value = '';
  }
});