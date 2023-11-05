// Exercice 3: Créer une fonction pour calculer la différence en jours entre deux dates
module.exports = function differenceEnJours(dateStr1, dateStr2) {
    const date1 = new Date(dateStr1);
    const date2 = new Date(dateStr2);

    const jour = String(date1.getDate()).padStart(2, '0'); 
    const mois = String(date1.getMonth() + 1).padStart(2, '0');
    const annee = date1.getFullYear();
  
    const differenceEnMilliseconds = date2 - date1;
    const differenceEnJours = differenceEnMilliseconds / (1000 * 60 * 60 * 24);
    return Math.abs(differenceEnJours); 
}
