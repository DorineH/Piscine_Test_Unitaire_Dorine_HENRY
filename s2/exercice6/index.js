// Exercice 6: Créer une fonction pour obtenir le premier jour du mois d'une date donnée
module.exports = function premierJourDuMois(date) {
    const dateObj = new Date(date);
    dateObj.setDate(1);
    return dateObj.toISOString().slice(0, 10); 
}