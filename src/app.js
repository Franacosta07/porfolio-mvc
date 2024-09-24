const express = require ("express");
const path = require ("path");
const indexRoutes = require ("./routes/index.routes")

const port = 3000;
const app = express();

app.use(express.static(path.join(__dirname,'..','public')));

/*app.get("/", (req,res)=> res.sendFile(path.join(__dirname,"views","home.html")));*/
app.use("/", indexRoutes);

/*app.get("/about", (req,res)=> res.sendFile(path.join(__dirname,"views","about.html")));*/

app.listen(port, () => console.log("server running in http://localhost:" + port));

