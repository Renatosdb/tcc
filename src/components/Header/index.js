import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";

function Header() {
    const [{ basket, user }] = useStateValue();

    const login = () => {
        if (user) {
            auth.signOut();
        }
    }

    console.log(basket);

    return (
        <nav className="header">

            {/* Logo */}
            <Link to="/">
                <img className="header__logo"
                    alt="" src="data:image/png;base64,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"
                />
            </Link>

            {/* Search box */}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            {/* 3 links no menu */}
            <div className="header__Nav">

                {/* 1 - Sign in link no menu */}
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header__optionLineOne">Ola {user?.email}</span>
                        <span className="header__optionLineTwo">{user ? 'Sair' : 'Entrar'}</span>
                    </div>
                </Link>

                {/* 2 - Meu carrinho link no menu */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Voltar</span>
                        <span className="header__optionLineTwo">& ordens</span>
                    </div>
                </Link>

                {/* 3 - Minha subscricao link no menu */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Minha</span>
                        <span className="header__optionLineTwo">Subscricao</span>
                    </div>
                </Link>
            </div>

            {/* Meu carrinho no menu */}
            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">

                    {/* Carrinho icon */}
                    <ShoppingBasketIcon />

                    {/* Numero de itens no carrinho */}
                    <span className="header__optionLineTwo header_bascketCount">
                        {basket?.length}
                    </span>
                </div>
            </Link>
        </nav>
    );
}

export default Header;
