import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student-route';
import { UserRoutes } from './app/modules/user/user-route';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/students', StudentRoutes);
app.use('/api/v1/users', UserRoutes);

const getController = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};

app.get('/', getController);
export default app;
