import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <HelmetProvider>
      <ScrollToTop />
      <AppRouter />
    </HelmetProvider>
  );
}

export default App;