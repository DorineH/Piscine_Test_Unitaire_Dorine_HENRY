// Exercice 8: Créer une fonction pour formater une durée en heures et minutes
module.exports = function formaterDuree(heures, minutes) {
    if (heures < 0 || minutes < 0) {
        return "La durée ne peut pas être négative";
      }
    
      const jours = Math.floor(heures / 24);
      heures = heures % 24;
      heures += Math.floor(minutes / 60);
      minutes = minutes % 60;

      const heuresFormatees = heures < 10 ? `0${heures}` : heures;
      const minutesFormatees = minutes < 10 ? `0${minutes}` : minutes;
    
      const dureeFormatee = [];
    
      if (jours > 0) {
        dureeFormatee.push(`${jours} jour(s)`);
      }
    
      if (heures > 0) {
        dureeFormatee.push(`${heuresFormatees} heure(s)`);
      }
    
      if (minutes > 0) {
        dureeFormatee.push(`${minutesFormatees} minute(s)`);
      }
    
      return dureeFormatee.join(" ");
}