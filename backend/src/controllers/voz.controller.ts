import express from 'express';
import Voz from '../models/voz';

export class VozController {

dohvatiSveVozove = (req: express.Request, res: express.Response) => {
    Voz.find({}, (err, vozovi) => {
        if(err) console.log(err);
        else res.json(vozovi);
    })
}

azuriraj = (req: express.Request, res: express.Response) => {
    let naziv = req.body.naziv;
    let geografskaDuzina = req.body.geografskaDuzina;
    let geografskaSirina = req.body.geografskaSirina;
    Voz.collection.updateOne({}, {$set: {'geografskaDuzina': geografskaDuzina, 'geografskaSirina': geografskaSirina}});
    res.json({'poruka': 'ok'});
}

}