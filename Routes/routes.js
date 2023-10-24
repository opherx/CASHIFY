const express = require('express');
const bodyParser = require('body-parser')
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/Contact', (req, res) => {
  res.render('contact');
});

router.get('/signin', (req, res) => {
  res.render('signin');
});

router.get('/vendors', (req, res) => {
  res.render('vendors');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/tutorial', (req, res) => {
  res.render('tutorial');
});

router.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

router.get('/withdraw', (req, res) => {
  res.render('withdraw');
});

router.get('/profile', (req, res) => {
  res.render('profile');
});

router.get('/admin', (req, res) => {
  res.render('admin');
});

router.get('/order', (req, res) => {
  res.render('order');
});

router.get('/coupon', (req, res) => {
  res.render('coupon');
});


// POST REQUEST



module.exports = router;
