import React from "react";
import styles from "../styles/components/Header.module.scss";

const Header = () => {
    return (
        <header className={styles.Header}>
            <h1>Markdown Previewer</h1>
        </header>
    );
};

export default Header;
