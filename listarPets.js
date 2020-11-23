const pets = require('./informacao')


function listaPets(pets) {
   // recebe um array de pets e listas todos os pets do sistema (com nome, raca e dono)
  
  let lista = []
  pets.forEach( (pet) => {
    
    lista.push([pet.nome, pet.raca, pet.dono])
      
    })
    return lista
  }

console.log(listaPets(pets))
