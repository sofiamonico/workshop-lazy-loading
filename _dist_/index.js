/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
import {registerImage} from './lazy.js'

const maximum = 123;
const minimum = 1;



const random = () => Math.floor(Math.random()* (maximum-minimum)) + minimum

const createImageNode = () =>{
    const container = document.createElement("div");
    container.className= "p-4"
    const image = document.createElement("img");
    image.className= "mx-auto rounded-md bg-gray-300";
    image.width=320;
    image.dataset.src=`https://randomfox.ca/images/${random()}.jpg`; //TODO
    container.appendChild(image);
    appendedImages++;
    printLog()
    return container;
}

const mountNode = document.getElementById("images");
const addButton = document.querySelector("button");
const deleteButton = document.getElementById("delete");

const addImage = () => {
    const newImage  = createImageNode();
    mountNode.appendChild(newImage);
    registerImage(newImage);
}
const accion =()=>{
    mountNode.innerHTML = '';
    console.log("Agregando y limpiando")
}

addButton.addEventListener("click", addImage);
deleteButton.addEventListener("click", accion)

