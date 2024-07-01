const apiKey = '483a53306eacda4704b24e0d2bddcae4';



$('.form').on('submit', function (e) {
  e.preventDefault();
  let city = $('#userInput').val();
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  fetch(url)
    .then(function (responseObj) {
      const data = responseObj.json();
      data.then(function (data) {
        $('.output').html(`
          <h2>${data.name}</h2>
          <p>Temperature: ${data.main.temp}</p>
          <p>Humidity: ${data.main.humidity}</p>
          <p>Wind Speed: ${data.wind.speed}</p>
      `)
      })
        .catch(function (error) {
          console.log('Error: ', error);
        });
    });
});

