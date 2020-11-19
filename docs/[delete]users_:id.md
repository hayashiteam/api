# [delete] /users/:id

* [(200) must succeed on deleting the user, returning an empty body](#2ad51d5aa8)
* [(500) must return a translated error when deleting an user with an invalid mongo "id"](#074c048f2a)

---

### :chicken: `(200) must succeed on deleting the user, returning an empty body` <a name="2ad51d5aa8"></a>

```sh
curl -X DELETE \
http://localhost:54230/users/5fb5f35642fd876842744007 \
-H 'accept-language: pt-br'
-H 'authorization: authorization-token-test'
```

**Request** :egg:

Path: `/users/5fb5f35642fd876842744007`

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

Body: _empty_

### :chicken: `(500) must return a translated error when deleting an user with an invalid mongo "id"` <a name="074c048f2a"></a>

```sh
curl -X DELETE \
http://localhost:54230/users/123 \
-H 'accept-language: pt-br'
-H 'authorization: authorization-token-test'
```

**Request** :egg:

Path: `/users/123`

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
  "message": "Usuário \"123\" não encontrado."
}
```
