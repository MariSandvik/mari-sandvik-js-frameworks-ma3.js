import React from 'react';
import logo from './logo.svg';
import Heading from "./components/layout/Heading";
import Content from "./components/layout/Content";
import Tripple from "./components/layout/Tripple";
import './App.css';

function App() {
    return (
        <div className="App">
        <Heading title="Title from prop" subtitle="Subtitle from prop" />
        
        
        <Content>
        This will be the children prop inside the component.
        </Content>
        
        <Tripple number={3} multiply={true} />
        
        </div>
    );
}

export default App;