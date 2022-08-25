const form  = document.querySelector("form")
const answer = document.querySelector("#answer")

form.addEventListener("submit", (e) => {
    let speed = form.inSpeed.value
    let driver = form.inDriverSpeed.value

    let minimumFee = speed - (speed * 0.20)
    let maximumFee =  (speed * 0.20) + speed 

    if ( driver <= speed) {
        answer.textContent = `Situation: No fine` 
    }if( driver >= minimumFee && driver < maximumFee) {
        answer.textContent = `Situation: Light violation`
    }if (driver > maximumFee ) {
        answer.textContent = `Situation: Serious violation`
    }

    e.preventDefault()
})