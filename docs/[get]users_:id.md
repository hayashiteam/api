# [get] /users/:id

* [(200) must return the user saved on database if it exists](#64277522ed)
* [(500) must return a translated error if the user was not found](#bdaf8f2098)

---

### :chicken: `(200) must return the user saved on database if it exists` <a name="64277522ed"></a>

```sh
curl -X GET \
http://localhost:54608/users/5fb55cf7cad9a51617b7202d \
-H 'accept-language: pt-br'
-H 'authorization: authorization-token-dev'
```

**Request** :egg:

Path: `/users/5fb55cf7cad9a51617b7202d`

Query parameters: _empty_

Headers: 

| Key | Value |
| :--- | :--- |
| accept-language | pt-br |
| authorization | authorization-token-dev |

Body: _empty_

**Response** :hatching_chick:

Status: 200

Headers: _empty_

Body: 

```
{
  "createdAt": "2020-11-18T17:42:15.114Z",
  "updatedAt": "2020-11-18T17:42:15.114Z",
  "email": "email@domain.com",
  "username": "username123",
  "id": "5fb55cf7cad9a51617b7202d"
}
```

### :chicken: `(500) must return a translated error if the user was not found` <a name="bdaf8f2098"></a>

```sh
curl -X GET \
http://localhost:54608/users/5fb55cf7cad9a51617b7202e \
-H 'accept-language: pt-br'
-H 'authorization: authorization-token-dev'
```

**Request** :egg:

Path: `/users/5fb55cf7cad9a51617b7202e`

Query parameters: _empty_

Headers: 

| Key | Value |
| :--- | :--- |
| accept-language | pt-br |
| authorization | authorization-token-dev |

Body: _empty_

**Response** :hatching_chick:

Status: 500

Headers: _empty_

Body: 

```
{
  "code": "USERS_ERROR_USER_NOT_FOUND",
  "field": "id",
  "message": "Usuário \"5fb55cf7cad9a51617b7202e\" não encontrado."
}
```
