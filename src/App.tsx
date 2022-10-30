import "./App.css";
import CodeSection from "./components/CodeSection";
import ControlSection from "./components/ControlSection";
import Demo from "./components/ColorSelector";
import ExampleSection from "./components/ExampleSection";
import TitleBar from "./components/TitleBar";
import { GlobalContextProvider } from "./context/GlobalContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <GlobalContextProvider>
      <div>
        <nav className="border-b border-solid border-gray">
          <TitleBar />
        </nav>
        <section className="xl:max-w-screen lg:w-5/6 lg:mx-auto p-4 lg:flex w-full gap-4 h-[85vh] ">
          <ControlSection />
          <ExampleSection />
          <CodeSection />
        </section>

        <ToastContainer autoClose={1500} />
        <p className="text-center text-gray ">
          Made by{" "}
          <a href="http://" className="text-blue hover:text-blue_dark">
            @suhaasya
          </a>{" "}
          inspired from{" "}
          <a
            href="https://codepen.io/stephenpaton-tech/full/JjRvGmY"
            className="hover:text-blue"
          >
            link
          </a>
        </p>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
