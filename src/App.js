
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
  <Routes>
  <Route path="/" element={<SignUp/>}/>
  <Route path="/signin" element={<Login/>}/>
  </Routes>
   
   </BrowserRouter>
  );
}

export default App;
