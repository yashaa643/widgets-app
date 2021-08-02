import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
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

    const [selected, setSelected] = useState(options[0]);

    return (
        <>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/dropdown">Dropdown</Link>
                            </li>
                            <li>
                                <Link to="/search">Search</Link>
                            </li>
                            <li>
                                <Link to="/translate">Translate</Link>
                            </li>
                        </ul>
                    </nav>

                    <div className='ui container'>
                    <Switch>
                        <Route path="/dropdown">
                            <div>
                              <Dropdown
                                label="Select a Color"
                                options={options}
                                selected={selected}
                                onSelectedChange={setSelected}
                            />  

                            <p style={{color: selected.value}}> The Selected Color is {selected.label}</p>
                            </div>
                            
                        </Route>
                        <Route path="/search">
                            <Search />
                        </Route>
                        <Route path="/translate">
                            <Translate />
                        </Route>
                        <Route path="/">
                            <Accordion items={items} />
                        </Route>
                    </Switch>
                    </div>
                </div>
            </Router>
        </>
    )
};

export default App;