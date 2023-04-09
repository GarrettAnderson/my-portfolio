import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Header from "./components/HeaderNav";
import About from "./components/pages/About";
import MyWork from "./components/pages/MyWork";
import ContactMe from "./components/pages/ContactMe";
import Resume from "./components/pages/Resume";
import Footer from "./components/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "MyWork") {
      return <MyWork />;
    }
    if (currentPage === "ContactMe") {
      return <ContactMe />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="App">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
