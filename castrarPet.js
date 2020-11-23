const pets = require('./informacao')

 function castrarPet(pet) {
    // se o pet não for castrado castre o pet
    // se o pet for castrado mande uma mensagem de
    // "esse pet já é castrado, não posso castra-lo de novo"
    for (let i = 0; i < pets.length; i++) {
              if (pets[i].nome == pet){ 
                if (pets[i].castrado == true) {
                  console.log("Este cão já foi castrado")
                }else {
                  pets[i].castrado = true
                  console.log("Seu Cão foi castrado, Obrigado!")
                }
               }
            } 
        }
        castrarPet("Stark")
        console.log(pets)
  