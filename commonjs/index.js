const myApp = require('./app');
// const express = require('express');
import express from 'express';
// const react = require('react');

const app = express();

app.get('/', (req, res) => {
    res.json({msg: 'successfully!'})
})

app.listen(8000, () => {
    console.log('server is running on port 8000');
})

// console.log(myApp);

// import export ES6, // set upd node server -->es6->es6 khi do trinh duyet moi doc duoc
// Babel
// Webpack// view Reactjs --.browser, may iphone, samsung