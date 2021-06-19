import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Voz = new Schema(
    {
        naziv: {
            type: String
        },
        masinovodja: {
            type: String
        },
        registarskaOznaka: {
            type: String
        },
        geografskaDuzina: {
            type: String
        },
        geografskaSirina: {
            type: String
        }
    }
)

export default mongoose.model('Voz', Voz, 'vozovi');