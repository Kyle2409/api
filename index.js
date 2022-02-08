const express = require('express')
const projectRoutes = require('./routes/projectRoutes');
const testimonialRoutes = require('./routes/testimonialsRoutes');

const app = express();
app.use(express.json());

app.get('/',(req, res) => {
    res.send({msg:"Welcome to Kyle's API"})
})

app.use("/projects",projectRoutes);
app.use("/testimonials",testimonialRoutes);

const port = process.env.PORT || 5000;
app.listen(port,() => console.log(`Listening on port ${port}...`));