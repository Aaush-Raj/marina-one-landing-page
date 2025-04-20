import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Body from "./components/Body";
import { useState } from "react";
import ContactUsModal  from "./components/Modal/ContactUsModal";
import { useEffect } from "react";
import SuccessComponent from "./components/SuccessComponent";
import { useModal } from "./context/ModalContext.jsx";


const App = () => {
  const [isSuccessPage, setIsSuccessPage] = useState(false);
  const { isModalOpen, closeModal } = useModal();


  useEffect(() => {
    // Check the current path when component mounts
    setIsSuccessPage(window.location.pathname === "/thanks_for_reaching_out");
  }, []);

  return (
    <>
      <ContactUsModal isOpen={isModalOpen} onClose={closeModal} />
      <Header />
      {isSuccessPage ? (
        <>
            <Sidebar />
        <SuccessComponent />
        </>
      ) : (
        <>
          <Sidebar />
          <main className="sm:pt-14 sm:pr-80">
            <Body />
          </main>
        </>
      )}
    </>
  );
};


export default App;
