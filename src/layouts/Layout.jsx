import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import AnimatedGrid from "../components/AnimatedGrid/AnimatedGrid";

export default function Layout() {
    return (
        <>
            <a href="#main-content" className="skip-link">Saltar al contenido</a>
            <AnimatedGrid />
            <Header />
            <main id="main-content">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
