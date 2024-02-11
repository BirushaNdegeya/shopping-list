import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './components/Counter';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.css';


const App = () => {
  return (
    <React.Fragment>
      <Home />
    </React.Fragment>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
