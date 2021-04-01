# Space Death Canvas

### Макеты в [figma](https://www.figma.com/file/ajQp4tRV6sZM05Q5vDNrLz/Spaceship?node-id=0%3A1), хостинг на [heroku](https://space-death-canvas.herokuapp.com/).

### Инструкция по запуску:
* В `etc/hosts/` прописать `127.0.0.1 local.ya-praktikum.tech`.
* Создать .env файл, положить его в корень проекта
и прописать в нем следующее (звездочкой обозначены настройки вашей базы):
```$xslt
DB_HOST= *
DB_PORT= *
DB_USER= *
DB_PASSWORD= *
DB_NAME= *

HOST=https://local.ya-praktikum.tech
PORT=5000
API_PORT=5001
```
* Прописать настройки базы в файл postgres-initdb.sh
  и создать ее командой `docker-compose up` (мануал [тут](https://github.com/noveogroup-amorgunov/docker-compose-postgres))
* `npm run start`

## Описание игры

### Идея

Играть предстоит за космический корабль. Каждый уровень будет представлять из себя "трассу" с встречающимися на пути препятствиями и врагами. Цель - выжить и дойти до конца, набрав как можно больше очков за уничтоженных юнитов.

### Механика

Корабль может перемещаться по всему выделенному пространству. Заходя за края по горизонтали и вертикали, корабль будет оказываться на другой стороне. В игре будут присутствовать несколько типов оружия, а так же различные бонусы.

С каждым пройденным уровнем будет увеличиваться сложность и количество врагов и препятствий.

### Управление

-   Перемещение: стрелки/WASD
-   Вращение вокруг своей оси: мышь
-   Стрельба: ЛКМ/Пробел
-   Второй тип стрельбы: ПКМ

### Сюжет

В конце каждого уровня игрок будет принимать решения, влияющие на сюжет и ход игры. Выбор будет осуществляться с помощью интерактивного меню.


### Утечки памяти:
   В приложении утечек памяти не обнаружено
    [скрин1](https://i.ibb.co/Vp9d0Qd/image-2021-03-23-15-42-01.png)
    [скрин2](https://i.ibb.co/SJQVtD0/image-2021-03-23-15-48-15.png)

### Схема БД (Форум):
[ER-Diagram](https://drive.google.com/file/d/19TeQsFsE_uOao01A6v9l1QGvgRRGaTHk/view?usp=sharing)

### Локальный запуск БД:
    -npm i
    -npm run start:webpack
    -docker-compose up -d
    -npm run start:api

    for connect in terminal: psql postgres://tester:strongpass@localhost:5436/test-db
    for connect in docker: psql -U tester -d test-db
    
    check tables: \dt
    check users: \du
