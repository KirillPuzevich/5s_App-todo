import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./styles.scss";
import { Header } from "../header/Header";
import { TaskList } from "../taskList/taskList";
import { Footer } from "../footer/Footer";
import { ContactForm } from "../contartForm/ContactForm";
import { HomePage } from "../homePage/HomePage";

const AppContent = () => {
  const location = useLocation();

  const isContactPage = location.pathname === "/contacts";

  return (
    <>
      <Header />
      <main className={isContactPage ? "centered" : ""}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/contacts" element={<ContactForm />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export const App = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);

