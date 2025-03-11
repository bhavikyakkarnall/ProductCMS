import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
// import productRoutes from './routes/productRoutes.js';
// import itemRoutes from './routes/itemRoutes.js';
// import itemAllocationRoutes from './routes/itemAllocationRoutes.js';
// import orderRoutes from './routes/orderRoutes.js';
// import dispatchRoutes from './routes/dispatchRoutes.js';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

app.use('/users', userRoutes);
// app.use('/products', productRoutes);
// app.use('/items', itemRoutes);
// app.use('/item-allocations', itemAllocationRoutes);
// app.use('/orders', orderRoutes);
// app.use('/dispatches', dispatchRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong', error: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));