import express from 'express';
import dotenv from 'dotenv';
import messageRoutes from './src/routes/message.routes.js';
import cors from 'cors';




dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET" , "POST" , "PUT"]
}))


app.use('/api' , messageRoutes);
app.get('/', (req, res) => {
    res.send('Welcome to YoungLabs');
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})