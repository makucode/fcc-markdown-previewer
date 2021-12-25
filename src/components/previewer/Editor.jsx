import React, { useContext } from "react";
import { MarkdownContext } from "../../contexts/MarkdownContext";
import styles from "../../styles/components/previewer/Editor.module.scss";

const Editor = () => {
    const { markdown, setMarkdown } = useContext(MarkdownContext);

    return (
        <div className={styles.Editor}>
            <textarea
                id="editor"
                className={styles.EditorInput}
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
                selected
            />
        </div>
    );
};

export default Editor;
