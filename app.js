const temperturefield = document.querySelector('.weather1');
const cityfield = document.querySelector('.weather2 p');
const datefield = document.querySelector('.weather2 span');
const eomjifield = document.querySelector('.weather3 p img');
const conditionfield = document.querySelector('.weather3 span');
const search = document.querySelector('.search')
const form = document.querySelector('form');
const input = document.querySelector('input');





let target = "indore";

async function fetchData(target){
    
    
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${target}.1%2C-0.13`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '49e7daa616msh84ceb487cf2725dp176df1jsn6e0f2047e1d9',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url,options);
        const data = await response.json();
        console.log(data);

        const {
            current:{
                temp_c,
                condition:{icon,text}
            },
            location: {name,localtime}
        } = data;


        updateDom(temp_c,name,icon,text,localtime)


    } catch (error) {
        console.error(error);
    }

    
}


function updateDom(temp,city,emoji,condition,localtime){
    temperturefield.innerHTML = temp;
    cityfield.innerText = city;
    eomjifield.src = emoji;
    conditionfield.innerText = condition;
    datefield.innerText = localtime
}

fetchData(target);

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    target = input.value;
    fetchData(target);

})

