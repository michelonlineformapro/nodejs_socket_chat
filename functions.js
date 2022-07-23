function bonjour(){
    console.log('bonjour atoi export');
}

function addition(a, b){
    console.log(a + b);
}

function afficherHumain(prenom, age){
  
    return console.log('Bonjour : ' + prenom + " tu as " + age + " ans");
}

module.exports = {
    bonjour,
    addition,
    afficherHumain
}