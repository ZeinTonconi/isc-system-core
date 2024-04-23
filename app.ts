import express, { Request, Response, Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import authRouter from './src/routes/authRoutes';
import studentRouter from './src/routes/studentRoutes';
import graduationRouter from './src/routes/graduationRoutes';
import professorRouter from './src/routes/professorRoutes';
import modalityRouter from './src/routes/modalityRoutes';

dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

app.use('/api/auth', authRouter);
app.use('/api/student', studentRouter);
app.use('/api/graduation', graduationRouter);
app.use('/api/professor', professorRouter);
app.use('/api/modality', modalityRouter);

export default app;
