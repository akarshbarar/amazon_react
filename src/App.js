import './App.css';
import Header from './Pages/HeaderOne/Header';
import HeaderTwo from './Pages/HeaderTwo/HeaderTwo'
import Body from './Pages/Body/Body'
import Links from './Pages/Links/Links'
import Footer from './Pages/Footer/Footer'
// Might Need later
import { useEffect } from 'react';
function App() {

  // Way to change title on the go 
 useEffect(() => {
   document.title = 'Amazon.com'
 }, [])

  return (
    <div className="App">
      {/* Header 1*/}
      <Header/>
      {/* HEADER 2 */}
      <HeaderTwo/>
      {/* Body */}
      <Body/>
      {/* Links */}
      <Links/>
      {/* Footer */}
      <Footer/>
      <h1>Hello World!</h1> 
    </div>
  );
}

export default App;
