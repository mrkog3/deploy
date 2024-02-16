import { Outlet, NavLink, Link } from "react-router-dom";

import github from "../../assets/github.svg";

import styles from "./Layout.module.css";

import { useLogin } from "../../authConfig";

import { LoginButton } from "../../components/LoginButton";

import Logo from "../../../public/Tooxia-White.png";

const Layout = () => {
    const redirectToGoogle = () => {
        window.location.href = "https://www.kaufmann.cl/";
    };

    return (
        <div className={styles.layout}>
            <header className={styles.header} role="banner">
                <div className={styles.headerContainer}>
                    {/* Agregar el texto y la imagen del logo dentro del contenedor */}
                    <div className={styles.headerTitleContainer} style={{ marginLeft: "10px" }}>
                        <h3 className={styles.headerTitle}>Chat IA repuestos</h3>
                    </div>
                    <nav>
                        <a href="https://www.kaufmann.cl/" target="_blank" rel="noopener noreferrer" onClick={redirectToGoogle}>
                            <img src={Logo} alt="Logo TooxIA" className={styles.chatLogo} />
                        </a>
                    </nav>
                </div>
            </header>
            <Outlet />
        </div>
    );
};

export default Layout;
