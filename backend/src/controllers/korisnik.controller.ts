import express from 'express';
import Korisnik from '../models/korisnik';

export class KorisnikController{

prijava = (req: express.Request, res: express.Response) => {
    let korisnickoIme = req.body.korisnickoIme;
    let lozinka = req.body.lozinka;
    let tip = req.body.tip;
    Korisnik.findOne({'korisnickoIme': korisnickoIme, 'lozinka': lozinka, 'tip': tip}, (err, korisnik) => {
        if(err) console.log(err);
        else res.json(korisnik);
    })
}

}