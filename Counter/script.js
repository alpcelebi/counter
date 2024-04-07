var count = 0;
const numberspan = document.getElementById('numberspan');
const increase_button = document.getElementById('btnincrease');
const decrease_button = document.getElementById('btndecrease');
const reset_button = document.getElementById('btnreset');

function increase()
{
    count++;
    numberspan.innerHTML=count;
}

function decrease()
{
    count--;
    numberspan.innerHTML=count;
}

function reset()
{
    count=0;
    numberspan.innerHTML=count;
}

increase_button.addEventListener("click",increase);
decrease_button.addEventListener("click",decrease);
reset_button.addEventListener("click",reset);