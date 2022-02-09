const { Router } = require("express");
const express = require("express");
const router = express.Router();
const Articles = require("../models/articles");


//GET ARTICLE
router.get("/", (req,res)=>{
    Articles.find()
        .then(article=>res.json(article))
        .catch(err=>res.status(400).res.json(`Error:${err}`));
   
});

//CREATE ARTICLE
router.post("/add", (req,res)=>{
    const newArticle = new Articles({
        title:req.body.title,
        article:req.body.article,
        author:req.body.author
    });

    newArticle
        .save()
        .then(()=>res.json("The new Article posted successfully!"))
        .catch(err=>res.status(400).json(`Error:${err}`));


});

//FIND ARTICLE BY ID
router.get('/:id',(req,res)=>{
    Articles.findById(req.params.id)
        .then(article=>res.json(article))
        .catch(err=>res.status(400).json(`Error:${err}`))
})

//FIND ARTICLE BY ID AND UPDATE
router.put("/update/:id", (req,res)=>{
    Articles.findById(req.params.id)
        .then(article=>{
            article.title = req.body.title;
            article.article = req.body.article;
            article.author = req.body.author;


            article
            .save()
            .then(()=>res.json("The Article is updated successfully!"))
            .catch(err=>res.status(400).json(`Error:${err}`));

        })
    });

   




//FIND ARTICLE BY ID AND DELETE
router.delete("/:id", (req,res)=>{
    Articles.findByIdAndDelete(req.params.id)
        .then(()=> res.json("The article is deleted"))
        .catch(err=>res.status(400).json(`Error:${err}`));
});



module.exports = router;
