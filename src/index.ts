function restar(a: number, b: number){
    if (a <=5 || b <= 5){
        throw new Error("Los numeros deben ser mayores a 5");
      }
      return a - b;
       }
    const num1 = 25;
    const num2 = 15;

    const resultado = restar(num1, num2);

    console.log(resultado);

    