const app = require('express')();
const PORT = process.env.PORT || 3000;

app.listen(
    PORT,
    () => console.log(`it is alive on http://localshot:${PORT}`)
);

app.get('/', (request, response) => {
    response.status(200).send({
        "nome": "julio",
        "idade": 36
    });
});