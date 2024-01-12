async function fetchDragon() {
  try {
      const response = await fetch('https://dragonball-api.com/api/characters/3');
      const data = await response.json();
      const tipoName = document.querySelector('#nome');
      const tipoElement = document.querySelector('#tipo');
      const tipoGenero = document.querySelector('#genero');
      const tipoKiBase = document.querySelector('#kibase');
      const tipoKiTotal = document.querySelector('#kitotal');
      const tipoAfiliacao = document.querySelector('#afiliacao');

      if (Array.isArray(data)) {
          tipoName.innerText = data.map(personagem => personagem.name).join(', ');
          tipoElement.innerText = data.map(personagem => personagem.race).join(', ');
          tipoGenero.innerText = data.map(personagem => personagem.gender).join(', ');
          tipoKiBase.innerText = data.map(personagem => personagem.ki).join(', ');
          tipoKiTotal.innerText = data.map(personagem => personagem.maxKi).join(', ');
          tipoAfiliacao.innerText = data.map(personagem => personagem.affiliation).join(', ');
      } else {
          tipoName.innerText = data.name;
          tipoElement.innerText = data.race;
          tipoGenero.innerText = data.gender;
          tipoKiBase.innerText = data.ki;
          tipoKiTotal.innerText = data.maxKi;
          tipoAfiliacao.innerText = data.affiliation;
      }
  } catch (error) {
      console.error('Erro ao obter dados:', error);
  }
}

fetchDragon();

// async function fetchDragon(id) {
//   try {
//     const response = await fetch(`https://dragonball-api.com/api/characters/${id}`);
//     const data = await response.json();

//     const cardImageElement = document.getElementById('personagemImagem');
//     const racaElement = document.querySelector('#tipo');

//     if (Array.isArray(data)) {
//       console.error('Erro: o ID fornecido não corresponde a um personagem único.');
//       return;
//     }

//     // Construa a URL da imagem usando o ID
//     const imageUrl = `https://res.cloudinary.com/dgtgbyo76/image/upload/${data.image}.webp`;

//     // Atribua a URL ao atributo src da imagem
//     cardImageElement.src = imageUrl;

//     // Exemplo de como você pode manipular os dados da 'raca'
//     const tipos = document.createElement('p');
//     tipos.innerText = data.raca;
//     racaElement.appendChild(tipos);
//   } catch (error) {
//     console.error('Erro ao obter dados:', error);
//   }
// }

// // Supondo que você tenha um ID disponível
// const personagemId = 2;
// fetchDragon(personagemId);