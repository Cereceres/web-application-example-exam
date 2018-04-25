# web-application-example-exam
web application to exam from TRATO

# API

## GET /user/:id?

It is mapped to query = queryString || {id}

## POST /user

```js
body:{
    username: string()
    birthday: date()
}
```

## PUT /user/:id? 

It is mapped to query = queryString || {id}

```js
body:{
    username: string()
    birthday: date()
}
```

## DELETE /user/:id? 

It is mapped to query = queryString || {id} doing active property in user to false.
