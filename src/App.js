import React from 'react';

import Search from './components/Search';

const items = [
    {
        title: "What is React",
        content: 'React is a front end javascript frameword'
    },
    {
        title: "Why REact",
        content: "React is powerful and fast"
    },
    {
        title: "How to use React",
        content: "We use react by creating componenets"
    }
]
class App extends React.Component{
    render(){
        return (
            <div className = "ui container">
               {/* <Accordion items={items}/> */}
               <Search />
            </div>
        )
    }
}

export default App;