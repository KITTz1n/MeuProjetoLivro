function net()
{
    window.location.href = "historias/índice.html"; //Redireciona a pessoa para outra aba
}
function pdf()
{
    alert('Ainda sendo desenvolvido')
    console.log('PDF CLICADO')
    // FAZER INSTALAR O PDF DO LIVRO
}
function Desenvolvendo()
{
    alert('Ainda sendo desenvolvido')
    console.log('Tentou algo em desenvolvimento ainda')
    //Essa funcao serve para tudo aquilo que estiver em desenvolvimento ser chamada ela
}
function retro(local)
{
    var vamo = '../' + String(local) + '.html';
    window.location.href = vamo
}