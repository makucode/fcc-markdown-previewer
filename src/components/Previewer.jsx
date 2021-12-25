import React from "react";
import styles from "../styles/components/Previewer.module.scss";
import Editor from "./previewer/Editor";
import Preview from "./previewer/Preview";

const Previewer = () => {
    return (
        <main className={styles.Previewer}>
            <Editor />
            <Preview />
        </main>
    );
};

export default Previewer;
