// Archivo js para la calculadora 


function sumaNumeros(){
    // dclaracion let y const
    const n1=parseInt(document.getElementById('ent1').value);
    const n2=parseInt(document.getElementById('ent2').value);
    const resultado= document.getElementById('resultado');

    //proceso
    const suma=n1+n2; 
    //salida
    // alert('La suma es: '+suma); 
    resultado.innerHTML='Resultado: '+suma;

}

function restaNumeros(){
    const n1=parseInt(document.getElementById('ent1').value);
    const n2=parseInt(document.getElementById('ent2').value);
    const resultado= document.getElementById('resultado');

    const resta=n1-n2; 

   // alert('La resta es: '+resta); 
   resultado.innerHTML='Resultado: '+resta;
 

}

function multiplicaNumeros(){
    const n1=parseInt(document.getElementById('ent1').value);
    const n2=parseInt(document.getElementById('ent2').value);
    const resultado= document.getElementById('resultado');

    const multiplica=n1*n2; 

    //alert('La multiplicación es: '+multiplica); 
    resultado.innerHTML='Resultado: '+multiplica;


}

function divideNumeros(){
    const n1=parseInt(document.getElementById('ent1').value);
    const n2=parseInt(document.getElementById('ent2').value);
    const resultado= document.getElementById('resultado');

    const dividir=n1/n2; 

    //alert('La división es: '+dividir); 
    resultado.innerHTML='Resultado: '+dividir;


}     