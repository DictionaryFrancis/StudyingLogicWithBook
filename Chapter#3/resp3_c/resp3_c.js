const form = document.querySelector("form")
const answer = document.querySelector("#answer")
const outChange = document.querySelector("#change")

form.addEventListener("submit", (e) => {
    let inMoney = Number(form.inMoney.value)


    //if the money isnt enough
    if (inMoney < 1.00) {
        answer.textContent =alert("Too low price")
        form.inMoney.focus()
        return
    }
    
    let time
    let change
    
    
    
    if (inMoney >= 3.00) {
        time = 120
        change = inMoney - 3.00
    }if (inMoney >= 1.75) {
        time = 60
        change = inMoney - 1.75
    }if (inMoney >= 1.00) {
        time = 30
        change = inMoney - 1.00
    }

    answer.textContent = `Time: ${time}`
    if (change > 0) {
        outChange.textContent = `Change is ${change.toFixed(2)}`
    }

    e.preventDefault()
})