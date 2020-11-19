# [get] /users/:id

* [(200) must return the user saved on database if it exists](#64277522ed)
* [(500) must return a translated error if the user was not found](#bdaf8f2098)

---

### :chicken: `(200) must return the user saved on database if it exists` <a name="64277522ed"></a>

```sh
curl -X GET \
http://localhost:54219/users/5fb5f3556eca3f6841b791a6 \
-H 'accept-language: pt-br'
-H 'authorization: authorization-token-test'
```

**Request** :egg:

Path: `/users/5fb5f3556eca3f6841b791a6`

Query parameters: _empty_

Headers: 

| Key | Value |
| :--- | :--- |
| accept-language | pt-br |
| authorization | authorization-token-test |

Body: _empty_

**Response** :hatching_chick:

Status: 200

Headers: _empty_

Body: 

```
{
  "createdAt": "2020-11-19T04:23:49.730Z",
  "updatedAt": "2020-11-19T04:23:49.730Z",
  "email": "email@domain.com",
  "username": "username123",
  "id": "5fb5f3556eca3f6841b791a6"
}
```

### :chicken: `(500) must return a translated error if the user was not found` <a name="bdaf8f2098"></a>

```sh
curl -X GET \
http://localhost:54219/users/5fb5f3556eca3f6841b791a7 \
-H 'accept-language: pt-br'
-H 'authorization: authorization-token-test'
```

**Request** :egg:

Path: `/users/5fb5f3556eca3f6841b791a7`

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
  "message": "Usuário \"5fb5f3556eca3f6841b791a7\" não encontrado."
}
```
