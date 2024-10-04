
async function visualizarInformacoesGlobais() {

    const res = await fetch(url)

    const dados = await res.json()

    console.log(dados);
}