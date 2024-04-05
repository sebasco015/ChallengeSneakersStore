import express from 'express';
import { connect } from './db/config';
import productRoutes from './routes/productRoutes';
import priceRoutes from './routes/priceRoutes';
import clientRoutes from './routes/clientRoutes';

const app = express();
app.use(express.json())

const PORT = 3000;

connect();

app.use(express.json());

app.use('/products', productRoutes)
app.use('/clients', clientRoutes )
app.use('/price', priceRoutes)


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})


