import Header from "./components/Header.jsx";
import Previewer from "./components/Previewer.jsx";
import { MarkdownProvider } from "./contexts/MarkdownContext.js";
import styles from "./styles/views/App.module.scss";

function App() {
    return (
        <MarkdownProvider>
            <div className={styles.App}>
                <Header />
                <Previewer />
            </div>
        </MarkdownProvider>
    );
}

export default App;
