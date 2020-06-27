const express = require('express');

const router = express.Router();
const Seller = require('../models/Seller')

router.post(
    '/create',
    async (request, response) => {
        console.log(request.body);
        const {
            name,
            description,
            address,
            phone,
            email,
        } = request.body;
        try {
            const seller = new Seller({
                name,
                description,
                address,
                phone,
                email
            });
            const result = await seller.save();
            response.json(result);
        } catch (err) {
            response.json(err)
        }
    }
)

router.get(
    '/list',
    async (request, response) => {
        try {
            const result = await Seller.find();
            response.json(result);
        } catch (err) {
            response.json(err)
        }
    }
)

router.get(
    '/:id',
    async (request, response) => {
        const id = request.params.id
        if (id) {
            try {
                const result = await Seller.findById(id);
                response.json(result);
            } catch (err) {
                response.json(err)
            }
        }
    }
)

router.delete(
    '/delete/:id',
    async (request, response) => {
        const id = request.params.id
        console.log(id)
        if (id) {
            try {
                const result = await Seller.deleteOne({ _id: id }).j(true);
                response.json(result);
            } catch (err) {
                response.json(err)
            }
        }
    }
)

module.exports = router