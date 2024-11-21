import express from "express";

const posts = [
  {
    descricao: "uma foto teste",
    imagem: "https://placecats.com/millie/300/150"
  },
  {
    descricao: "uma foto de uma paisagem",
    imagem: "https://placeimg.com/300/150/nature"
  },
  {
    descricao: "foto de uma cidade à noite",
    imagem: "https://placeimg.com/300/150/city"
  },
  {
    descricao: "uma imagem de um cachorro",
    imagem: "https://placeimg.com/300/150/animals"
  },
  {
    descricao: "uma foto de comida deliciosa",
    imagem: "https://placeimg.com/300/150/food"
  },
  {
    descricao: "um retrato de uma pessoa sorrindo",
    imagem: "https://placeimg.com/300/150/people"
  }
];


const app = express();
app.use(express.json)
app.listen(3000,()=>{
  console.log("Server listening...");
});

app.get("/api",(req, res) =>{
  res.status(200).send("Boas vindas à imersão!");
})