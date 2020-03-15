import React from 'react';
import logo from './logo.svg';
import Heading from "./components/layout/Heading";
import Content from "./components/layout/Content";
import NewsList from "./components/layout/NewsList";
import './App.css';

function App() {
    return (
        <>
        <div className="App">
        <Heading title="Title from prop" subtitle="Subtitle from prop" />
        </div>
        
        <Content>
        This will be the children prop inside the component.
        </Content>

        <div className="App">
			<NewsList />
		</div>
        </>
    );
}

export default App;