const express = require('express');
const router = express.Router();

let cakes = require('../cakes.json');

router.get('/', (req, res) => {
    res.json({ cakes: cakes });
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;

    const cake = cakes.filter((cake) => {
        return cake.id == id;
    });
    if (!cake.length) {
        next();
    }
    res.json({ cake: cake[0] });
});

router.post('/', (req, res, next) => {
    const body = req.body;
    cakes.push(body);
    res.json({ cakes: body });
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const updatedCakes = cakes.map((cake) => {
        if (cake.id == id) {
            return body;
        }
        return cake;
    });
    res.json({ cakes: updatedCakes });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const trash = cakes.filter((cake) => {
        return cake.id != id;
    });
    res.json({ cakes: trash });
});

module.exports = router;
