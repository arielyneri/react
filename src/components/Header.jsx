import Home from '../pages/home';
import style from './Header.module.css';


export function Header({ brand, description, children }) {
    return (
        <>
            <header className={style.header}>
                <div class={style.brand}>
                    <span className={style.logo}>GT</span>
                    <div>
                        <strong className={style.brand}>{brand}</strong>
                        <span>{description}</span>
                    </div>
                </div>
                <nav className={style.navigation}>
                    {children}
                </nav>
            </header>
        </>
    );
}