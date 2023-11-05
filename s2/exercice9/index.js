// Exercice 9: Créer une fonction pour vérifier si deux plages de dates se chevauchent
module.exports = function chevauchementDates(debut1, fin1, debut2, fin2) {
    if (fin1 < debut2) {
        return false;
      }
    if (debut1 > fin2) {
        return false;
    }
    // renvoie true quand les dates se chevauche
    return true;
}