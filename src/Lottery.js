import React, {Component} from 'react';
import './lottery.css';
import Ball from './Ball';

class Lottery extends Component {

    static defaultProps = {
        title: 'Lotto',
        maxBalls: 6,
        maxNum: 40
    }

    constructor(props){
        super(props);
        this.state = {nums: Array.from({length: this.props.maxBalls})};
    }

    generate = () => {
      this.setState(curstate => ({
          nums: curstate.nums.map(num => Math.floor(Math.random() * this.props.maxNum) + 1)
      }));
    } 

    handleClick = () => {
       this.generate();
    }

    render(){
        return (
            <section className="lottery">
              <h1 className="title">{this.props.title}</h1>
              <div>
                  {this.state.nums.map(num => (
                      <Ball value={num}/>
                  ))}
              </div>
              <button className="btn" onClick={this.handleClick}>Generate</button>
            </section>
        )
    }
}

export default Lottery;