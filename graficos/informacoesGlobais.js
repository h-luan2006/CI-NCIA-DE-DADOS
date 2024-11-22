const url = 'https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/esportes/esportes-dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasPraticamEsportes = (dados.total_pessoas_que_praticam_esportes_regularmente / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio_semana_praticando_esportes)
    const minutos = Math.round((dados.tempo_medio_semana_praticando_esportes - horas) * 100)
    //const porcentagemConectada = ((pessoasPraticamEsportes / pessoasNoMundo) * 100).toFixed(2);
    const spectadores = (dados.total_pessoas_que_assistem_esportes /1e9)
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo}</span> bilhões de pessoas e 
    que aproximadamente <span>${pessoasPraticamEsportes}</span> bilhões praticam esportes,
    passam em média <span>${horas} horas</span> e <span>${minutos} minutos
    </span> praticando.<br>Isso significa que aproximadamente <span>${porcentagemConectada}%</span>
    pessoas estão praticandos esportes em algum lugar. `

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo);
}

vizualizarInformacoesGlobais();