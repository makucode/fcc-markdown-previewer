import { createContext, useState } from "react";

export const MarkdownContext = createContext();

export const MarkdownProvider = ({ children }) => {
    const [markdown, setMarkdown] = useState(
        "# Enter your markdown here!\n\n## Here's a sub-heading\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n> This is a blockquote\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n2. Use just 1s if you want!\n3. And last but not least, let's not frog-et embedded images:\n\n![A Frog!](https://cdn.pixabay.com/photo/2014/10/05/11/26/tree-frog-474949__340.jpg)\n\n**Developed by [makucode](https://github.com/makucode) for [freeCodeCamp](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer)**\n\n**This app uses [react-markdown](https://github.com/remarkjs/react-markdown)**"
    );

    return (
        <MarkdownContext.Provider value={{ markdown, setMarkdown }}>
            {children}
        </MarkdownContext.Provider>
    );
};
