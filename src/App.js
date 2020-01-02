import React, {Component} from 'react';
import {CardList} from './components/CardList/CardList'
import {SearchBox} from "./components/SearchBox/SearchBox";
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: '',
        }
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({monsters: users}))
    }

    handleChange = (e) => {
        this.setState({searchField: e.target.value})
    }

    render() {
        const { monsters, searchField } = this.state
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        )

        return (
            <div className="App">

                <SearchBox
                    placeholder='search monsters'
                    onChange={this.handleChange}
                />

                <CardList monsters={filteredMonsters}/>
            </div>
        );
    }
}

export default App;
