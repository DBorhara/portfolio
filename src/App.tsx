import "./App.css";
import AppRouter from "./AppRouter";
import NavBar from "./components/Nav/NavBar";
import ThemeProvider from "@/components/ThemeProvider";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="hidden flex-col md:flex">
        <NavBar />
        <AppRouter />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
