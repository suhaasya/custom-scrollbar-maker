import "./App.css";
import CodeSection from "./components/CodeSection";
import ControlSection from "./components/ControlSection";
import Demo from "./components/ColorSelector";
import ExampleSection from "./components/ExampleSection";
import TitleBar from "./components/TitleBar";
import { GlobalContextProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalContextProvider>
      <div>
        <nav>
          <TitleBar />
        </nav>
        <section className="xl:max-w-screen lg:w-5/6 lg:mx-auto p-4 lg:flex w-full gap-4 h-[85vh] ">
          <ControlSection />
          <ExampleSection />
          <CodeSection />
          {/* <Demo /> */}
        </section>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
