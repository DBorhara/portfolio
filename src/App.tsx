import "./App.css";
import AppRouter from "./AppRouter";
import NavBar from "./components/Nav/NavBar";
import ThemeProvider from "@/components/ThemeProvider";
import { Toaster } from "./components/ui/toaster";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col">
        <NavBar />
        <AppRouter />
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
