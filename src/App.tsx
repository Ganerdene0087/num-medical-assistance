import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/containers/homePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" Component={HomePage} />
        {/* Optionally, you can add a catch-all route */}
        {/* <Route render={() => <div>404 Not Found</div>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
