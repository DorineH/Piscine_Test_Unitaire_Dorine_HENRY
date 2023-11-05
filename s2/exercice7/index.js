// Exercice 7: Créer une fonction pour obtenir le dernier jour du mois d'une date donnée
module.exports = function dernierJourDuMois(date) {
    const dateObj = new Date(date);
    const annee = dateObj.getFullYear();
    const mois = dateObj.getMonth() + 1; 
    const dernierJourDuMois = new Date(annee, mois, 1); 
    return dernierJourDuMois.toISOString().slice(0, 10);
}
