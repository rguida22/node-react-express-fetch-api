const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
    const customers = [
        { id: 1, firstName: 'John', lastName: 'Doe'},
        { id: 2, firstName: 'Bill', lastName: 'Bob'},
        { id: 3, firstName: 'Jane', lastName: 'Biggs'},
    ];

    res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
