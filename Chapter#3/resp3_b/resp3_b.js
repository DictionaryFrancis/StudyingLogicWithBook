const form  = document.querySelector("form")
const answer = document.querySelector("#answer")

form.addEventListener("submit", (e) => {
    let speed = Number(form.inSpeed.value)
    let driver = Number(form.inDriverSpeed.value)

    let minimumFee = speed - (speed * 0.10)
    let maximumFee = (speed) + (speed * 0.10) 

    if ( driver <= speed) {
        answer.textContent = `Situation: No fine` 
    }if( driver > minimumFee && driver <= maximumFee) {
        answer.textContent = `Situation: Light violation`
    }if (driver > maximumFee ) {
        answer.textContent = `Situation: Serious violation`
    }

    e.preventDefault()
})