import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component'
import './App.css';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value } )
  }


  render() {

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
      <h1>Monster's Rolodex</h1>
        <SearchBox
          placeholder=' Search...'
          handleChange={this.handleChange}
        // handleChange={e => {
        //   this.setState({ searchField: e.target.value }, () => console.log(this.state))
        // }}
        />

        <CardList monsters={filteredMonsters} />

      </div>
    )
  }

}

// export default App;
