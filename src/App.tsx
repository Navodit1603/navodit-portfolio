// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import Test from './components/Test';

function App() {

    return (
        <div className="snap-y snap-mandatory overflow-y-scroll h-screen ">
            <div className="snap-always snap-center">
                <Header />
            </div>
            <div className="snap-always snap-center" >
                <Test />
            </div>
            <div className="snap-always snap-center">
                <Header />
            </div>
        </div>
    );
}

export default App
