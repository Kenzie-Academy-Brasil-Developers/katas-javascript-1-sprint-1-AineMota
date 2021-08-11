document.write('Retorno de 1 a 20 <br>');
function oneThroughTwenty() {
    let n = 1;

   while(n <= 20){
    document.write( n + '<br>');
    n++;
   }
}


oneThroughTwenty();

document.write('Retorno de pares de 1 a 20 <br>')

function evensToTwenty() {
   
  let counter = 2;
  
   while(counter <= 20) {
     document.write(counter + '<br>');
     counter += 2;

   }
}

evensToTwenty();

document.write('Retorno de ímpares de 1 a 20<br>')
function oddsToTwenty() {
    
  let counter = 1;

  while(counter <= 20) {

    document.write(counter + '<br>');
    counter += 2;
  }
   
}

oddsToTwenty();


document.write('Retorno multiplos de 5 até 100 <br>')
function multiplesOfFive() {

  let multi = 0;

for (let counter = 1; multi <= 100;counter++){
    
    multi = counter * 5;
    document.write(multi + '<br>');
}
 }


multiplesOfFive();

document.write('Retorno quadrados perfeitos até 100 <br>');
function squareNumbers() {
  let quadrado = 0; 

   for(let n = 1; quadrado< 100; n++){

      quadrado = n * n;  
      document.write(quadrado + '<br>');
  } 
}

squareNumbers();


document.write('Retorno contagem regressiva a partir de 20 <br>')
function countingBackwards() {
    let n = 20
 while(n > 0){
   document.write(n + '<br>');
   n -= 1;
 }
}

countingBackwards();


document.write('Retorno regressivo de pares a partir de 20 <br>')
function evenNumbersBackwards() {
    
 let n = 20;
 
 while(n > 0){
   document.write(n + '<br>');
   n -= 2;  
 }
}

evenNumbersBackwards();

document.write('Retorno regressivo de ímpares a partir de 20 <br>')
function oddNumbersBackwards() {
    
 let n = 19;
  
 while(n > 0){
   document.write(n + '<br>');
   n -= 2;
 }
}

oddNumbersBackwards();

document.write('Retorno regresivo dos multiplos de 5 a partir de 100 <br>')
function multiplesOfFiveBackwards() {
  let n = 100;  
  
  while(n > 0){
    document.write(n + '<br>');
    n -= 5;
  }
}

multiplesOfFiveBackwards();

document.write('Retorno regressivo dos quadrados perfeitos a partir de 100 <br>')
function squareNumbersBackwards() {
   let impares = [];
   let numero = 1;
   let reg = 100 ;
   
   for(let n = 1; n <= 10; n++){
      impares.push(numero);
      numero += 2;
   }
   for(let indice = (impares.length - 1); indice >= 0; indice--){
      reg -= impares[indice];
     document.write( reg + '<br>');
     
   }
}

squareNumbersBackwards();
