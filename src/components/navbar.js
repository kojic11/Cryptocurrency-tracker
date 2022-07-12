import '../styles/navbar.css'
import { NavLink } from "react-router-dom";

function Navbar({log, isLogged}){
    return <div className='navwrap'>
        <div className='brand'>
            <NavLink to='/'><p>Home</p></NavLink>
            { (isLogged || localStorage.getItem('isLogged')) ? (<NavLink to='/favorite'><p>Favorites</p></NavLink>) : <p></p>}
        </div>
        { (isLogged || localStorage.getItem('isLogged')) ? (<div></div>) : <div className='login'>
            <button className='btn-l' onClick={log}>Login</button>
        </div>}

    </div>
}
export default Navbar;