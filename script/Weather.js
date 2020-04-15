class Weather {
    constructor(weatherPage, searchForm, api, spinner) {
        // тело конструктора
        this.weatherPage = weatherPage;
        this.searchForm = searchForm;
        this.api = api;
        this.spinner = spinner;

    }
    renderLoading = (isLoading) =>{
        if (isLoading){

            this.spinner.classList.add('spinner_visible');
        } else {
            this.spinner.classList.remove('spinner_visible');
        }
    }

    updateWeather = (event) => {
        event.preventDefault();
        this.renderLoading(true);

        const input = this.searchForm.querySelector('#searchValue').value;

        this.api.getWeather(input)
            .then(data =>{
                this.weatherPage.weatherTitle.textContent = `Город: ${data.name}`;
                this.weatherPage.weatherTemp.textContent = `Температура: ${Math.round(data.main.temp - 273)}`;
                this.weatherPage.weatherPressure.textContent = `Атмосферное давление: ${data.main.pressure} P`;
                this.weatherPage.weatherWind.textContent =`Скорость ветра: ${data.wind.speed} mph`;
                this.weatherPage.weatherType.textContent =`Тип погоды: ${data.weather[0]['description']}`;

            })
            .catch((err) => {
                console.log(err);
            })
        this.api.getTime(input)
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