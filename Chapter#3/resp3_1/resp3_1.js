const form  = document.querySelector("form")
const answer = document.querySelector("h3")

form.addEventListener("submit", (e) => {
    let numero = form.inNumber.value


    if (numero %2 == 0) {
        answer.textContent = `Answer: ${numero} is Even` 
    } else {
        answer.textContent = `Answer: ${numero} is Odd`
    }

    e.preventDefault()
})