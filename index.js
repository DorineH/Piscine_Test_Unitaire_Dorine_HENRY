const express = require('express');
const app = express();
const addition = require('./s1/exercice1')
const soustraction = require('./s1/exercice2')
const multiplication = require('./s1/exercice3')
const division = require('./s1/exercice4')
const factorielle = require('./s1/exercice5')
const estPairOuImpair = require('./s1/exercice6')
const celsiusEnFahrenheit = require('./s1/exercice7')
const aireCercle = require('./s1/exercice8')
const estPalindrome = require('./s1/exercice9')
const pgcd = require('./s1/exercice10')

const dateIlYADixAns = require('./s2/exercice1')
const formaterDate = require('./s2/exercice2')
const differenceEnJours = require('./s2/exercice3')
const ajouterJours = require('./s2/exercice4')
const estAnneeBissextile = require('./s2/exercice5')
const premierJourDuMois = require('./s2/exercice6')
const dernierJourDuMois = require('./s2/exercice7')
const formaterDuree = require('./s2/exercice8')
const chevauchementDates = require('./s2/exercice9')
const calculerAge = require('./s2/exercice10')

const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    return res.json([{ id: 1, name: 'John Doe' }]);
});

app.post('/:param', (req, res) => {
    return res.json([{ error: false, num: req.params.param }]);
});

app.post('/s1/exercice1', (req, res) => {
    const n1 = req.body.n1
    const n2 = req.body.n2

    if(!n1 && !n2) {
        return res.json([{
            reponse: "Ils manquent des nombres"
        }]);
    }
    if(n1 == null || !n1) {
        return res.json([{
            reponse: "Le nombre 1 n'est pas valide"
        }]);
    }
    if(n2 == null || !n2) {
        return res.json([{
            reponse: "Le nombre 2 n'est pas valide"
        }]);
    }
    let a = addition(n1, n2)
    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice2', (req, res) => {
    const n1 = req.body.n1
    const n2 = req.body.n2

    if(!n1 && !n2) {
        return res.json([{
            reponse: "Ils manquent des nombres"
        }]);
    }
    if(n1 == null || !n1) {
        return res.json([{
            reponse: "Le nombre 1 n'est pas valide"
        }]);
    }
    if(n2 == null || !n2) {
        return res.json([{
            reponse: "Le nombre 2 n'est pas valide"
        }]);
    }

    let a = soustraction(n1, n2)
    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice3', (req, res) => {
    const n1 = req.body.n1
    const n2 = req.body.n2

    if(!n1 && !n2) {
        return res.json([{
            reponse: "Ils manquent des nombres"
        }]);
    }
    if(n1 == null || !n1) {
        return res.json([{
            reponse: "Le nombre 1 n'est pas valide"
        }]);
    }
    if(n2 == null || !n2) {
        return res.json([{
            reponse: "Le nombre 2 n'est pas valide"
        }]);
    }

    let a = multiplication(n1, n2)
    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice4', (req, res) => {
    const n1 = req.body.n1
    const n2 = req.body.n2

    if(!n1 && !n2) {
        return res.json([{
            reponse: "Ils manquent des nombres"
        }]);
    }
    if(n1 == null || !n1) {
        return res.json([{
            reponse: "Le nombre 1 n'est pas valide"
        }]);
    }
    if(n2 == null || !n2) {
        return res.json([{
            reponse: "Le nombre 2 n'est pas valide"
        }]);
    }

    let a = division(n1, n2)
    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice5', (req, res) => {
    const n1 = req.body.n1
    
    if (n1 == null || !n1 || n1 < 0) {
        return res.json([{
            error : true,
            reponse: "Le nombre n'est pas valide"
        }]);
    }

    let a = factorielle(n1)
    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice6', (req, res) => {
    const n1 = req.body.n1
    if (n1 == null || !n1) {
            return res.json([{
                error: true,
                reponse: "Le nombre n'est pas valide"
            }]);
        }
    let a = estPairOuImpair(n1)
    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice7', (req, res) => {
    const celsius = req.body.celsius
    if (celsius == null || !celsius) {
        return res.json([{
            error: true,
            reponse: "Le nombre n'est pas valide"
        }]);
    }
    let a = celsiusEnFahrenheit(celsius)
    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice8', (req, res) => {
    const rayon = req.body.rayon
    if (rayon == null || !rayon) {
        return res.json([{
            error: true,
            reponse: "Le nombre n'est pas valide"
        }]);
    }
    let a = aireCercle(rayon)
    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice9', (req, res) => {
    const mot = req.body.mot
    if (mot == null || mot == undefined) {
        return res.json([{
            error: true,
            reponse: "Le mot n'est pas valide"
        }]);
    }
    let a = estPalindrome(mot)
    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice10', (req, res) => {
    const n1 = req.body.n1
    const n2 = req.body.n2

    if(!n1 && !n2) {
        return res.json([{
            error: true,
            reponse: "Ils manquent des nombres"
        }]);
    }
    if(n1 == null || !n1) {
        return res.json([{
            error: true,
            reponse: "Le nombre 1 n'est pas valide"
        }]);
    }
    if(n2 == null || !n2) {
        return res.json([{
            error: true,
            reponse: "Le nombre 2 n'est pas valide"
        }]);
    }

    let a = pgcd(n1, n2)
    return res.json([{ reponse: a }]);
});

app.post('/s2/exercice1', (req, res) => {
    const n1 = req.body.n1
    if (n1 == null || n1 == undefined) {
        return res.json([{
            error: true,
            reponse: "La date n'est pas correct"
        }]);
    }
    let a = dateIlYADixAns();
    return res.json([{ reponse: a }]);
});

app.post('/s2/exercice2', (req, res) => {
    const date = req.body.date

    if (date == null || !date) {
        return res.json([{
            error: true,
            reponse: "La date est indefinie"
        }]);
    }
    if (isNaN(new Date(date))) {
        return res.json([{
            error: true,
            reponse: "La date n'est pas correct"
        }]);
    }
    let a = formaterDate(date);
    return res.json([{ reponse: a }]);
});

app.post('/s2/exercice3', (req, res) => {
    const n1 = req.body.n1
    const n2 = req.body.n2

    if (!n1 && !n2 ) {
        return res.json([{
            error: true,
            reponse: "Ils manquent des dates"
        }]);
    }

    if (n1 == null || !n1) {
        return res.json([{
            error: true,
            reponse: "La date n1 est indefinie"
        }]);
    }
    if (n2 == null || !n2) {
        return res.json([{
            error: true,
            reponse: "La date n2 est indefinie"
        }]);
    }
    let a = differenceEnJours(n1, n2);
    return res.json([{ reponse: a }]);
});

app.post('/s2/exercice4', (req, res) => {
    const date = req.body.date
    const jours = req.body.jours
    if (!jours || jours == null) {
        return res.json([{
            error: true,
            reponse: "Il manque des jours"
        }]);
    }
    if (!date || date == null) {
        return res.json([{
            error: true,
            reponse: "Il manque une date"
        }]);
    }
    if (isNaN(new Date(date))) {
        return res.json([{
            error: true,
            reponse: "La date n'existe pas"
        }]);
    }
    let a = ajouterJours(date, jours);
    return res.json([{ reponse: a }]);
});

app.post('/s2/exercice5', (req, res) => {
    const annee = req.body.annee
    if (!annee || annee == null) {
        return res.json([{
            error: true,
            reponse: "Données non valide"
        }]);
    }
    if (annee < 0) {
        return res.json([{
            error: true, 
            reponse: "L'année doit être positive"
        }]);
    }
    let a = estAnneeBissextile(annee);
    if (a == true) {
        return res.json([{ 
            reponse: "L'année est bissextile"
        }]);
    }
    if (a == false) {
        return res.json([{ 
            reponse: "L'année n'est pas bissextile"
        }]);
    }
    return res.json([{ reponse: a }]);
});

app.post('/s2/exercice6', (req, res) => {
    const date = req.body.date
    if (date == null || !date) {
        return res.json([{
            error: true, 
            reponse: "Date invalide"
        }]);
    }
    if (isNaN(new Date(date))) {
        return res.json([{
            error: true, 
            reponse: "Date invalide"
        }]);
    }
    let a = premierJourDuMois(date);
    return res.json([{ reponse: a }]);
});

app.post('/s2/exercice7', (req, res) => {
    const date = req.body.date
    if (date == null || !date) {
        return res.json([{
            error: true, 
            reponse: "Date invalide"
        }]);
    }
    if (isNaN(new Date(date))) {
        return res.json([{
            error: true, 
            reponse: "Date invalide"
        }]);
    }
    let a = dernierJourDuMois(date);
    return res.json([{ reponse: a }]);
});

app.post('/s2/exercice8', (req, res) => {
    const heures = req.body.heures
    const minutes = req.body.minutes

    if (heures == null || !heures || heures < 0) {
        return res.json([{
            error: true, 
            reponse: "Invalide"
        }]);
    }
    if (minutes == null || !minutes || minutes < 0) {
        return res.json([{
            error: true, 
            reponse: "Invalide"
        }]);
    }

    let a = formaterDuree(heures, minutes)
    return res.json([{ reponse: a }]);
});

app.post('/s2/exercice9', (req, res) => {
    const debut1 = req.body.debut1
    const fin1 = req.body.fin1
    const debut2 = req.body.debut2
    const fin2 = req.body.fin2
    if (debut1 == null || !debut1 || isNaN(new Date(debut1))) {
        return res.json([{
            error: true, 
            reponse: "Invalide"
        }]);
    }
    if (fin1 == null || !fin1 || isNaN(new Date(fin1))) {
        return res.json([{
            error: true, 
            reponse: "Invalide"
        }]);
    }
    if (debut2 == null || !debut2 || isNaN(new Date(debut2))) {
        return res.json([{
            error: true, 
            reponse: "Invalide"
        }]);
    }
    if (fin2 == null || !fin2 || isNaN(new Date(fin2))) {
        return res.json([{
            error: true, 
            reponse: "Invalide"
        }]);
    }

    let a = chevauchementDates(debut1, fin1, debut2, fin2);
    if (a == true) {
        return res.json([{
            error: true, 
            reponse: "Les dates se chefauchent"
        }]);
    }
    return res.json([{ reponse: a }]);
});

app.post('/s2/exercice10', (req, res) => {
    const dateNaissance = req.body.dateNaissance
    if (dateNaissance == null || !dateNaissance) {
        return res.json([{
            error: true, 
            reponse: "Date manquante"
        }]);
    }
    if (isNaN(new Date(dateNaissance))) {
        return res.json([{
            error: true, 
            reponse: "Format date invalide"
        }]);
    }
    let a = calculerAge(dateNaissance);
    return res.json([{ reponse: a }]);
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

module.exports = app


