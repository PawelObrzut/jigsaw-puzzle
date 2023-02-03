import './App.css';
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css'
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Jigsaw from './pages/Jigsaw';

function App() {

  return (
    <>
      <Header />
      <main className="">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:jigsaw" element={<Jigsaw />}></Route>
        </Routes>
      </main>
    </>
  );  
}

export default App;