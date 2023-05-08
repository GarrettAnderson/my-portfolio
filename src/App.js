import logo from "./logo.svg";
import { useState, useRef } from "react";
import "./App.css";
import Header from "./components/HeaderNav";
import About from "./components/pages/About";
import MyWork from "./components/pages/MyWork";
import ContactMe from "./components/pages/ContactMe";
import Resume from "./components/pages/Resume";
import Footer from "./components/Footer";

function App() {
  const myRef = useRef(null);
  const [currentPage, setCurrentPage] = useState("About");
  const handlePageChange = (page) => setCurrentPage(page);
  const executeScroll = () => myRef.current.scrollIntoView();

  return (
    <div className="App">
      <Header
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        executeScroll={executeScroll}
        myRef={myRef}
      />
      <About myRef={myRef} />
      <MyWork />
      <ContactMe />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
