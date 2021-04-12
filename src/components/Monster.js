import React, { Component } from "react";
import { CardList } from "./card-list/card-list.component";
import { SearchBox } from "./search-box/search-box.component";

class Monster extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchMonster: "",
    };
  }

  searchHandler = (e) => {
    console.log(e.target.value);
    this.setState({
      searchMonster: e.target.value,
    });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((monsters) =>
        this.setState({
          monsters: monsters,
        })
      );
  }

  render() {
    const { monsters, searchMonster } = this.state;
    let searchMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchMonster.toLowerCase());
    });

    return (
      <div>
        <SearchBox
          placeHolder="search monsters"
          searchHandler={this.searchHandler}
        />
        <CardList monsters={searchMonsters} />
      </div>
    );
  }
}
export default Monster;
