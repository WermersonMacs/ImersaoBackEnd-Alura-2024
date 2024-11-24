import express from "express";
import routes from "./src/routes/postRouter.js";
import conectarAoBanco from "./src/config/dbconfig.js";
import dotenv from "dotenv";
dotenv.config()

console.log("String de conexão:", process.env.STRING_CONEXAO);

await conectarAoBanco(process.env.STRING_CONEXAO);

const app = express();
routes(app)


app.listen(3000,()=>{
  console.log("Server listening...");
});


// function buscarPostPorID(id){
//   return posts.findIndex((post)=>{
//     return post.id === Number(id)
//   })
// }
// app.get("/posts/:id",(req, res) =>{
//   const index = buscarPostPorID(req.params.id)
//   res.status(200).json(posts[index]);
// });