import { getTodosPosts, criarPost } from "../models/postsModels.js";
import fs from "fs";

export async function listarPosts(req, res) {
  try {
    // Lógica para listar posts (deve vir do banco de dados)
    const posts = await getTodosPosts(); // Certifique-se de que getTodosPosts está corretamente implementada
    res.status(200).json(posts); // Retorna os posts em formato JSON
  } catch (erro) {
    res.status(500).json({ erro: "Erro ao listar os posts" });
  }
}
export async function postarNovoPost(req, res) {
  const novoPost = req.body;
  try {
    const postCriado = await criarPost(novoPost);
    res.status(201).json(postCriado);
  } catch (erro) {
    console.error(erro.message);
    res.status(500).json({ erro: "Falha na requisição" });
  }
}

export async function uploadImagem(req, res) {
  const novoPost = {
    descricao: "",
    imgUrl: req.file.originalname,
    alt: "",
  };

  try {
    const postCriado = await criarPost(novoPost);
    const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;

    fs.renameSync(req.file.path, imagemAtualizada);
    res.status(201).json(postCriado);
  } catch (erro) {
    console.error(erro.message);
    res.status(500).json({ erro: "Falha na requisição" });
  }
}
