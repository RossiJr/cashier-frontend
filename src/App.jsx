import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import Products from './components/Products/Products';

import styles from './App.module.css'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const openSideBar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  console.log("Element loading");
  return (
    <Router>
    <div className={styles.gridContainer}>
      <Header openSideBar={openSideBar}/>
      <Sidebar openSideBar={openSideBar} openSidebarToggle={openSidebarToggle} />
      <main className={styles.mainContent}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            {/* Add other routes here */}
          </Routes>
        </main>
    </div>
    </Router>
    // <div className={styles.gridContainer}>
    //   <Header openSideBar={openSideBar} />
    //   <Sidebar openSideBar={openSideBar} openSidebarToggle={openSidebarToggle} />
    //     <Home />
    // </div>
  )
}

export default App
