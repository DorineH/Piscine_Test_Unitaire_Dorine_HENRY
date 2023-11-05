// Exercice 5: Créer une fonction pour vérifier si une année est bissextile
module.exports = function estAnneeBissextile(annee) {
    const anneeBissextile = new Date(annee, 1, 29).getDate() === 29;
    if (anneeBissextile == false) {
        return false;
    }
    if (anneeBissextile == true) {
        return true;
    }
}
