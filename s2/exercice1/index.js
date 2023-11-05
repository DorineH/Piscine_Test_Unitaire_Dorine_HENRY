// Exercice 1: Obtenir la date d'aujourd'hui il y a 10 ans
module.exports = function dateIlYADixAns() {
        const dateActuelle = new Date();
    
        const anneeActuelle = dateActuelle.getFullYear();
        const anneeMoinsDix = anneeActuelle - 10;
    
        const date = dateActuelle.setFullYear(anneeMoinsDix);
        const dateCorrect = new Date(date).toISOString().split('T')[0];
        return dateCorrect;
    }



