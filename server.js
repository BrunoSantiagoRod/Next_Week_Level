const proffys = [
    {
    name: "Diego Fernandes", 
    avatar: "https://avatars2.githubusercontent.com/u/2254731?v=4", 
    whatsapp: "983475384", 
    bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passaram por uma das minhas explosões.", 
    subject: "Química", 
    cost: "40", 
    weekday: [0], 
    time_from: [720], 
    time_to:[1200],
    },
    {
        name: "Fernando Zari", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?v=4", 
        whatsapp: "983475384", 
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química", 
        cost: "40", 
        weekday: [1], 
        time_from: [720], 
        time_to:[1200],
    }
]

function pageLanding(req, res){
    return res.render("index.html")
}

function pageStudy(req, res){
    return res.render("study.html", {proffys})
}

function pageGiveClasses(req,res){
    return res.render("give-classes.html")
}

const express = require('express');
const server = express();
const nunjucks = require('nunjucks');

//Set nunjuncks
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})

//Set static archiver
server
.use(express.static("public"))
//Applicantion routes
.get("/", pageLanding())
.get("/study", pageStudy())
.get("/give-classes", pageGiveClasses())
.listen(5500)
//Note: () => {} is a function.
//Note: (requisiton(will get more data), response) => {what will returned}

// __dirname = local of program archives
// use = server configuration.
// express.static -> static refires the archives that never change (in case, all css and html scripts)