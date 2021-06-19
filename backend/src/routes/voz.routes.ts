import express from 'express';
import { VozController } from '../controllers/voz.controller';

const vozRouter = express.Router();

vozRouter.route('/dohvatiSveVozove').get(
    (req, res) => new VozController().dohvatiSveVozove(req, res)
)

vozRouter.route('/azuriraj').post(
    (req, res) => new VozController().azuriraj(req, res)
)

export default vozRouter;