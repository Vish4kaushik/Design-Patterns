import { Client } from 'pg';

class Database {
    constructor() {
        if (!Database.instance) {
            this.client = null;
            Database.instance = this;
        }
        return Database.instance;
    }

    connect() {
        if (this.client) {
            console.log('Using existing PostgreSQL connection client');
            return this.client;
        }

        try {
            this.client = new Client({
                user: 'vishal-kaushik',             // Replace with your PostgreSQL username
                host: 'localhost',                  // Replace with your PostgreSQL host
                database: 'kaushik-db',             // Replace with your PostgreSQL database name
                password: 'test123',                // Replace with your PostgreSQL password
                port: 5432,                         // Replace with your PostgreSQL port
            });

            console.log('New PostgreSQL connection client created');
            return this.client;
        } catch (error) {
            console.error('Failed to connect to the PostgreSQL database:', error);
            throw error;
        }
    }

    close() {
        if (this.client) {
            this.client.end(() => {
                console.log('PostgreSQL connection client has been closed');
                this.client = null;
            });
        }
    }
}

// Singleton implementation ensures only one instance is created
const dbConnection = new Database();
Object.freeze(dbConnection);

export default dbConnection;
