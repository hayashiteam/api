# [post] /black-november

* [(200) must succeed on creating the "black november user" and return the newly created doc](#2ddd2dc5d1)
* [(200) The fields "id,_id,createdAt,updatedAt" must be ignored when creating or updating an "black november user"](#1de499e9dd)
* [(500) must return a translated error when "cellphone" is already in use by another "black november user"](#fac6ad17a6)
* [(500) must return a translated error when providing an empty "cellphone"](#8f3fd66e38)
* [(500) must return a translated error when providing an empty "firstName"](#9e13f1ba0d)
* [(500) must return a translated error when "firstName" of value "Le" does not match the regex "/^[A-Za-z]{3,24}$/"](#757fbdd4e9)
* [(500) must return a translated error when "firstName" of value "Le onardo" does not match the regex "/^[A-Za-z]{3,24}$/"](#6c72c1c23e)
* [(500) must return a translated error when "firstName" of value "Leonardo Sarmento" does not match the regex "/^[A-Za-z]{3,24}$/"](#b13c08c668)
* [(500) must return a translated error when "cellphone" of value "(12) 12345678910" does not match the regex "/^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{2}\)?[\s.-]?\d{5}[\s.-]?\d{4}$/"](#3fc77d6ac1)
* [(500) must return a translated error when "cellphone" of value "(12) 1234-56789" does not match the regex "/^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{2}\)?[\s.-]?\d{5}[\s.-]?\d{4}$/"](#f7460899e1)

---

### :chicken: `(200) must succeed on creating the "black november user" and return the newly created doc` <a name="2ddd2dc5d1"></a>

```sh
curl -X POST \
http://localhost:54245/black-november \
-d '{
  "firstName": "Leonardo",
  "cellphone": "(12) 12345-6789"
}' \
-H 'accept-language: pt-br'
-H 'authorization: authorization-token-test'
-H 'content-type: application/json'
```

**Request** :egg:

Path: `/black-november`

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
  "firstName": "Leonardo",
  "cellphone": "(12) 12345-6789"
}
```

**Response** :hatching_chick:

Status: 200

Headers: _empty_

Body: 

```
{
  "createdAt": "2020-11-19T04:23:53.340Z",
  "updatedAt": "2020-11-19T04:23:53.340Z",
  "firstName": "Leonardo",
  "cellphone": "(12) 12345-6789",
  "id": "5fb5f35968c08168455fcbef"
}
```

### :chicken: `(200) The fields "id,_id,createdAt,updatedAt" must be ignored when creating or updating an "black november user"` <a name="1de499e9dd"></a>

```sh
curl -X POST \
http://localhost:54245/black-november \
-d '{
  "firstName": "Leonardo",
  "cellphone": "(12) 12345-6789",
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

Path: `/black-november`

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
  "firstName": "Leonardo",
  "cellphone": "(12) 12345-6789",
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
  "createdAt": "2020-11-19T04:23:53.340Z",
  "updatedAt": "2020-11-19T04:23:53.340Z",
  "firstName": "Leonardo",
  "cellphone": "(12) 12345-6789",
  "id": "5fb5f35968c08168455fcbf0"
}
```

### :chicken: `(500) must return a translated error when "cellphone" is already in use by another "black november user"` <a name="fac6ad17a6"></a>

```sh
curl -X POST \
http://localhost:54245/black-november \
-d '{
  "firstName": "Leonardo",
  "cellphone": "(12) 12345-6789"
}' \
-H 'accept-language: pt-br'
-H 'authorization: authorization-token-test'
-H 'content-type: application/json'
```

**Request** :egg:

Path: `/black-november`

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
  "firstName": "Leonardo",
  "cellphone": "(12) 12345-6789"
}
```

**Response** :hatching_chick:

Status: 500

Headers: _empty_

Body: 

```
{
  "code": "SHARED_ERROR_FIELD_ALREADY_IN_USE",
  "field": "cellphone",
  "message": "Este cellphone já está em uso."
}
```

### :chicken: `(500) must return a translated error when providing an empty "cellphone"` <a name="8f3fd66e38"></a>

```sh
curl -X POST \
http://localhost:54245/black-november \
-d '{
  "firstName": "Leonardo",
  "cellphone": ""
}' \
-H 'accept-language: pt-br'
-H 'authorization: authorization-token-test'
-H 'content-type: application/json'
```

**Request** :egg:

Path: `/black-november`

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
  "firstName": "Leonardo",
  "cellphone": ""
}
```

**Response** :hatching_chick:

Status: 500

Headers: _empty_

Body: 

```
{
  "code": "SHARED_ERROR_FIELD_IS_REQUIRED",
  "field": "cellphone",
  "message": "O campo \"cellphone\" é mandatório."
}
```

### :chicken: `(500) must return a translated error when providing an empty "firstName"` <a name="9e13f1ba0d"></a>

```sh
curl -X POST \
http://localhost:54245/black-november \
-d '{
  "firstName": "",
  "cellphone": "(12) 12345-6789"
}' \
-H 'accept-language: pt-br'
-H 'authorization: authorization-token-test'
-H 'content-type: application/json'
```

**Request** :egg:

Path: `/black-november`

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
  "firstName": "",
  "cellphone": "(12) 12345-6789"
}
```

**Response** :hatching_chick:

Status: 500

Headers: _empty_

Body: 

```
{
  "code": "SHARED_ERROR_FIELD_IS_REQUIRED",
  "field": "firstName",
  "message": "O campo \"firstName\" é mandatório."
}
```

### :chicken: `(500) must return a translated error when "firstName" of value "Le" does not match the regex "/^[A-Za-z]{3,24}$/"` <a name="757fbdd4e9"></a>

```sh
curl -X POST \
http://localhost:54245/black-november \
-d '{
  "firstName": "Le",
  "cellphone": "(12) 12345-6789"
}' \
-H 'accept-language: pt-br'
-H 'authorization: authorization-token-test'
-H 'content-type: application/json'
```

**Request** :egg:

Path: `/black-november`

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
  "firstName": "Le",
  "cellphone": "(12) 12345-6789"
}
```

**Response** :hatching_chick:

Status: 500

Headers: _empty_

Body: 

```
{
  "code": "SHARED_ERROR_FIELD_IS_NOT_MATCHING_REGEX",
  "field": "firstName",
  "regex": "/^[A-Za-z]{3,24}$/",
  "message": "O campo \"firstName\" não corresponde a regex \"/^[A-Za-z]{3,24}$/\"."
}
```

### :chicken: `(500) must return a translated error when "firstName" of value "Le onardo" does not match the regex "/^[A-Za-z]{3,24}$/"` <a name="6c72c1c23e"></a>

```sh
curl -X POST \
http://localhost:54245/black-november \
-d '{
  "firstName": "Le onardo",
  "cellphone": "(12) 12345-6789"
}' \
-H 'accept-language: pt-br'
-H 'authorization: authorization-token-test'
-H 'content-type: application/json'
```

**Request** :egg:

Path: `/black-november`

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
  "firstName": "Le onardo",
  "cellphone": "(12) 12345-6789"
}
```

**Response** :hatching_chick:

Status: 500

Headers: _empty_

Body: 

```
{
  "code": "SHARED_ERROR_FIELD_IS_NOT_MATCHING_REGEX",
  "field": "firstName",
  "regex": "/^[A-Za-z]{3,24}$/",
  "message": "O campo \"firstName\" não corresponde a regex \"/^[A-Za-z]{3,24}$/\"."
}
```

### :chicken: `(500) must return a translated error when "firstName" of value "Leonardo Sarmento" does not match the regex "/^[A-Za-z]{3,24}$/"` <a name="b13c08c668"></a>

```sh
curl -X POST \
http://localhost:54245/black-november \
-d '{
  "firstName": "Leonardo Sarmento",
  "cellphone": "(12) 12345-6789"
}' \
-H 'accept-language: pt-br'
-H 'authorization: authorization-token-test'
-H 'content-type: application/json'
```

**Request** :egg:

Path: `/black-november`

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
  "firstName": "Leonardo Sarmento",
  "cellphone": "(12) 12345-6789"
}
```

**Response** :hatching_chick:

Status: 500

Headers: _empty_

Body: 

```
{
  "code": "SHARED_ERROR_FIELD_IS_NOT_MATCHING_REGEX",
  "field": "firstName",
  "regex": "/^[A-Za-z]{3,24}$/",
  "message": "O campo \"firstName\" não corresponde a regex \"/^[A-Za-z]{3,24}$/\"."
}
```

### :chicken: `(500) must return a translated error when "cellphone" of value "(12) 12345678910" does not match the regex "/^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{2}\)?[\s.-]?\d{5}[\s.-]?\d{4}$/"` <a name="3fc77d6ac1"></a>

```sh
curl -X POST \
http://localhost:54245/black-november \
-d '{
  "firstName": "Leonardo",
  "cellphone": "(12) 12345678910"
}' \
-H 'accept-language: pt-br'
-H 'authorization: authorization-token-test'
-H 'content-type: application/json'
```

**Request** :egg:

Path: `/black-november`

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
  "firstName": "Leonardo",
  "cellphone": "(12) 12345678910"
}
```

**Response** :hatching_chick:

Status: 500

Headers: _empty_

Body: 

```
{
  "code": "SHARED_ERROR_FIELD_IS_NOT_MATCHING_REGEX",
  "field": "cellphone",
  "regex": "/^(\\+\\d{1,2}\\s?)?1?\\-?\\.?\\s?\\(?\\d{2}\\)?[\\s.-]?\\d{5}[\\s.-]?\\d{4}$/",
  "message": "O campo \"cellphone\" não corresponde a regex \"/^(\\+\\d{1,2}\\s?)?1?\\-?\\.?\\s?\\(?\\d{2}\\)?[\\s.-]?\\d{5}[\\s.-]?\\d{4}$/\"."
}
```

### :chicken: `(500) must return a translated error when "cellphone" of value "(12) 1234-56789" does not match the regex "/^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{2}\)?[\s.-]?\d{5}[\s.-]?\d{4}$/"` <a name="f7460899e1"></a>

```sh
curl -X POST \
http://localhost:54245/black-november \
-d '{
  "firstName": "Leonardo",
  "cellphone": "(12) 1234-56789"
}' \
-H 'accept-language: pt-br'
-H 'authorization: authorization-token-test'
-H 'content-type: application/json'
```

**Request** :egg:

Path: `/black-november`

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
  "firstName": "Leonardo",
  "cellphone": "(12) 1234-56789"
}
```

**Response** :hatching_chick:

Status: 500

Headers: _empty_

Body: 

```
{
  "code": "SHARED_ERROR_FIELD_IS_NOT_MATCHING_REGEX",
  "field": "cellphone",
  "regex": "/^(\\+\\d{1,2}\\s?)?1?\\-?\\.?\\s?\\(?\\d{2}\\)?[\\s.-]?\\d{5}[\\s.-]?\\d{4}$/",
  "message": "O campo \"cellphone\" não corresponde a regex \"/^(\\+\\d{1,2}\\s?)?1?\\-?\\.?\\s?\\(?\\d{2}\\)?[\\s.-]?\\d{5}[\\s.-]?\\d{4}$/\"."
}
```
