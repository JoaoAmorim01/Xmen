const personagens = document.querySelectorAll('.personagem');
const selecionado = document.querySelector('.selecionado');

function alterarDescPersona(personagem) {
    const descricaoPersonagem = document.getElementById('personaDesc');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonaSelec(personagem) {
    const nomePersonagem = document.getElementById('personaNome');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImgPersonaSelec(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personaGrande');
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/img/card-${idPersonagem}.png`;
}

function removerSelecionado() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

personagens.forEach((personagem) =>{
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top:0, behavior:'smooth'});
        }

        removerSelecionado();
        personagem.classList.add('selecionado');

        alterarImgPersonaSelec(personagem);

        alterarNomePersonaSelec(personagem);

        alterarDescPersona(personagem);
    })
})