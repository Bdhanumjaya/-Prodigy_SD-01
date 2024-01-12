
function updateDateTime() {
  const datetimeContainer = document.getElementById('datetime-container');
  const timeElement = document.createElement('p');
  const dateElement = document.createElement('p');

  const update = () => {
    const now = new Date();
    const hours = now.getHours() % 12 || 12; 
    const minutes = now.getMinutes();
    const timeString = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;

    const day = now.toLocaleString('en-us', { weekday: 'long' });
    const month = now.toLocaleString('en-us', { month: 'long' });
    const dayOfMonth = now.getDate();
    const year = now.getFullYear();
    const dateString = `${day}, ${month} ${dayOfMonth}, ${year}`;

    timeElement.textContent = timeString;
    dateElement.textContent = dateString;
  };

  update(); 

  setInterval(update, 60000); 

  datetimeContainer.appendChild(timeElement);
  datetimeContainer.appendChild(dateElement);

  timeElement.classList.add('time');
  dateElement.classList.add('date');
}


updateDateTime();

const celsiusField = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
  degree.value = "";
  celsiusField.innerHTML = "";
});

if(degree.value === ""){
  convertBtn.setAttribute("disabled","");
  setTimeout(() => {
    convertBtn.removeAttribute('disabled');
  }, 4000);
}


convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  convertToCelsius();
  convertBtn.innerHTML = "<span class='icon'><i class='fa fa-spinner fa-spin'></i> Converting...</span>";
  setTimeout(() => {
    convertBtn.innerHTML ="<span>Convert</span>"
  }, 1000);
});

function convertToCelsius() {
  let inputValue = degree.value;
  
  setTimeout( () => {
    if (tempType.value === "fahrenheit") {
      const FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
      celsiusField.innerHTML = `${FahrenheitToCelsius.toFixed(3)} &deg;c`;
    } else if (tempType.value === "kelvin") {
      const KelvinToCelsius = inputValue - 273.15;
      celsiusField.innerHTML = `${KelvinToCelsius.toFixed(3)} &deg;c`;
    }
  }, 1200)
}