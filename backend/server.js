import express from 'express';
import mongoose from 'mongoose';

import userRouter from './routers/userRouter.js'; 
import productRouter from './routers/productRouter.js';

import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json()); //fizemos isso aqui pra liberar envio de json nas requests
//antes disso ficava bugando o POST pra fazer signin dos usuarios
app.use(express.urlencoded({ extended: true })); 
//com esses dois middlewares acima, toda requisicao que tem dados em body, traduzimos como direct.body na aplicacao node 

//conectando aplicacao ao mongodb
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/amazona', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use('/api/products', productRouter);
app.use('/api/users', userRouter);

app.get('/', (req, res) => {
  res.send('Server is ready')
})

//error catcher
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`)
})

// api/users/register