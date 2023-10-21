import './estilo.css'
import logo from '../../imagens/logo_1.svg'
function Logo() {
    return(
        <div className='logo'>
            <img src={logo} alt='logo suco cubano' className='logo-img'></img>       
            <p><strong>Suco</strong>Cubano</p>   
        </div>
    )
}

export default Logo