import { MongoClient } from "mongodb";
import 'dotenv/config';

class  dbClient {

    constructor() {
        const querySting = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/?retryWrites=true&w=majority&appName=pruebaBsw`;
        this.client = new MongoClient(querySting);
        this.conectarBD();
    }

    async conectarBD() {
        try {
            // Conección de la instancia de MongoClient al servidor MongoDB
            await this.client.connect();
            // Selecciona la colección llamando al método db() con el nombre de bd
            this.db = this.client.db('usuarios_db'); 
            console.log("conectado al servidor de base de datos");
        } catch (e) {
            console.log("Error: ", e);
        }
    }
}

export default new dbClient();