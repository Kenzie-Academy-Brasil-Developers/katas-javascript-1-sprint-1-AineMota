
function oneThroughTwenty() {

    let n = 1;
    let ate20 = [];

   while(n <= 20){
    ate20.push(n);
    n++;
   }
   return ate20;
}


console.log(oneThroughTwenty());



function evensToTwenty() {
   
  let counter = 2;
  let pares = [];
  
   while(counter <= 20) {
     pares.push(counter);
     counter += 2;

   }
   return pares;
}

console.log(evensToTwenty());


function oddsToTwenty() {
    
  let counter = 1;
  let impares = [];

  while(counter <= 20) {

    impares.push(counter);
    counter += 2;
  }
   return impares;
}

console.log(oddsToTwenty());



function multiplesOfFive() {

  let fiveProducts = 0;
  let multiplos = [];
  let multi = 0;

  for (let counter = 1; multi <= 100;counter++){
    
    multi = counter * 5;
    multiplos.push(multi);
    
}
  return multiplos;
 }


 console.log(multiplesOfFive());


function squareNumbers() {

  let potencia = 0; 
  let valores = [];

   for(let n = 1; potencia < 100; n++){

      potencia = n ** 2;  
      valores.push(potencia);
  } 
  return valores;
}

console.log(squareNumbers());



function countingBackwards() {

    let n = 20
    let regressiva = [];
 
    while(n > 0){

   regressiva.push(n);
   n -= 1;
 }
 return regressiva;
}

console.log(countingBackwards());



function evenNumbersBackwards() {
    
  let n = 20;
  let pares = [];
 
  while(n > 0){
   pares.push(n);
   n -= 2;  
 }
  return pares;
}

console.log(evenNumbersBackwards());


function oddNumbersBackwards() {
    
  let n = 19;
  let impares = [];
  
  while(n > 0){
   impares.push(n);
   n -= 2;
 }
  return impares;
}

console.log(oddNumbersBackwards());


function multiplesOfFiveBackwards() {
  let n = 100;  
  let multiFive = [];
  
  while(n > 0){
    multiFive.push(n);
    n -= 5;
  }
  return multiFive;
}

console.log(multiplesOfFiveBackwards());


function squareNumbersBackwards() {
   let impares = [];
   let numero = 1;
   let reg = 100 ;
   let quadrados = [];
   
   for(let n = 1; n <= 10; n++){
      impares.push(numero);
      numero += 2;
   }
   for(let indice = (impares.length - 1); indice > 0; indice--){
      reg -= impares[indice];
      quadrados.push(reg);
     
   }
   return quadrados;
}

console.log(squareNumbersBackwards());
