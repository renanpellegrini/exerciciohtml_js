const form = document.getElementById('bigNum');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const numeroUm = parseInt(document.getElementById('numberOne').value);
    const numeroDois = parseInt(document.getElementById('numberTwo').value);
    const mensagemSucesso = `Correto. O segundo número: <b>${numeroDois}</b> é maior que o primeiro número: <b>${numeroUm}</b>`;

    if (numeroDois > numeroUm) {
        const mensagemSucessoElement = document.querySelector('.mensagemSucesso');
        mensagemSucessoElement.innerHTML = mensagemSucesso;
        mensagemSucessoElement.style.display = 'block';

        document.getElementById('numberOne').value = '';
        document.getElementById('numberTwo').value = '';
    } else {
        document.querySelector('.error-message').style.display = 'block';
    }
});

document.getElementById('numberOne').addEventListener('change', function(e) {
    console.log(e);
});
