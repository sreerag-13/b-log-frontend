
import './App.css';
import CreatePost from './components/CreatePost';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewAll from './components/ViewAll';
import ViewMy from './components/ViewMy';

function App() {
  return (
   <BrowserRouter>
  <Routes>
  <Route path="/" element={<SignUp/>}/>
  <Route path="/signin" element={<Login/>}/>
  <Route path="/CreatePost" element={<CreatePost/>}/>
  <Route path="/viewall" element={<ViewAll/>}/>
  <Route path="/ViewMy" element={<ViewMy/>}/>



  </Routes>
   
   </BrowserRouter>
  );
}

export default App;
