console.log("Funcionando");

const canvas = document.querySelector("canvas");
/*que hace el querySelector????*/
const context = canvas.getContext("2d");

context.fillStyle = 'blue';
context.fillRect(20,20,200,200);
/* posicion, posicion, ancho, altura */

context.beginPath();
context.rect(20,240,200,200);
context.fillStyle = 'green';
context.fill();
context.lineWidth = 4;
context.stroke();

context.beginPath();
context.arc(340,120,100,0, 2*Math.PI);
context.fillStyle = 'red';
context.fill();
context.lineWidth = 2;
context.stroke();