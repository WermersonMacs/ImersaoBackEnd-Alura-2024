import express from "express";
import dotenv from "dotenv";
import conectarAoBanco from "./src/config/dbconfig.js";
dotenv.config()
await conectarAoBanco(process.env.STRING_CONEXAO);

console.log(process.env)

// const posts = [
//     {id: 1, descricao: "uma foto teste", imagem: "https://placecats.com/millie/300/150"},
//     {id: 2, descricao: "uma foto de uma paisagem", imagem: "https://placeimg.com/300/150/nature"},
//     {id: 3, descricao: "foto de uma cidade à noite", imagem: "https://placeimg.com/300/150/city"},
// ];

const app = express();
app.use(express.json())

app.listen(3000,()=>{
  console.log("Server listening...");
});

let conexao;

(async () => {
  try {
    conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
    console.log("Conexão com o banco de dados estabelecida!");
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
    process.exit(1); // Finaliza a aplicação em caso de erro crítico
  }
})();

async function getTodosPosts() {
  if (!conexao) {
    throw new Error("A conexão com o banco de dados não foi inicializada.");
}
  const db = conexao.db("imersao-instabytes")
  const colecao = db.collection("posts")
  console.log(colecao)
  return colecao.find().toArray()
  
}

app.get("/posts", async (req,res)=>{
  const posts = await getTodosPosts()
  res.status(200).json(posts)
})

// function buscarPostPorID(id){
//   return posts.findIndex((post)=>{
//     return post.id === Number(id)
//   })
// }
// app.get("/posts/:id",(req, res) =>{
//   const index = buscarPostPorID(req.params.id)
//   res.status(200).json(posts[index]);
// });