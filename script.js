let count = document.getElementById('count');

let peopleCount = 0;


function startCounter() {
    peopleCount = 0;
    appendToUI();
    increaseByTen();
}

function increaseByTen(){
   peopleCount = peopleCount + 10; 
   appendToUI();
   setTimeout(()=> increaseByTwenty(),2000)

}

function increaseByTwenty(){
  peopleCount = peopleCount + 20;
  appendToUI();
  setTimeout(()=> increaseByFifty(),2000)
}

function increaseByFifty() {
    peopleCount = peopleCount + 50;
    appendToUI();
}

function appendToUI(){
    count.innerHTML = peopleCount;
}
