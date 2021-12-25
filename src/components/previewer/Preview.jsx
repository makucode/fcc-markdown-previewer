import React, { useContext } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { MarkdownContext } from "../../contexts/MarkdownContext";
import styles from "../../styles/components/previewer/Preview.module.scss";

const Preview = () => {
    const { markdown } = useContext(MarkdownContext);
    return (
        <div className={styles.Preview}>
            <div id="preview" className={styles.PreviewContent}>
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                        // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
                        em: ({ node, ...props }) => (
                            <i style={{ color: "red" }} {...props} />
                        ),
                    }}
                >
                    {markdown}
                </ReactMarkdown>
            </div>
        </div>
    );
};

export default Preview;
