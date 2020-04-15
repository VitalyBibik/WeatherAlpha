class Init {
    constructor(weatherPage, api, spinner) {
        // тело конструктора
        this.weatherPage = weatherPage;
        this.spinner = spinner;
        this.api = api;
    }
    renderLoading = (isLoading) =>{
        if (isLoading){

            this.spinner.classList.add('spinner_visible');
        } else {
            this.spinner.classList.remove('spinner_visible');
        }
    }

    getTime(){
        this.api.firstInitWeather()
            .then(data =>{
                this.weatherPage.weatherTitle.textContent = `Город: ${data.name}`;
                this.weatherPage.weatherTemp.textContent = `Температура: ${Math.round(data.main.temp - 273)}`;
                this.weatherPage.weatherPressure.textContent = `Атмосферное давление: ${data.main.pressure} P`;
                this.weatherPage.weatherWind.textContent =`Скорость ветра: ${data.wind.speed} м/c`;
                this.weatherPage.weatherType.textContent =`Тип погоды: ${data.weather[0]['description']}`;

            })
            .catch((err) => {
                console.log(err);
            })
        this.api.firstInitTime()
            .then(data =>{
                let time = data.datetime;
                this.weatherPage.weatherTime.textContent = `Время:${time.slice(11,16)} `;
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                this.renderLoading(false);
            })
    }
}