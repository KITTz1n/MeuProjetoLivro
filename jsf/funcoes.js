function Desenvolvendo()
{
    alert('Ainda sendo desenvolvido')
    console.log('Tentou algo em desenvolvimento ainda')
    //Essa funcao serve para tudo aquilo que estiver em desenvolvimento ser chamada ela
}
function retro_e_avan(local)
{
    if (local == '')
    {
        alert('Ainda em desenvolvimento ou ocorreu algum erro!')
    }
    else
    {
        window.location.href = local
    }
}