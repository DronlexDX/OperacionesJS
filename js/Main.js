function saludo(){
    alert("Bienvenido Usuario");
}

function suma(){
    //declarar variables necesarias

    let A =0;
    let B =0;
    let suma =0;
    //Solicitar Valores
    alert("Este algoritmo realiza la suma de dos valores ingresado por usted");
    A = parseInt(prompt("Por favor ingrese el primer valor a sumar "));
    B = parseInt(prompt("Por favor ingrese el segundo valor a sumar"));
    //REalizar las operaciones
    suma = A+B;
    //Mostramos resultado
    alert("El resultado de la suma es "+ suma);

}

function operacionBasica(){
    let A =0;
    let B =0;
    let resta=0;
    let multi=0;
    let div=0;
    alert("Este algoritmo realiza operaciones como resta multiplicacion y division");
    A = parseInt(prompt("Ingrese el primer valor"));
    B = parseInt(prompt("Ingrese el segundo valor"))

    resta = A-B;
    multi = A*B;
    div = A/B;

    alert("El resutado de los valores ingresados es "+" Resta: "+resta+" Multiplicación: "+multi +" Division: " +div);

}

function cuadrado(){
    let A =0;
    let cuadrado= 0;
    alert("Este algoritmo realizara una operacion donde saca el cuadrado de el numero escrito");

    A= parseInt(prompt("Ingrese el numero que quiere sacarle el cuadrado"));

    cuadrado = A**2;

    alert("El cuadrado del numero escrito es: " +cuadrado +"cm²");
}

function areaTriangulo(){
    let Base=0;
    let Altura=0;
    let area=0;
    alert(" Este algoritmo sacará el area de un triangulo segun los datos registrados");

    Base= parseInt(prompt("Cual es la base del triangulo"));
    Altura= parseInt(prompt("Cual es la altura del triangulo"));

    area= Base*Altura/2;

    alert("El area del triangulo es "+ area);
}

function numeroMayor(){
    let A,B = 0;
    // alert("");
    A = parseInt(prompt("Ingrese el primer valor"));
    B = parseInt(prompt("Ingrese el segundo valor"));

    if (A==B) {
        alert("Los valores ingresados son iguales");
    }else if(A > B){

        alert(A+ " Es mayor que "+ B);

    }else{
        alert(B+ " Es mayor que "+A);
    }


}
function conversionUnidad(){
    let Metro = 0;
    let pulgada = 0;
    let Pie = 0;
    let Kilometro = 0;

    alert("Este algoritmo convertira el dato registrado en las unidades de medida como pulgada, Pie y kilometro");

    Metro= parseInt(prompt(" Escriba la cantidad de metros a convertir."));
    pulgada= Metro*(39.37/1.0);
    Pie= Metro*(3.28/1.0);
    Kilometro = Metro*(1.0/1000);

    alert("los metros registrado convertidos en pulgadas son: "+ pulgada +"\n"+"los metros registrado convertidos en pie son: "+ Pie +"\n" +"los metros registrado convertidos en kilometros son: "+Kilometro);
}

function conversionTemperatura(){
    let centigrados =0;
    let farenheit =0;
    let celcius =0;

    alert("Este algoritmo convierte los grados a farenheit y celcius");

    centigrados= parseFloat(prompt("Ingrese los grados que desea convertir"));
    farenheit =( centigrados*1.8)+32;
    celcius =centigrados;

    alert("los grados que registro convertidos a farenheit son: "+ farenheit +"°F"+"\n"+"los grados que registro convertidos a celcius son: "+celcius +"°C");
}


function promedioEstudiante(){
    let nombre;
    let promedio;
    let notasresult = 0; 

    nombre = prompt("Escriba su nombre");
    for (let i = 1; i <= 10; i++){
        const nota = parseFloat(prompt("Ingrese las 10 notas que sacó"));
        notasresult += nota;
    }
    promedio = notasresult / 10;
    let resultado;
   
    if (promedio >= 6 && promedio <= 10){ 
        resultado = "Usted aprobó la materia"; 

    } else {
        resultado = "Usted reprobó la materia"; 
    }
    alert("Usted, siendo el estudiante: " + nombre + " Su resultado en la materia fue: " + promedio + " " + resultado);
}




function parimpar(){
    let numero= 0;

    alert("Este algortimo te mostrará si el numero que registro es impar o par");

    numero= parseInt(prompt("Ingrese un numero"));

    if(numero %2===0){
        alert(numero + " El numero registrado es par ");
    }else{
        alert(numero +" El numero registrado es impar");
    }

}

function menor3(){
    let numero1=0;
    let numero2=0;
    let numero3=0;

    alert("Este algoritmo va a mostrar el numero menor de los 3 que hayas puesto");

    numero1= parseInt(prompt("Escriba el primer numero"));
    numero2= parseInt(prompt("Escriba el segundo numero"));
    numero3= parseInt(prompt("Escriba el tercer numero"));
    if(numero1 < numero2 && numero1<numero3){
        alert(numero1+ " El primer numero es menor que el segundo numero: "+numero2 +" y el tercer numero: "+numero3);
    }else if(numero2 < numero1 && numero2 < numero3){
        alert(numero2+" El segundo numero es  menor que el primer numero: "+numero1+ " y el tercer numero: "+numero3);
    }else{
        alert(numero3+" El tercer numero es menor que el primer numero: "+ numero1+ "y el segundo numero: "+numero3);
    }

}

function descuentoCompra(){
    let kilos=0;
    let valorCompra=0;
    let promocion=0;
    alert("Este algotimo le dara un descuento al valor de su compra dependiendo de cuantos kilos pese");
    kilos= parseInt(prompt("Cuantos kilos pesa su compra?"));
    valorCompra= parseInt(prompt("Cual es el valor de su compra?"));

    if(kilos <=2){
        alert("Su compra no tine el suficiente peso para la promocion por lo tanto debe pagar: "+valorCompra*promocion);
    }else if(kilos >=3 && kilos <=5){
        promocion=0.1;
        promocion= valorCompra*promocion;
        alert("Su compra quedo con el 10% de descuento por lo tanto debe pagar: " +(valorCompra-promocion));
    }else if(kilos >=6 && kilos <=10){
        promocion=0.15;
        promocion= valorCompra*promocion;
        alert("Su compra quedo con el 15% de descuento por lo tanto debe pagar: " +(valorCompra-promocion));
    }else if(kilos >=10){
        promocion=0.2;
        promocion= valorCompra*promocion;
        alert("Su compra quedo con el 20% de descuento por lo tanto debe pagar: " +(valorCompra-promocion));
    }
}

function salarioHora(){
    let hora=0;
    let salario=10000;
    let horaextra=10000;
    alert("Este algoritmo calcurará su salario semanal dependiendo de cuantas horas trabajo");
    hora= parseInt(prompt("Cuantas horas trabajo en la semana?"));

    if(hora<=40){
        salario=salario*hora;
        alert("Su salario semanal es: "+ salario);
    }else if(hora>40){
        salario= (salario*hora)+horaextra;
        alert("Su salario semanal es: "+ salario);
    }
}