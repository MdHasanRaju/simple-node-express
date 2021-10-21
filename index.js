const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json())

const port = 3000;

app.get('/', (req, res) => {
    res.send("Wow Hello from my first ever node")
});

const users = [
    {id:0, name:"shabana", email:"shabana@gmail.com", age:45},
    {id:1, name:"srabonti", email:"srabonti@gmail.com", age:48},
    {id:2, name:"shabnoor", email:"srabonti@gmail.com", age:49},
    {id:3, name:"sonia", email:"srabonti@gmail.com", age:50}
]

app.get('/users', (req, res) => {
    const search = (req.query.search)

    // use search query parameter
    if(search) {
       const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
       res.send(searchResult);
    }
    else{
       res.send(users)
    }
})

// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    console.log("hitting the post", req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['Mango, orange, banana, grapes']);
});
app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('yummy fruits mango');
});


app.listen(port, () => {
    console.log("listen to port", port);
})

