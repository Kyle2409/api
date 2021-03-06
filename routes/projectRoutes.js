
const express = require('express');
const app = express.Router();
const fixArrayId = require('../helper')


let projects =[
    { 
        id:1, 
        details:"fsdsfsfsfssfdfdsfsdfs",
        title: "Calculator",
        github:"https://woolworks.netlify.app",
        live:"https://github.com/Kyle2409/Pos-woolworks",
        img:"https://i.postimg.cc/hvZwhTzp/Screenshot-from-2021-10-27-11-00-24.png",

    },
    { 
        id:2, 
        details:"fsdsfsfsfssfdfdsfsdfs",
        title: "Woolworks",
        netlify: "https://woolworks.netlify.app",
        github: "https://github.com/Kyle2409/Pos-woolworks",
        img:"https://i.postimg.cc/hvZwhTzp/Screenshot-from-2021-10-27-11-00-24.png",
    },
    { 
        id:3, 
        details:"fsdsfsfsfssfdfdsfsdfs",
        title: "Calculator",
        netlify: "https://friendly-brattain-8ec312.netlify.app",
            github: "https://github.com/Kyle2409/BMI-final",
        img:"https://i.postimg.cc/hvZwhTzp/Screenshot-from-2021-10-27-11-00-24.png",

    },
    { 
        id:4, 
        details:"fsdsfsfsfssfdfdsfsdfs",
        title: "Calculator",
        netlify: "https://woolworks.netlify.app",
        github: "https://github.com/Kyle2409/Pos-woolworks",
        img:"https://i.postimg.cc/hvZwhTzp/Screenshot-from-2021-10-27-11-00-24.png",

    }
];
//GET ALL PROJECTS
app.get('/',(req, res) => {
    res.send(projects);
});

//get one project
app.get("/:id",(req,res) => {
    const project = projects.find((project) => project.id == req.params.id);
    if (!project) res.status(404).send({msg:'The product with the given ID was not found.'});
    res.send(project);
});
//CREATE A PROJECT (push to array)
//Create a project(push to an array)
app.post("/", (req, res) => {
    let { title, img, github,details, live } =req.body;
    if (!title || !img || !github || !live||!details)
    res.status(400).send ({ msg: "not all information sent"});

    let newProject = {
        id: projects.length + 1,
        title,
        img,
        github,
        live,
    };
    projects.push(newProject);
    res.send(newProject);
});

//Update a project
app.put('/:id' , (req,res) => {
let project = projects.find((project) => project.id == req.params.id);
if (!project) res.status(404).send({ msg: "project not found"});
let { title,img,github,live,details} = req.body;

//write details to project
if(title) project.title = title;
if(img) project.img = img;
if(github) project.github = github;
if(live) project.live = live;
if(details) project.details = details;

res.send(projects);
});

app.delete('/:id' ,(req,res) => {
    const project = projects.find((project) => project.id == req.params.id);
    if (!project) res.status(404).send({msg:'The product with the given ID was not found.'});
 
 let index = projects.indexOf(project);
 projects.splice(index,1);
 
 res.send(projects);
});
module.exports = app
