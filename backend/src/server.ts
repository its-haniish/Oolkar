import dotenv from 'dotenv';
import express, { Request, Response } from 'express';

// Load environment variables from .env file
dotenv.config();


const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8080; // Use environment variable or default to 3000


app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript with Node.js!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
