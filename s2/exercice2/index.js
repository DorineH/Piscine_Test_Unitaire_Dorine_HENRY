// Exercice 2: Créer une fonction pour formater une date en "jj/mm/aaaa"
module.exports = function formaterDate(dateStr) {
    const date = new Date(dateStr);
    const jour = String(date.getDate()).padStart(2, '0'); 
    const mois = String(date.getMonth() + 1).padStart(2, '0');
    const annee = date.getFullYear();
    const dateFormater = `${jour}/${mois}/${annee}`;
    return dateFormater;
}