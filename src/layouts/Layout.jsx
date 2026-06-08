import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import AnimatedGrid from "../components/AnimatedGrid/AnimatedGrid";
import Spotlight from "../components/Spotlight/Spotlight";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import OrganizationSchema from "../components/SEO/OrganizationSchema";

export default function Layout() {
    return (
        <>
            <OrganizationSchema />
            <a href="#main-content" className="skip-link">Saltar al contenido</a>
            <ProgressBar />
            <AnimatedGrid />
            <Spotlight />
            <Header />
            <main id="main-content">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
