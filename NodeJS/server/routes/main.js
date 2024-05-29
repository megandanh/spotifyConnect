const express = require('express');
const router = express.Router();


// Routes
router.get('/', (req, res) =>{
    const locals = {
        title: "Intertune",
        description: "simple website creaded with nodejs, express, and mongodb"
    }

    res.render('layouts/main', {locals});
});

router.get('/about', (req, res) =>{
    const locals = {
        title: "About Us",
        description: "Learn more about Intertune"
    }
    res.render('layouts/about', { locals });
});

router.get('/howitworks', (req, res) =>{
    const locals = {
        title: "How It Works",
        description: "Understand how Intertune works"
    }
    res.render('layouts/howitworks', { locals });
});

module.exports = router;