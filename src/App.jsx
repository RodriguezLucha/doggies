import React from 'react';
import axios from 'axios';
import './App.css';
import Title from './Title';
import {DogList} from './DogList';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dogs : {},
      start: 0,
      end: 5,
      windowSize: 5
    };

    this.sliceDogs = this.sliceDogs.bind(this);
  }

  componentDidMount(){
    axios.get(`${process.env.PUBLIC_URL}/dogs.json`)
      .then(res => {
        const dogs = res.data;
        this.setState({dogs});
      });
  }

  selectDogs() {
    return Object.values(this.state.dogs);
  }
  sliceDogs() {
    return this.selectDogs().slice(this.state.start, this.state.end);
  }

  next(){
    let [start, end] = [this.state.start, this.state.end];
    let counter = 1;
    console.log(`end ${end} < select: ${this.selectDogs().length} && counter  ${counter} < window size: ${this.state.windowSize}`);
    while(end < this.selectDogs().length && counter < this.state.windowSize){
      start += 1;
      end += 1;
      counter += 1;
    }
    console.log(start, end);
    this.setState({start, end});
  }

  previous(){
    let [start, end] = [this.state.start, this.state.end];
    let counter = 1;
    while(start > 0 && counter < this.state.windowSize){
      start -= 1;
      end -= 1;
      counter += 1;
      console.log('in the loop.');
    }
    console.log(start, end);
    this.setState({start, end});
  }
  render(){
    console.log(this.state);
    return (
      <div className="App">
        <Title/>
        <DogList sliceDogs={this.sliceDogs}></DogList>
        <div>
          <button onClick={() => this.previous()}>Previous</button>
          <button onClick={() => this.next()}>Next</button>
        </div>
      </div>
    );
  }
}

export default App;
