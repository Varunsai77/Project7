import logo from './logo.svg';
import './App.css';
import { Main } from './parts/main/main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoPag } from './parts/gopag/gopag';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/man" element={<Main />} />
          <Route path="/go" element={<GoPag />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;