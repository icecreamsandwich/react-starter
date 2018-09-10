import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom';
// Styles
import './App.css';

// routes
import routes from './routes';

// common components
import Header from './components/common/Header'
import Footer from './components/common/Footer'

class App extends Component {

  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Header />
            <div className="wrap">
              {routes}
            </div>
            <Footer />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
