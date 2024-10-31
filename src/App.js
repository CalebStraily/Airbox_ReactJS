import React from 'react'
import "./style.css"
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function App() 
{
    return(
        <div className="container-fluid">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

export default App;