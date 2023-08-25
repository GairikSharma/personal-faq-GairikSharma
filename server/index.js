const express = require("express");
const cors = require("cors");
const fs = require("fs");

const PORT = process.env.PORT || 5000; //This is the port on which the server will be listening to incoming requests. You can change the value 5000 to anything of your choice. It is recommened not to change process.env.PORT
const app = express();

app.use(cors());
app.use(express.json());

//Setting up routes
//You won't have to manually add every route here in case you decide to add a new route in 'routes' directory
//Endpoint will be like /api/read ot /api/delete etc
const files = fs.readdirSync("./routes/");
for (const file of files)
{
  const filename = file.substring(0,file.length-3);
  app.use(`/api/${filename}`, require(`./routes/${filename}`));
}

//Set up a default route
app.get("/", (req, res)=>{
  res.status(200).send("Default Route...");
});

//Server will be listening on port 5000. You can change the port number by changing the value of 'PORT'
try{
  app.listen(PORT, ()=>{
  console.log(`Listening on port ${PORT}`);
  });
}
catch(error){
  console.log(error);

}
