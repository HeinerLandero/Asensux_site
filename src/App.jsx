import './styles/main.scss';
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <>
      <ScrollToTop />
      <AppRouter />
    </>
  );
}

export default App;