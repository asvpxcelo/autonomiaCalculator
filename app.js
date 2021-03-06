// Listen for submit

document.getElementById('form-group').addEventListener('submit', calculateAutonomia);



// calculando a funçao
function calculateAutonomia(e) {
    
    // Captando todas as variáveis dos espaços

    // Litros da Bomba
    const valorbomba = document.getElementById('valor-da-bomba');

    // Valor do Combustível
    const litrosBomba = document.getElementById('litros-da-bomba');

    // Consumo do carro
    const consumoCarro = document.getElementById('consumo-do-carro');



    // Calculando a soma dos produtos

   const valorDaBomba = parseFloat(valorbomba.value);

   const litrosdaBomba = parseFloat(litrosBomba.value);

   const consumoDoCarro = parseFloat(consumoCarro.value);

    let resultadoAutonomia = valorDaBomba * (litrosdaBomba / consumoDoCarro);

    // Computando

   document.getElementById('resultado').value = resultadoAutonomia;
    

   e.preventDefault()
    
}