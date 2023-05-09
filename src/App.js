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
  const homeRef = useRef();
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);
  const resumeRef = useRef(null);

  const [currentPage, setCurrentPage] = useState("About");
  const handlePageChange = (page) => setCurrentPage(page);
  const executeScroll = (elementRef) => {
    // window.scrollTo({
    //   top: elementRef.current,
    //   behavior: "smooth",
    // });
    elementRef.current.scrollIntoView({ behavior: "smooth" });
    setCurrentPage(elementRef);
    console.log(currentPage);
  };

  return (
    <div className="App" ref={homeRef}>
      <div className="Hero-Bkgrnd">
        <Header
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          executeScroll={executeScroll}
          about={aboutRef}
          work={workRef}
          home={homeRef}
          contact={contactRef}
          resume={resumeRef}
        />
        <About about={aboutRef} />
      </div>
      <MyWork work={workRef} />
      <ContactMe contact={contactRef} />
      <Resume resume={resumeRef} />
      <Footer />
    </div>
  );
}

export default App;
