# Сервис погоды, базовый уровень сложности. Актуальная версия v0.0.2

## 	Какой язык программирования и технологии использовать для реализации данного сервиса? JavaScript+HTML+CSS
##	Какой будет пользовательский интерфейс (это может быть сайт, десктопное приложение, чат-бот и т.п)? Сайт

##	Опишите формат ответа (текст), который вернется пользователю со стороны сервера и процесс его генерации. 
### Данные о времени, температуре, давлении и скорости ветра, полученные с API подставляются в текстовый шаблон
### Время:
### Температура: 
### Атмосферное давление: 
### Скорость ветра: 
### Тип погоды: 
### Далее отправляются пользователю.

## Пример работы сайта
![1](https://i2.imageban.ru/out/2020/04/15/a94168e687ce70c2614b8849dc6fa18e.png)
![2](https://i5.imageban.ru/out/2020/04/15/499fda0c24181a35b6d65811e072edd2.png)
![3](https://i6.imageban.ru/out/2020/04/15/f6a59c0cf713e42de63e1a7a346085bb.png)
![4](https://i4.imageban.ru/out/2020/04/15/79d897e85229b9537d43d322479f45a1.png)
![5](https://i6.imageban.ru/out/2020/04/15/e1cdd392d8bb80f045f35ffd68b6ca28.png)
## Распишите по шагам весь процесс работы программы.
### Используется 2 API (https://api.openweathermap.org) для погоды (https://worldtimeapi.org) для Европейского времени;
### Пользователь вводит любой город, далее его данные считываются с формы, подставляются в шаблон API и вызывается в классе Weather
### Полученный ответ с API сразу обрабатывается, изменяя все шаблонные данные на странице.
### Пока последний запрос с сервера не пришел, крутится loader.

## Как запустить вашу программу?
### Чтобы ее посмотреть можно перейти по ссылке (https://vitalybibik.github.io/WeatherAlpha/)
### После клонирования программы с Гита, достаточно открыть index.html.
### Либо открыть версию v0.0.2 и скачать архив




