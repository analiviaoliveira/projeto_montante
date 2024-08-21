function calcular() {
    const capital = parseFloat(document.getElementById('capital').value);
    const taxa = parseFloat(document.getElementById('taxa').value) / 100;
    const periodo = parseFloat(document.getElementById('periodo').value);
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    if (isNaN(capital) || isNaN(taxa) || isNaN(periodo)) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    let montante;
    
    if (tipo === 'simples') {
        // Juros Simples: M = C * (1 + i * n)
        montante = capital * (1 + taxa * periodo);
    } else if (tipo === 'compostos') {
        // Juros Compostos: M = C * (1 + i) ^ n
        montante = capital * Math.pow((1 + taxa), periodo);
    }

    document.getElementById('resultado').textContent = `Montante Final: R$ ${montante.toFixed(2)}`;
}

function limpar() {
    document.getElementById('capital').value = '';
    document.getElementById('taxa').value = '';
    document.getElementById('periodo').value = '';
    document.getElementById('resultado').textContent = '';
    document.querySelector('input[name="tipo"][value="simples"]').checked = true;
}
