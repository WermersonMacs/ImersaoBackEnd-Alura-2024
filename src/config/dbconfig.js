import { MongoClient } from 'mongodb';

let mongoClient;

export default async function conectarAoBanco(stringConexao) {
    

    if (!stringConexao || !stringConexao.startsWith('mongodb')) {
      throw new Error('String de conexão inválida ou não definida.');
  }

  if (mongoClient) {
      console.log('Usando cliente MongoDB já existente.');
      return mongoClient;
  }

    try {
        mongoClient = new MongoClient(stringConexao);
        console.log('Conectando ao cluster do banco de dados...');
        await mongoClient.connect();
        console.log('Conectado ao MongoDB Atlas com sucesso!');

        return mongoClient;
    } catch (erro) {
        console.error('Falha na conexão com o banco!', erro);
        throw erro;
    }
}