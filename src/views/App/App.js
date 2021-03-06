import React from 'react';
// import logo from '../assets/images/logo.svg';
import './App.scss';
import '../components/Header/Header.module.scss'
import {BrowserRouter as Router} from 'react-router-dom';

import Header from '../components/Header/Header'
import Footer from '../components/footer/Footer'
import PageRoutes from '../routes/Page-Routes'

class App extends React.Component {
  render() {
    return (
      <Router>
        <header>
          <Header/>
        </header>
        <body>
          <PageRoutes/>
        </body>
        <footer>
          <Footer/>
        </footer>
      </Router>
      );
    }
  }
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
