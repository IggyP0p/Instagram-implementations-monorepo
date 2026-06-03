import { MongoClient } from "mongodb";
import dotenv from "dotenv";

const connect = async () => {

    dotenv.config();

    const client = new MongoClient(process.env.URL_MONGODB);

    try {
        await client.connect();

        console.log('conectado ao banco de dados');

        const db = client.db('instagramClone');

        return db;

    } catch (error) {
        console.error('Erro ao conectar: ', error);
        
    }
}

export default connect;