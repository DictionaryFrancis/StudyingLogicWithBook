const form = document.querySelector("form")
const outTenNotes = document.querySelector("#tenNotes")
const outFiftyNotes = document.querySelector("#fiftyNotes")
const outHundredNotes = document.querySelector("#hundredNotes")

form.addEventListener("submit", (e) => {
    const money = Number(form.inMoney.value)


    if (money == "" || isNaN(money)) {
        alert("Please insert the value to be withdraw...")
        money.focus()
        return
    }

    //If the number is divided per 10, if not pop the alert
    if (money %10 != 0) {
        alert("This notes no exist in the ATM at the moment(only $10, $50, $100)")
        money.focus()
        return
    }

    var hundredsNotes = Math.floor(money/100) 
    var remaninder = money % 100
    var fiftyNotes = Math.floor(remaninder/50)
    remaninder = remaninder % 50
    var tenNotes = Math.floor(remaninder / 10)

    if (hundredsNotes > 0) {
        outHundredNotes.textContent = "$100 notes: " + hundredsNotes
    }
    if (fiftyNotes > 0) {
        outFiftyNotes.textContent = "$50 notes: " + fiftyNotes
    }
    if (tenNotes > 0) {
        outTenNotes.textContent = "$10 notes: " + tenNotes
    }

     

    e.preventDefault()

})