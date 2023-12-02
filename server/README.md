## Документация по REST API

------------------------------------------------------------------------------------------

### Авторизация/регистрация/редактирование пользователя

<details>
 <summary><code>POST</code> <code><b>/user/login</b></code> <code>(авторизация пользователя)</code></summary>

##### Параметры

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | None      |  required | object (JSON or YAML)   | N/A  |


##### Ответы

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | `Вход выполнен успешно!`                                |
> | `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |

##### Пример cURL

> ```javascript
>  curl -X POST -H "Content-Type: application/json" --data @post.json http://localhost:9090/api/user/login
> ```
##### Пример Body

>```json
>{
>    "email": "example@gmail.com",
>    "password": 12345678
>}
>```
</details>

<details>
 <summary><code>POST</code> <code><b>/user/register</b></code> <code>(регистрация нового пользователя)</code></summary>

##### Параметры

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | None      |  required | object (JSON or YAML)   | N/A  |


##### Ответы

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `201`         | `text/plain;charset=UTF-8`        | `Пользователь зарегистрирован`                                |
> | `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |

##### Пример cURL

> ```javascript
>  curl -X POST -H "Content-Type: application/json" --data @post.json http://localhost:9090/api/user/register
> ```
##### Пример Body

>```json
>{
>    "email": "example@gmail.com",
>    "lastname": "Example",
>    "name": "Example",
>    "password": "12345678",
>    "phoneNumber": "89210075364",
>    "userRole": 1
>}
>```
</details>

<details>
 <summary><code>PATCH</code> <code><b>/user/update/{userId}</b></code> <code>(редактирование пользователя)</code></summary>

##### Параметры

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | None      |  required | object (JSON or YAML)   | N/A  |


##### Ответы

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | `Данные о пользователе были изменены`                               |
> | `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |

##### Пример cURL

> ```javascript
>  curl -X PATCH -H "Content-Type: application/json" --data @patch.json http://localhost:9090/api/user/update/13
> ```
##### Пример Body

>```json
>{
>    "lastname":"Black",
>    "name": "Vlad"
>}
>```
</details>
