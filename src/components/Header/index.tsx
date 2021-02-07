import React from 'react';

import { Link } from 'react-router-dom';

import { StyledHeader } from './units';

const Header = () => {
    return (
        <StyledHeader>
            <ul>
                <li>
                    <Link to="/info">Информация</Link>
                </li>
                <li>
                    <Link to="/auth">Авторизация</Link>
                </li>
                <li>
                    <Link to="/registration">Регистрация</Link>
                </li>
                <li>
                    <Link to="/leaderboard">Таблица лидеров</Link>
                </li>
                <li>
                    <Link to="/game">Игра</Link>
                </li>
                <li>
                    <Link to="/forum">Форум</Link>
                </li>
            </ul>
        </StyledHeader>
    );
};

export default Header;
