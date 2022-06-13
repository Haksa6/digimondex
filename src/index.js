import './sass/main.scss';

const main = document.querySelector(".main");


const getDigimons = async () => {

  // Fetch the data
  const response = await fetch('https://digimon-api.vercel.app/api/digimon', {mode: 'cors'});
  const data = await response.json();

  //Clear out the main screen before getting data
  main.innerHTML = "";
  for(let digimon in data){
    const box = document.createElement("div");
    box.classList.add("box");

    const img = document.createElement("img");
    img.classList.add("box-image");
    img.src = data[digimon].img;

    const text = document.createElement("p");
    text.classList.add("box-text");
    text.textContent = data[digimon].name;

    const level = document.createElement("p");
    level.classList.add("box-level");
    level.textContent = data[digimon].level;

    box.appendChild(img);
    box.appendChild(text);
    box.appendChild(level);

    main.appendChild(box);
  }
  console.log(data.length)
}

getDigimons();