# [get] /black-november

* [(200) must return paginated content if there are "black november users" from database](#2ee29b0262)
* [(200) must return an empty array if there are no "black november users" on database](#85c3f0070d)

---

### :chicken: `(200) must return paginated content if there are "black november users" from database` <a name="2ee29b0262"></a>

```sh
curl -X GET \
http://localhost:54261/black-november?l=2&p=2 \
-H 'accept-language: pt-br'
-H 'authorization: authorization-token-test'
```

**Request** :egg:

Path: `/black-november`

Query parameters: 

| Key | Value |
| :--- | :--- |
| l | 2 |
| p | 2 |

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
  "docs": [
    {
      "createdAt": "2020-11-19T04:23:54.415Z",
      "updatedAt": "2020-11-19T04:23:54.415Z",
      "firstName": "Carlos",
      "cellphone": "(12) 33333-2222",
      "id": "5fb5f35ab6d041684e47739a"
    },
    {
      "createdAt": "2020-11-19T04:23:54.415Z",
      "updatedAt": "2020-11-19T04:23:54.415Z",
      "firstName": "Felipe",
      "cellphone": "(12) 11111-5555",
      "id": "5fb5f35ab6d041684e47739b"
    }
  ],
  "hasNextPage": false,
  "hasPreviousPage": true,
  "nextPage": null,
  "previousPage": 1,
  "totalCount": 4,
  "totalPages": 2
}
```

### :chicken: `(200) must return an empty array if there are no "black november users" on database` <a name="85c3f0070d"></a>

```sh
curl -X GET \
http://localhost:54261/black-november \
-H 'accept-language: pt-br'
-H 'authorization: authorization-token-test'
```

**Request** :egg:

Path: `/black-november`

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
  "docs": [],
  "hasNextPage": false,
  "hasPreviousPage": false,
  "nextPage": null,
  "previousPage": null,
  "totalCount": 0,
  "totalPages": 0
}
```
