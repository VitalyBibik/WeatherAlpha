const api = new api();

















fetch('http://api.openweathermap.org/data/2.5/weather?id=703448&APPID=e7e013145e8f764392b0517c2ab23d80')
  .then(function(resp) {return resp.json()})
  .then(function(data){
      console.log(data);
      document.querySelector('.weather__title').textContent = data.name;
      document.querySelector('.weather__temp').innerHTML = Math.round(data.main.temp - 273) + '&deg';
      document.querySelector('.weather__pressure').textContent = data.main.pressure;
      document.querySelector('.weather__wind').textContent = data.wind.speed;
      document.querySelector('.weather__type').textContent = data.weather[0]['description'];
      console.log(data.weather[0].icon,'ss');
    //  document.querySelector('.weather__animation');
      document.querySelector('.weather__animation').innerHTML = `<img src='http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'>`
  })            // http://openweathermap.org/img/wn/10d@2x.png
  .catch(function(){

  })
    
fetch('http://worldtimeapi.org/api/timezone/America/Argentina/Salta')
    .then(function(resp) {return resp.json()})
    .then(function(data){
        console.log(data);
       
        let timeInfo = data.datetime;
       
       let timeFinal = timeInfo.slice(11,16);
       console.log(timeFinal);    
       document.querySelector('.weather__time').textContent = timeFinal;

    })
    .catch(function(){

    })

  