const apiKey = '483a53306eacda4704b24e0d2bddcae4';

const url = `https://api.openweathermap.org/data/2.5/weather?q=atlanta&appid=${apiKey}`;


$('.request').on('click', function () {
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

