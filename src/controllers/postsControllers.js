import { getTodosPosts, criarPost } from "../models/postsModels.js";

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
