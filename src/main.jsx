import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <App />
  // <React.StrictMode> <BrowserRouter> <App /> </BrowserRouter> </React.StrictMode>
)
