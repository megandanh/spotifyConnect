const express = require('express');
const router = express.Router();

// GET /
// admin - login page
router.get('/admin', async(req, res) =>{
    try{
        const locals = {
            title: "Intertune",
            description: "simple website creaded with nodejs, express, and mongodb"
        }
        res.render('admin/index', {locals});
    } catch(error){
        console.log(error);
    }

});

module.exports = router;