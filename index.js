"use strict"

let unirest = require('unirest');

unirest.get('http://localhost:8080/').end((res) => {
  console.log('Status:', res.statusCode);
  console.log('Headers:', res.headers);
  console.log('Body:', res.body);
});
