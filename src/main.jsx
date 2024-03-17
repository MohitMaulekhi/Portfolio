import {Home,Contact,Project,Resume,Skills,About} from "./pages/index.js"
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import App from './App';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(
    <Router />
)
