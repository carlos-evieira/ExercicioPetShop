const pets = require('./informacao')


function darBanhoPet(pet) {
 // retorna a mensagem "o NomeDoPet tomou banho hoje"
    for(let i=0; i < pets.length; i++){
      if(pets[i].nome == pet){
      return `${pet} tomou banho hoje`
      }
    }
  }
  console.log(darBanhoPet("Ted"))