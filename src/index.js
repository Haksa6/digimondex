import './sass/main.scss';




const boxes = document.querySelectorAll(".box");
const img = document.querySelector(".box-image");


const getDigimons = async () => {
  const response = await fetch('https://digimon-api.vercel.app/api/digimon', {mode: 'cors'});
  const data = await response.json();
  img.src = data[208].img;
  console.log(data[0].img)
}

getDigimons();