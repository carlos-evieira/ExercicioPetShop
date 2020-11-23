const pets = require('./informacao')


function vacinarPet(pet, vacina) {
    // ela vai adicionar uma nova vacina (cheque como é a estrutura do atributo vacinas)
    // cada vacina deve ser um objeto que contem atributos nome e data
    // não vá apagar as vacinas anteriores!

    for (let i = 0; i < pets.length; i++) {
            if (pets[i].nome == pet) {
              pets[i].vacinas.push(vacina);
            }
          }
        }
        vacinarPet("Stark", 
        {
          nome: "Giardia",
          data: "07/11/2020"
        }
        )
        
        console.log(pets[0]);
           
  