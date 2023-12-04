## Документация по REST API

------------------------------------------------------------------------------------------

### Авторизация/регистрация/редактирование пользователя и его сборок

<details>
 <summary><code>POST</code> <code><b>/user/login</b></code> <code>(авторизация пользователя)</code></summary>

##### Параметры

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | None      |  required | object (JSON or YAML)   | N/A  |


##### Ответы

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `201`         | `text/plain;charset=UTF-8`        | `Вход выполнен успешно!`                                |
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
> | `201`         | `text/plain;charset=UTF-8`        | `Данные о пользователе были изменены`                               |
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

<details>
 <summary><code>POST</code> <code><b>/user/fileSystem</b></code> <code>(сохранение аватарки пользователя)</code></summary>

##### Параметры

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | `image`      |  form-data | File   | N/A  |


##### Ответы

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `201`         | `text/plain;charset=UTF-8`        | `image uploaded successfully: {название изображения}`               |
> | `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |

##### Пример cURL

> ```javascript
>  curl -X POST -H "Content-Type: application/json" --data @post.json http://localhost:9090/api/user/fileSystem
> ```
##### Пример Body

> form-data -> Key = image, Value = avatar.jpg (type=File)

</details>

<details>
 <summary><code>GET</code> <code><b>/user/fileSystem/{imageName}</b></code> <code>(получение аватарки пользователя)</code></summary>

##### Параметры

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | None      |  required | object (JSON or YAML)   | N/A  |


##### Ответы

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | `Вернет изображение`                                |
> | `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |

##### Пример cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" --data @get.json http://localhost:9090/api/user/fileSystem/CatDefaultAvatar.png
> ```

</details>

<details>
 <summary><code>POST</code> <code><b>/user/add_user_assembly</b></code> <code>(добавление сборки пользователю)</code></summary>

##### Параметры

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | None      |  required | object (JSON or YAML)   | N/A  |


##### Ответы

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `201`         | `text/plain;charset=UTF-8`        | `Вернет данные в формате Json`                               |
> | `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |

##### Пример cURL

> ```javascript
>  curl -X POST -H "Content-Type: application/json" --data @post.json http://localhost:9090/api/user/add_user_assembly
> ```
##### Пример Body

>```json
>{
>    "id": 10,
>    "assemblies": [
>        {
>            "id": 1
>        },
>        {
>            "id": 3
>        }
>    ]
>}
>```
</details>

<details>
 <summary><code>GET</code> <code><b>/user/users_assemblies</b></code> <code>(получение пользователей и их сборок)</code></summary>

##### Параметры

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | None      |  required | object (JSON or YAML)   | N/A  |


##### Ответы

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | `Вернет данные в формате Json`                               |
> | `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |

##### Пример cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" --data @get.json http://localhost:9090/api/user/users_assemblies
> ```
</details>

<details>
 <summary><code>GET</code> <code><b>/user/user_assembly</b></code> <code>(получение сборок пользователя по id)</code></summary>

##### Параметры

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | userAssemblyId      |  required | int ($int64)   | N/A  |


##### Ответы

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | `Вернет данные в формате Json`                               |
> | `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |

##### Пример cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" --data @get.json http://localhost:9090/api/user/user_assembly?userAssemblyId=10
> ```
</details>

### Получение/загрузка изображений комплектующих

<details>
 <summary><code>GET</code> <code><b>/component/all_components</b></code> <code>(получение всех комплектующих)</code></summary>

##### Параметры

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | None      |  required | object (JSON or YAML)   | N/A  |


##### Ответы

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | `Вернет данные в формате Json`                               |
> | `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |

##### Пример cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" --data @get.json http://localhost:9090/api/component/all_components
> ```
</details>

<details>
 <summary><code>GET</code> <code><b>/component/component_by_id</b></code> <code>(получение комплектующего по id)</code></summary>

##### Параметры

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | id      |  required | int ($int64)   | N/A  |


##### Ответы

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | `Вернет данные в формате Json`                               |
> | `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |

##### Пример cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" --data @get.json http://localhost:9090/api/component/component_by_id?id=3
> ```
</details>

<details>
 <summary><code>GET</code> <code><b>/component/components_by_type</b></code> <code>(получение комплектующего по id вида)</code></summary>

##### Параметры

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | id      |  required | int ($int64)   | N/A  |


##### Ответы

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | `Вернет данные в формате Json`                               |
> | `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |

##### Пример cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" --data @get.json http://localhost:9090/api/component/components_by_type?componentTypeId=1
> ```
</details>

<details>
 <summary><code>POST</code> <code><b>/component/fileSystem</b></code> <code>(сохранение картинки комплектующего)</code></summary>

##### Параметры

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | `image`      |  form-data | File   | N/A  |


##### Ответы

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `201`         | `text/plain;charset=UTF-8`        | `image uploaded successfully: {название изображения}`               |
> | `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |

##### Пример cURL

> ```javascript
>  curl -X POST -H "Content-Type: application/json" --data @post.json http://localhost:9090/api/component/fileSystem
> ```
##### Пример Body

> form-data -> Key = image, Value = videocard.jpg (type=File)

</details>

<details>
 <summary><code>GET</code> <code><b>/component/fileSystem/{imageName}</b></code> <code>(получение изображения комплектющего)</code></summary>

##### Параметры

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | None      |  required | object (JSON or YAML)   | N/A  |


##### Ответы

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | `Вернет изображение`                                |
> | `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |

##### Пример cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" --data @get.json http://localhost:9090/api/component/fileSystem/videocard.jpg
> ```

</details>

### Получение видов комплектующих

<details>
 <summary><code>GET</code> <code><b>/component_type/component_types</b></code> <code>(получение видов комплектующих)</code></summary>

##### Параметры

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | None      |  required | object (JSON or YAML)   | N/A  |


##### Ответы

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | `Вернет данные в формате Json`                               |
> | `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |

##### Пример cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" --data @get.json http://localhost:9090/api/component_type/component_types
> ```
</details>

### Добавление/получение/загрузка изображений сборок

<details>
 <summary><code>POST</code> <code><b>/assembly/add</b></code> <code>(добавление сборки)</code></summary>

##### Параметры

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | None      |  required | object (JSON or YAML)   | N/A  |


##### Ответы

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `201`         | `text/plain;charset=UTF-8`        | `Вернет данные в формате Json`                               |
> | `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |

##### Пример cURL

> ```javascript
>  curl -X POST -H "Content-Type: application/json" --data @post.json http://localhost:9090/api/assembly/add
> ```
##### Пример Body

>```json
>{
>    "title": "Мой комп",
>    "assemblyCode": "ysdfsd76sdfsd7fd1",
>    "dateCreated": "02/12/2023",
>    "images": "superPC.png",
>    "availability": "Есть в наличии",
>    "components": [
>        {
>            "id": 1
>        },
>        {
>            "id": 3
>        }
>    ]
>}
>```
</details>

<details>
 <summary><code>GET</code> <code><b>/assembly/assemblies</b></code> <code>(получение всех сборок)</code></summary>

##### Параметры

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | None      |  required | object (JSON or YAML)   | N/A  |


##### Ответы

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | `Вернет данные в формате Json`                                |
> | `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |

##### Пример cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" --data @get.json http://localhost:9090/api/assembly/assemblies
> ```
</details>

<details>
 <summary><code>GET</code> <code><b>/assembly/assembly_by_id</b></code> <code>(получение сборки по id)</code></summary>

##### Параметры

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | id      |  required | int ($int64)   | N/A  |


##### Ответы

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | `Вернет данные в формате Json`                                |
> | `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |

##### Пример cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" --data @get.json http://localhost:9090/api/assembly/assembly_by_id?id=3
> ```
</details>

<details>
 <summary><code>POST</code> <code><b>/assembly/fileSystem</b></code> <code>(сохранение картинки сборки)</code></summary>

##### Параметры

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | `image`      |  form-data | File   | N/A  |


##### Ответы

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `201`         | `text/plain;charset=UTF-8`        | `image uploaded successfully: {название изображения}`               |
> | `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |

##### Пример cURL

> ```javascript
>  curl -X POST -H "Content-Type: application/json" --data @post.json http://localhost:9090/api/assembly/fileSystem
> ```
##### Пример Body

> form-data -> Key = image, Value = videocard.jpg (type=File)

</details>

<details>
 <summary><code>GET</code> <code><b>/assembly/fileSystem/{imageName}</b></code> <code>(получение изображения сборки)</code></summary>

##### Параметры

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | None      |  required | object (JSON or YAML)   | N/A  |


##### Ответы

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | `Вернет изображение`                                |
> | `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |

##### Пример cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" --data @get.json http://localhost:9090/api/assembly/fileSystem/sborka.jpg
> ```

</details>
