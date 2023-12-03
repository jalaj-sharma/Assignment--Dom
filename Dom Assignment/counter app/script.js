const decrementBtn= document.getElementById("decrement-btn")
const incrementBtn= document.getElementById("increment-btn")
const resetBtn= document.getElementById("reset-btn")
const displayValue= document.getElementById("display-value")

//for increment button click

incrementBtn.addEventListener("click",()=>{
    const value=Number(displayValue.innerText);
    if(value>=10){
        alert("10+ values are not allowed")
    }
    else{
        displayValue.innerText= value +1;
    }
})
//for decrement button click

decrementBtn.addEventListener("click",()=>{
    const value=Number(displayValue.innerText);
    if(value>0){
        displayValue.innerText=value-1;
    }
    else{
        alert("Negative value not allowed")
    }
})
//for reset button click

resetBtn.addEventListener("click",()=>{
    const value=Number(displayValue.innerText);
    displayValue.innerText=0;
})