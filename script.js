document.querySelector('button').addEventListener('click', function() {
    alert('Saiba mais sobre nossos serviços de energia solar.');
});

const estados = [
    "Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo",
    "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", 
    "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", 
    "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"
];

const cidadesPorEstado = {
    "Bahia": ["Salvador", "Feira de Santana", "Vitória da Conquista"],
    "São Paulo": ["São Paulo", "Campinas", "Santos"],
    // Adicione mais cidades conforme necessário
};

let cidadesFiltradas = [];
let estadosFiltrados = [];

function filtrarEstados() {
    const input = document.getElementById("estado").value.toLowerCase();
    const sugestoesDiv = document.getElementById("sugestoes-estados");

    sugestoesDiv.innerHTML = '';
    sugestoesDiv.classList.remove('active');

    if (input) {
        estadosFiltrados = estados.filter(estado => estado.toLowerCase().includes(input));

        estadosFiltrados.forEach(estado => {
            const div = document.createElement("div");
            div.textContent = estado;
            div.className = "sugestao";
            div.onclick = () => selecionarEstado(estado);
            sugestoesDiv.appendChild(div);
        });

        sugestoesDiv.classList.add('active');
    }
}

function selecionarEstado(estado) {
    document.getElementById("estado").value = estado;
    document.getElementById("sugestoes-estados").innerHTML = '';
    document.getElementById("sugestoes-estados").classList.remove('active');
    cidadesFiltradas = cidadesPorEstado[estado] || [];
}

function filtrarCidades() {
    const input = document.getElementById("cidade").value.toLowerCase();
    const sugestoesDiv = document.getElementById("sugestoes-cidades");

    sugestoesDiv.innerHTML = '';
    sugestoesDiv.classList.remove('active');

    if (input) {
        const sugestoes = cidadesFiltradas.filter(cidade => cidade.toLowerCase().includes(input));

        sugestoes.forEach(cidade => {
            const div = document.createElement("div");
            div.textContent = cidade;
            div.className = "sugestao";
            div.onclick = () => selecionarCidade(cidade);
            sugestoesDiv.appendChild(div);
        });

        sugestoesDiv.classList.add('active');
    }
}

function selecionarCidade(cidade) {
    document.getElementById("cidade").value = cidade;
    document.getElementById("sugestoes-cidades").innerHTML = '';
    document.getElementById("sugestoes-cidades").classList.remove('active');
}