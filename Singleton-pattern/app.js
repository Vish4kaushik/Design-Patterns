import db from './dbConnection.js';

export const fetchList = async() => {

    const dbPool = db.connect(); // retreives the connection pool

    try {
        const client = await dbPool.connect(); // retrieves an individual connection from that pool

        // Example: Query the database
        const res = await client.query('SELECT * from table1');
        console.log("Response from the database: ",res)

        client.release();  // Release the client back to the pool
    } catch (error) {
        console.error('Error executing query:', error);
    } finally {
        db.close(); // It should only be called when shutting down the application, not after each query
    }
}
