const api = {
    key: "4930558afcaeeec187450879e0493743",
    base: "https://api.openweathermap.org/data/2.5/"
}

const inputv = document.querySelector(".inputValue");
const btn = document.querySelector(".button");
const date = document.querySelector(".date");
const temp = document.querySelector(".temp");
const weather = document.querySelector(".weather");
const addCard = document.querySelector(".hidden");

function getQuery()
{
    fetch(`${api.base}weather?q=`+inputv.value+`&units=metric&appid=${api.key}`)
        .then(response => response.json())
        .then(dataDisplay);
}

function dataDisplay(response)
{   
    if(response.cod === "404")
    {         
        addCard.classList.add('card');
        temp.innerText = 'N/A';
        weather.innerText = 'N/A';
    }
    else
    {    
        addCard.classList.add('card');
        temp.innerText = "Temperature: " + response['main']['temp'] + String.fromCharCode(176) + 'c';
        weather.innerText = "Weather: " + response.weather[0].main; 
    }
}

btn.addEventListener('click', getQuery);