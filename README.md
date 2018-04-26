# web-application-example-exam
web application to exam from TRATO

# API

## GET /auth

```js
    body:{
        user: string().required()
        test: string().required()
    }
```

response:

```js
body :{
    token: string()
}
```
## GET /user/:id?

It is mapped to query = queryString || {id}

header:

Authorization = Bearer + token

## POST /user

```js
body:{
    username: string()
    birthday: date()
}
```
header:

Authorization = Bearer + token
## PUT /user/:id? 

It is mapped to query = queryString || {id}

```js
body:{
    username: string()
    birthday: date()
}
```
header:

Authorization = Bearer + token
## DELETE /user/:id? 

It is mapped to query = queryString || {id} doing active property in user to false.
header:

Authorization = Bearer + token