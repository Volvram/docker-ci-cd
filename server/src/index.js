const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://mongo:27017/mydb')
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

const Item = mongoose.model('Item', { name: String });

app.get('/', async (req, res) => {
    await Item.create({ name: `Item=${Date.now()}` });
    const items = await Item.find();
    res.send(`Items: ${items.map(item => item.name).join(', ')}`)
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})