/* eslint-disable react/prop-types */
import logoImg from '../../assets/logo.jpg';
import './header.css';

function Header({ children }) {
    return(
        <header>
            <img src={logoImg} alt=""  />
            <h1>{ children }</h1>
        </header>
    )

}

export default Header;