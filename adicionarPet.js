const pets = require('./informacao')

// function adicionarPet(nome, raca, peso, idade, cor, etc)
function adicionarPet(pet) {
      
      pets.push(pet);
    }
      
      adicionarPet(
      {
        nome: "Meg",
        raca: "Shi-tsu",
        peso: 8,
        idade: 6,
        cor: "Marrom",
        porte: "Pequeno",
        sexo: "f",
        dono: "Kadu",
        alergias: ["AAS", "AntiInflamatório"],
        castrado: true,
        vacinas: [{ nome: "v10", data: "10/12/2015" }],
      }
      )
      
      console.log(pets)
    
  