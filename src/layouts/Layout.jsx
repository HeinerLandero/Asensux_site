import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <a href="#main-content" className="skip-link">Saltar al contenido</a>
            <Header />
            <main id="main-content">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}