// Exercice 4: Créer une fonction pour ajouter un nombre de jours à une date
module.exports = function ajouterJours(dateStr, jours) {
    const date = new Date(dateStr);
    date.setDate(date.getDate() + jours);
    return date.toISOString().slice(0, 10); 
}
