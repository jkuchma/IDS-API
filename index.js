const app = require('express')();
const PORT = 8080;

app.listen(
    PORT,
    () => console.log('Connected on http://localhost:',{PORT})
)
// app.get('/tshirt', (req,res) => {
//     res.status(200).send({
//         tshirt:'yeee',
//         size:'chunky'
//     })
// });

// app.post('tshirt/:id', (req, res) =>{

//     const { id } = req.params;
//     const { logo } = req.body;

//     if(!logo) {
//         res.status(418).send({message: 'Logo required'})
//     }

//     res.send({
//         tshirt: 'blah blah blah heres your ${logo} and ID of ${id}',
//     });
// });