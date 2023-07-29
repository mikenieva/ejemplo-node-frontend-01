// 1. IMPORTACIONES
import "./style.css"
import superheroes from "superheroes"
import { sum } from "./calculator"
import { generateSuperheroes } from "./view"

// 2. SELECTORES

const firstValueInput = document.querySelector("#first-value")
const secondValueInput = document.querySelector("#second-value")
const calculatorResultArea = document.querySelector("#calculator-result")
const sumButton = document.querySelector("#sum-button")

// 3. CONTROLADORES

const calculateSumArea = (a, b) => {
  const sumResult = sum(a, b)

  calculatorResultArea.innerHTML = /* HTML */ `
    <p>El resultado es:${sumResult}</p>
  `
}

// 4. EVENTOS

const init = () => {
  const allSuperheroesArray = superheroes.all
  generateSuperheroes(allSuperheroesArray)
}

init()

sumButton.addEventListener("click", () => {
  const firstValue = Number(firstValueInput.value)
  const secondValue = Number(secondValueInput.value)

  calculateSumArea(firstValue, secondValue)
})
