import React, { useState } from 'react';

import Translate from './components/Translate';

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

const options = [
    {
        label: "The Color Red",
        value: "red"
    },
    {
        label: "The Color Green",
        value: "green"
    },
    {
        label: "A shade of blue",
        value: "blue"
    }
];
const App = () => {

    const [selected,setSelected] = useState(options[0]);

        return (
            <div className = "ui container">
               {/* <Accordion items={items}/> */}
               {/* <Search /> */}
               {/* <Dropdown
               label = "Select a Color"
               selected = {selected}
               onSelectedChange = {setSelected}
               options={options} />
               <div style = {{color : selected.value}}>
                     Your Selected Color is {selected.value}
                </div> */}
                <Translate />
            </div>
        )
};

export default App;