import './index.css'
import { Provider } from "@/components/ui/provider.jsx"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './Navbar.jsx'
import App from './App.jsx';
import Footer from './Footer.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <Navbar />
      <App />
      <Footer />
    </Provider>
  </StrictMode>,
)
