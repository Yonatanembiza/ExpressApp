const express = require('express');
const app = express();
let data = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi"
    }
];

//express middleware 
app.use('/posts', (req, res) => {
    // res.json(200, data[1]);
    res.status(200).json(data);
});
app.use('/', (req, res)=>{
    res.status(404).send('API not supported :) ')
});


app.listen(5000, ()=>{
    console.log('Your Server is running on port 5000...')
});