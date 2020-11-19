# [put] /users/:id

* [(200) must succeed on updating the field "email" and always return the full updated document](#1608c79266)
* [(200) must succeed on updating the field "username" and always return the full updated document](#3c0ed153b0)
* [(200) must succeed on updating "password", while not sending it on payload](#a5c24a4f3f)
* [(200) must be idempotent when updating without setting new values to fields](#ed1fa1ce58)
* [(200) The fields "id,_id,createdAt,updatedAt" must be ignored when creating or updating an user](#b10df52f4e)
* [(500) must return an error when providing an invalid email](#02005a1fc1)
* [(500) must return an error when providing a "password" that is not strong enough](#c88cc2db6f)
* [(500) must return a translated error if the user was not found](#bdaf8f2098)
* [(500) must return a translated error when "email" is already in use by another user](#59c6d3141d)
* [(500) must return a translated error when "username" is already in use by another user](#c0b1520597)
* [(500) must return a translated error when providing an empty "email"](#0632164d55)
* [(500) must return a translated error when providing an empty "username"](#1d4ea77b64)
* [(500) must return a translated error when providing an empty "password"](#c6e788de2b)
* [(500) must return a translated error when providing a "username" that exceeds "24" characters](#448eebd1de)

---

### :chicken: `(200) must succeed on updating the field "email" and always return the full updated document` <a name="1608c79266"></a>

```sh
curl -X PUT \
http://localhost:54154/users/5fb5f34d00d23f682e5f8b7d \
-d '{
  "email": "new-email@domain.com"
}' \
-H 'accept-language: pt-br'
-H 'authorization: authorization-token-test'
-H 'content-type: application/json'
```

**Request** :egg:

Path: `/users/5fb5f34d00d23f682e5f8b7d`

Query parameters: _empty_

Headers: 

| Key | Value |
| :--- | :--- |
| accept-language | pt-br |
| authorization | authorization-token-test |
| content-type | application/json |

Body: 

```
{
  "email": "new-email@domain.com"
}
```

**Response** :hatching_chick:

Status: 200

Headers: _empty_

Body: 

```
{
  "createdAt": "2020-11-19T04:23:41.765Z",
  "updatedAt": "2020-11-19T04:23:42.888Z",
  "email": "new-email@domain.com",
  "username": "username123",
  "id": "5fb5f34d00d23f682e5f8b7d"
}
```

### :chicken: `(200) must succeed on updating the field "username" and always return the full updated document` <a name="3c0ed153b0"></a>

```sh
curl -X PUT \
http://localhost:54154/users/5fb5f34e00d23f682e5f8b7e \
-d '{
  "username": "new-username"
}' \
-H 'accept-language: pt-br'
-H 'authorization: authorization-token-test'
-H 'content-type: application/json'
```

**Request** :egg:

Path: `/users/5fb5f34e00d23f682e5f8b7e`

Query parameters: _empty_

Headers: 

| Key | Value |
| :--- | :--- |
| accept-language | pt-br |
| authorization | authorization-token-test |
| content-type | application/json |

Body: 

```
{
  "username": "new-username"
}
```

**Response** :hatching_chick:

Status: 200

Headers: _empty_

Body: 

```
{
  "createdAt": "2020-11-19T04:23:41.765Z",
  "updatedAt": "2020-11-19T04:23:43.381Z",
  "email": "email@domain.com",
  "username": "new-username",
  "id": "5fb5f34e00d23f682e5f8b7e"
}
```

### :chicken: `(200) must succeed on updating "password", while not sending it on payload` <a name="a5c24a4f3f"></a>

```sh
curl -X PUT \
http://localhost:54154/users/5fb5f34f00d23f682e5f8b7f \
-d '{
  "password": "abc123def!@#"
}' \
-H 'accept-language: pt-br'
-H 'authorization: authorization-token-test'
-H 'content-type: application/json'
```

**Request** :egg:

Path: `/users/5fb5f34f00d23f682e5f8b7f`

Query parameters: _empty_

Headers: 

| Key | Value |
| :--- | :--- |
| accept-language | pt-br |
| authorization | authorization-token-test |
| content-type | application/json |

Body: 

```
{
  "password": "abc123def!@#"
}
```

**Response** :hatching_chick:

Status: 200

Headers: _empty_

Body: 

```
{
  "createdAt": "2020-11-19T04:23:41.765Z",
  "updatedAt": "2020-11-19T04:23:43.436Z",
  "email": "email@domain.com",
  "username": "username123",
  "id": "5fb5f34f00d23f682e5f8b7f"
}
```

### :chicken: `(200) must be idempotent when updating without setting new values to fields` <a name="ed1fa1ce58"></a>

```sh
curl -X PUT \
http://localhost:54154/users/5fb5f34f00d23f682e5f8b80 \
-d '{
  "email": "email@domain.com",
  "username": "username123"
}' \
-H 'accept-language: pt-br'
-H 'authorization: authorization-token-test'
-H 'content-type: application/json'
```

**Request** :egg:

Path: `/users/5fb5f34f00d23f682e5f8b80`

Query parameters: _empty_

Headers: 

| Key | Value |
| :--- | :--- |
| accept-language | pt-br |
| authorization | authorization-token-test |
| content-type | application/json |

Body: 

```
{
  "email": "email@domain.com",
  "username": "username123"
}
```

**Response** :hatching_chick:

Status: 200

Headers: _empty_

Body: 

```
{
  "createdAt": "2020-11-19T04:23:41.765Z",
  "updatedAt": "2020-11-19T04:23:44.216Z",
  "email": "email@domain.com",
  "username": "username123",
  "id": "5fb5f34f00d23f682e5f8b80"
}
```

### :chicken: `(200) The fields "id,_id,createdAt,updatedAt" must be ignored when creating or updating an user` <a name="b10df52f4e"></a>

```sh
curl -X PUT \
http://localhost:54154/users/5fb5f35000d23f682e5f8b81 \
-d '{
  "id": "value",
  "_id": "value",
  "createdAt": "value",
  "updatedAt": "value"
}' \
-H 'accept-language: pt-br'
-H 'authorization: authorization-token-test'
-H 'content-type: application/json'
```

**Request** :egg:

Path: `/users/5fb5f35000d23f682e5f8b81`

Query parameters: _empty_

Headers: 

| Key | Value |
| :--- | :--- |
| accept-language | pt-br |
| authorization | authorization-token-test |
| content-type | application/json |

Body: 

```
{
  "id": "value",
  "_id": "value",
  "createdAt": "value",
  "updatedAt": "value"
}
```

**Response** :hatching_chick:

Status: 200

Headers: _empty_

Body: 

```
{
  "createdAt": "2020-11-19T04:23:41.765Z",
  "updatedAt": "2020-11-19T04:23:44.597Z",
  "email": "email@domain.com",
  "username": "username123",
  "id": "5fb5f35000d23f682e5f8b81"
}
```

### :chicken: `(500) must return an error when providing an invalid email` <a name="02005a1fc1"></a>

```sh
curl -X PUT \
http://localhost:54154/users/5fb5f35000d23f682e5f8b82 \
-d '{
  "email": "invalid@123!!!!.com.br"
}' \
-H 'accept-language: pt-br'
-H 'authorization: authorization-token-test'
-H 'content-type: application/json'
```

**Request** :egg:

Path: `/users/5fb5f35000d23f682e5f8b82`

Query parameters: _empty_

Headers: 

| Key | Value |
| :--- | :--- |
| accept-language | pt-br |
| authorization | authorization-token-test |
| content-type | application/json |

Body: 

```
{
  "email": "invalid@123!!!!.com.br"
}
```

**Response** :hatching_chick:

Status: 500

Headers: _empty_

Body: 

```
{
  "code": "SHARED_ERROR_EMAIL_INVALID",
  "field": "email",
  "message": "O email \"invalid@123!!!!.com.br\" é inválido."
}
```

### :chicken: `(500) must return an error when providing a "password" that is not strong enough` <a name="c88cc2db6f"></a>

```sh
curl -X PUT \
http://localhost:54154/users/5fb5f35000d23f682e5f8b83 \
-d '{
  "password": "123456789"
}' \
-H 'accept-language: pt-br'
-H 'authorization: authorization-token-test'
-H 'content-type: application/json'
```

**Request** :egg:

Path: `/users/5fb5f35000d23f682e5f8b83`

Query parameters: _empty_

Headers: 

| Key | Value |
| :--- | :--- |
| accept-language | pt-br |
| authorization | authorization-token-test |
| content-type | application/json |

Body: 

```
{
  "password": "123456789"
}
```

**Response** :hatching_chick:

Status: 500

Headers: _empty_

Body: 

```
{
  "analysis": {
    "feedback": {
      "warning": "This is a top-10 common password",
      "suggestions": [
        "Add another word or two. Uncommon words are better."
      ]
    },
    "score": 0
  },
  "code": "AUTHENTICATION_ERROR_PASSWORD_NOT_STRONG",
  "field": "password",
  "message": "Autenticação falhou pois a senha não é forte o bastante."
}
```

### :chicken: `(500) must return a translated error if the user was not found` <a name="bdaf8f2098"></a>

```sh
curl -X PUT \
http://localhost:54154/users/5fb5f35100d23f682e5f8b85 \
-H 'accept-language: pt-br'
-H 'authorization: authorization-token-test'
```

**Request** :egg:

Path: `/users/5fb5f35100d23f682e5f8b85`

Query parameters: _empty_

Headers: 

| Key | Value |
| :--- | :--- |
| accept-language | pt-br |
| authorization | authorization-token-test |

Body: _empty_

**Response** :hatching_chick:

Status: 500

Headers: _empty_

Body: 

```
{
  "code": "USERS_ERROR_USER_NOT_FOUND",
  "field": "id",
  "message": "Usuário \"5fb5f35100d23f682e5f8b85\" não encontrado."
}
```

### :chicken: `(500) must return a translated error when "email" is already in use by another user` <a name="59c6d3141d"></a>

```sh
curl -X PUT \
http://localhost:54154/users/5fb5f35100d23f682e5f8b86 \
-d '{
  "email": "email@already-being-used.com",
  "username": "user2_username123",
  "password": "user2_abc123def!@#"
}' \
-H 'accept-language: pt-br'
-H 'authorization: authorization-token-test'
-H 'content-type: application/json'
```

**Request** :egg:

Path: `/users/5fb5f35100d23f682e5f8b86`

Query parameters: _empty_

Headers: 

| Key | Value |
| :--- | :--- |
| accept-language | pt-br |
| authorization | authorization-token-test |
| content-type | application/json |

Body: 

```
{
  "email": "email@already-being-used.com",
  "username": "user2_username123",
  "password": "user2_abc123def!@#"
}
```

**Response** :hatching_chick:

Status: 500

Headers: _empty_

Body: 

```
{
  "code": "SHARED_ERROR_FIELD_ALREADY_IN_USE",
  "field": "email",
  "message": "Este email já está em uso."
}
```

### :chicken: `(500) must return a translated error when "username" is already in use by another user` <a name="c0b1520597"></a>

```sh
curl -X PUT \
http://localhost:54154/users/5fb5f35100d23f682e5f8b88 \
-d '{
  "email": "user2_email@domain.com",
  "username": "already-being-used",
  "password": "user2_abc123def!@#"
}' \
-H 'accept-language: pt-br'
-H 'authorization: authorization-token-test'
-H 'content-type: application/json'
```

**Request** :egg:

Path: `/users/5fb5f35100d23f682e5f8b88`

Query parameters: _empty_

Headers: 

| Key | Value |
| :--- | :--- |
| accept-language | pt-br |
| authorization | authorization-token-test |
| content-type | application/json |

Body: 

```
{
  "email": "user2_email@domain.com",
  "username": "already-being-used",
  "password": "user2_abc123def!@#"
}
```

**Response** :hatching_chick:

Status: 500

Headers: _empty_

Body: 

```
{
  "code": "SHARED_ERROR_FIELD_ALREADY_IN_USE",
  "field": "username",
  "message": "Este username já está em uso."
}
```

### :chicken: `(500) must return a translated error when providing an empty "email"` <a name="0632164d55"></a>

```sh
curl -X PUT \
http://localhost:54154/users/5fb5f35100d23f682e5f8b8a \
-d '{
  "email": ""
}' \
-H 'accept-language: pt-br'
-H 'authorization: authorization-token-test'
-H 'content-type: application/json'
```

**Request** :egg:

Path: `/users/5fb5f35100d23f682e5f8b8a`

Query parameters: _empty_

Headers: 

| Key | Value |
| :--- | :--- |
| accept-language | pt-br |
| authorization | authorization-token-test |
| content-type | application/json |

Body: 

```
{
  "email": ""
}
```

**Response** :hatching_chick:

Status: 500

Headers: _empty_

Body: 

```
{
  "code": "SHARED_ERROR_FIELD_IS_REQUIRED",
  "field": "email",
  "message": "O campo \"email\" é mandatório."
}
```

### :chicken: `(500) must return a translated error when providing an empty "username"` <a name="1d4ea77b64"></a>

```sh
curl -X PUT \
http://localhost:54154/users/5fb5f35100d23f682e5f8b8b \
-d '{
  "username": ""
}' \
-H 'accept-language: pt-br'
-H 'authorization: authorization-token-test'
-H 'content-type: application/json'
```

**Request** :egg:

Path: `/users/5fb5f35100d23f682e5f8b8b`

Query parameters: _empty_

Headers: 

| Key | Value |
| :--- | :--- |
| accept-language | pt-br |
| authorization | authorization-token-test |
| content-type | application/json |

Body: 

```
{
  "username": ""
}
```

**Response** :hatching_chick:

Status: 500

Headers: _empty_

Body: 

```
{
  "code": "SHARED_ERROR_FIELD_IS_REQUIRED",
  "field": "username",
  "message": "O campo \"username\" é mandatório."
}
```

### :chicken: `(500) must return a translated error when providing an empty "password"` <a name="c6e788de2b"></a>

```sh
curl -X PUT \
http://localhost:54154/users/5fb5f35200d23f682e5f8b8c \
-d '{
  "password": ""
}' \
-H 'accept-language: pt-br'
-H 'authorization: authorization-token-test'
-H 'content-type: application/json'
```

**Request** :egg:

Path: `/users/5fb5f35200d23f682e5f8b8c`

Query parameters: _empty_

Headers: 

| Key | Value |
| :--- | :--- |
| accept-language | pt-br |
| authorization | authorization-token-test |
| content-type | application/json |

Body: 

```
{
  "password": ""
}
```

**Response** :hatching_chick:

Status: 500

Headers: _empty_

Body: 

```
{
  "code": "SHARED_ERROR_FIELD_IS_REQUIRED",
  "field": "password",
  "message": "O campo \"password\" é mandatório."
}
```

### :chicken: `(500) must return a translated error when providing a "username" that exceeds "24" characters` <a name="448eebd1de"></a>

```sh
curl -X PUT \
http://localhost:54154/users/5fb5f35200d23f682e5f8b8d \
-d '{
  "username": "aaaaaaaaaaaaaaaaaaaaaaaaa"
}' \
-H 'accept-language: pt-br'
-H 'authorization: authorization-token-test'
-H 'content-type: application/json'
```

**Request** :egg:

Path: `/users/5fb5f35200d23f682e5f8b8d`

Query parameters: _empty_

Headers: 

| Key | Value |
| :--- | :--- |
| accept-language | pt-br |
| authorization | authorization-token-test |
| content-type | application/json |

Body: 

```
{
  "username": "aaaaaaaaaaaaaaaaaaaaaaaaa"
}
```

**Response** :hatching_chick:

Status: 500

Headers: _empty_

Body: 

```
{
  "code": "SHARED_ERROR_FIELD_IS_TOO_LONG",
  "field": "username",
  "maxLength": 24,
  "message": "O nome de usuário \"aaaaaaaaaaaaaaaaaaaaaaaaa\" é longo demais (máximo de caracteres é 24)."
}
```
