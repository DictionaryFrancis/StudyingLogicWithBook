const form = document.querySelector("form")
const answer = document.querySelector("#answer")

form.addEventListener("submit", (e) => {
    const number = Number(form.inNumber.value)


    if (number == "" || isNaN(number)) {
        alert("Please insert the number...")
        number.focus()
        return
    }

    sum = Math.sqrt(number)

    if (sum % 1 == 0) {
        answer.textContent = "The Square root is: " + sum        
    }else{
        answer.textContent = number + " it is Non Square Number"
    }

     

    e.preventDefault()

})