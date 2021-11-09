import React from 'react';
import AppTask2 from './components/AppTask2';
import AppTask1 from './components/AppTask1';
import Header from './components/Header';
import Footor from './components/Footor';


function App() {
    return(
        <div>
            <Header />
            <AppTask1 />
            <AppTask2 />
            <Footor />
        </div>
    );
}

export default App;