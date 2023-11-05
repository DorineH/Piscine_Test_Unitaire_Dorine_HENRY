// Exercice 10: Créer une fonction pour calculer l'âge à partir de la date de naissance
module.exports = function calculerAge(dateNaissance) {
    const [anneeNaissance, moisNaissance, jourNaissance] = dateNaissance.split('-').map(Number);
    const dateActuelle = new Date();
    const anneeActuelle = dateActuelle.getFullYear();
    const moisActuel = dateActuelle.getMonth() + 1;
    const jourActuel = dateActuelle.getDate();

    let age = anneeActuelle - anneeNaissance;

    if (moisActuel < moisNaissance || (moisActuel === moisNaissance && jourActuel < jourNaissance)) {
    age--;
    }

  return age;
}