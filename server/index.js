const express = require('express');
const graphQLHTTP = require('express-graphql');
const app = express();

app.use('/graphql', graphQLHTTP({
    
}));

app.listen(4000, () => {
    console.log('Listening at port 4000');
});