import conectarAoBanco from "../config/dbconfig.js";

let conexao;

async function conectar() {
  if (!conexao) {
    try {
      // Conectando ao banco de dados, se a conexão ainda não existir
      conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
      console.log("Conexão com o banco de dados estabelecida!");
    } catch (error) {
      console.error("Erro ao conectar ao banco de dados:", error);
      process.exit(1); // Finaliza a aplicação em caso de erro crítico
    }
  }
  return conexao;
}

export async function getTodosPosts() {
  // Garantir que a conexão esteja estabelecida antes de fazer qualquer consulta
  const dbConnection = await conectar();
  const db = dbConnection.db("imersao-instabytes");
  const colecao = db.collection("posts");

  try {
    const posts = await colecao.find().toArray();
    console.log(posts); // Verifique os posts no console
    return posts;
  } catch (erro) {
    console.error("Erro ao buscar os posts:", erro);
    throw erro; // Re-lançando o erro para que a aplicação possa tratá-lo
  }
}
export async function criarPost(novoPost) {
  const dbConnection = await conectar();
  const db = dbConnection.db("imersao-instabytes");
  const colecao = db.collection("posts");
  const resultado = await colecao.insertOne(novoPost);
  return resultado;
}
