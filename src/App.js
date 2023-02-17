import Movies from "./components/Movies";
import MoviesProvider from "./context/MoviesProvider";
import "./styles.css";

export default function App() {
  return (
    <MoviesProvider>
      <Movies />
    </MoviesProvider>
  );
}
