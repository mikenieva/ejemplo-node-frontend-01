export const generateSuperheroes = (arrSuperheros) => {
  const superheroesArea = document.querySelector("#superheroes")
  superheroesArea.innerHTML += /* HTML */ `
    <div>
      ${arrSuperheros.map((superhero) => `<p>${superhero}</p>`).join("")}
    </div>
  `
  return
}
