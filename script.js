var selected = -1;
const ratingButtons = document.getElementById("rates-group").children;

function submit(){
    document.getElementById("first-page").classList.add("hidden");
    document.getElementById("last-page").classList.remove("hidden");
    if(selected >= 1){
        document.getElementById("selected-rate").innerText=selected;

    }else{
        document.getElementById("selected-rate").innerText="nothing";

    }
}



document.querySelector('#submit').addEventListener('click',function() {
    submit();
})



for(let i = 0; i < ratingButtons.length; i++){
    ratingButtons[i].addEventListener('click', ()=>{
        selectButton(i);
    })
}

function selectButton(id){
    console.log("clicked on "+(id+1))
    for(let i = 0; i < ratingButtons.length; i++){
        ratingButtons[i].classList.remove("selected");
    }
    ratingButtons[id].classList.add("selected");
    selected=id+1;
}