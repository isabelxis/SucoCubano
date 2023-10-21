import './estilo.css'
const textopcoes = ['MENU','ONDE ESTAMOS','QUEM SOMOS','TRABALHE CONOSCO']

function OpcoesHeader() {
    return (
        <ul className='opcoes'>
            { textopcoes.map ( (texto) => (
                <li className='opcao'><p>{texto}</p></li>
            ) ) }
        </ul>
    )
}

export default OpcoesHeader