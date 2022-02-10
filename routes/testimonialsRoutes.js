
const express = require('express');
const app = express.Router();
const fixArrayId = require('../helper')


let testimonials =[
    { 
        id:1, 
        details:"fadgnsdmpmcamcpamcmapcmascmasmcasmcasmc",
        title: "Colleague",
        name:"Nadeem Johnson",
        img:"https://i.postimg.cc/Jhs8ZxqN/Nadeem.jpg",

    },
    { 
        id:2, 
        details:"fadgnsdmpmcamcpamcmapcmascmasmcasmcasmc",
        title: "Lecturer at Life Choices",
        name:"Alex Sexwale",
        img:"https://i.postimg.cc/Nfzq0qRB/Alex.jpg",
    },
    { 
        id:3, 
        details:"fadgnsdmpmcamcpamcmapcmascmasmcasmcasmc",
        title: "Colleague",
        name:"Random user",
        img:"https://i.postimg.cc/bJdZG1GW/Hannah.jpg",

    },
    { 
        id:4, 
        details:"fadgnsdmpmcamcpamcmapcmascmasmcasmcasmc",
        title: "Colleague",
        name:"Hannah Dalwai",
        img:"https://i.postimg.cc/bJdZG1GW/Hannah.jpg",

    }
];
//GET ALL PROJECTS
app.get('/',(req, res) => {
    res.send(testimonials);
});

//get one project
app.get("/:id",(req,res) => {
    const testimonial = testimonials.find((testimonial) => testimonial.id == req.params.id);
    if (!testimonial) res.status(404).send({msg:'The product with the given ID was not found.'});
    res.send(testimonial);
});
//CREATE A PROJECT (push to array)
//Create a project(push to an array)
app.post("/", (req, res) => {
    let { title, img,name } =req.body;
    if (!title || !name || !img  )
    res.status(400).send ({ msg: "not all information sent"});

    let newTestimonial= {
        id: testimonials.length + 1,
        title,
        name,
        img,
    };
    testimonials.push(newTestimonial);
    res.send(newTestimonial);
});

//Update a project
app.put('/:id' , (req,res) => {
let testimonial = testimonials.find((testimonial) => testimonial.id == req.params.id);
if (!testimonial) res.status(404).send({ msg: "project not found"});
let { title,img,name} = req.body;

//write details to project
if(title) testimonial.title = title;
if(img) testimonial.img = img;
if(name) testimonial.name = name;

});

app.delete('/:id' ,(req,res) => {
    const testimonial = testimonials.find((testimonial) => testimonial.id == req.params.id);
    if (!testimonial) res.status(404).send({msg:'The product with the given ID was not found.'});
 
 let index = testimonials.indexOf(testimonial);
 testimonials.splice(index,1);
 
 res.send(testimonials);
});
module.exports = app
