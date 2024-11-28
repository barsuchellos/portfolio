import './App.css'
import Footer from "./lib/footer/Footer.tsx";
import Header from "./lib/header/Header.tsx";
import Main from "./lib/main/Main.tsx";
import LanguageProvider from "./context/language-context/LanguageContext.tsx";




function App() {
    return (
        <>
            <LanguageProvider>
                <Header/>
                <Main/>
                <Footer/>
            </LanguageProvider>
        </>
    )
}

export default App
