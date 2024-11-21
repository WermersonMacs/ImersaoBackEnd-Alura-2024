import express from "express";

const posts = [
  {
    id: 1, descricao: "uma foto teste", imagem: "https://placecats.com/millie/300/150"
  },
  {
    id: 2, descricao: "uma foto de uma paisagem", imagem: "https://placeimg.com/300/150/nature"
  },
  {
    id: 3, descricao: "foto de uma cidade à noite", imagem: "https://placeimg.com/300/150/city"
  },
  {
    id: 4,
    descricao: "uma imagem de um cachorro",
    imagem: "https://placeimg.com/300/150/animals"
  },
  {
    id: 5,
    descricao: "uma foto de comida deliciosa",
    imagem: "https://placeimg.com/300/150/food"
  },
  {
    id: 6,
    descricao: "um retrato de uma pessoa sorrindo",
    imagem: "https://placeimg.com/300/150/people"
  }
];



const app = express();
app.use(express.json())
app.listen(3000,()=>{
  console.log("Server listening...");
});

function buscarPostPorID(id){
  return posts.findIndex((posts)=>{
    return posts.id === Number(id)
  })
}
app.get("/posts/:id",(req, res) =>{
  const index = buscarPostPorID(req.params.id)
  res.status(200).json(posts[index]);
});