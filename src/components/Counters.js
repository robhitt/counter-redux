import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { increaseCounter, decreaseCounter } from '../actions';

class Counters extends React.Component {
  render() {
    return (
      <>
        <Button onClick={this.props.increaseCounter}>Increase</Button>
        <Button onClick={this.props.decreaseCounter}>Decrease</Button>
        <Counter className="counter">Counter: {this.props.counter}</Counter>
      </>
    );
  }
}

const Button = styled.button`
  background: transparent;
  border-radius: 5px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: .2rem .2rem .5rem;
  padding: 0.25rem 1rem;
`;

const Counter = styled.div`
  background: transparent;
  border-radius: 5px;
  border: 2px solid purple;
  color: purple;
  margin: 0 .2rem;
  padding: 0.25rem 1rem;
  width: 9.4rem;
`;

const mapStateToProps = state => {
  console.log(state);
  return { counter: state.counter }
}

export default connect(
  mapStateToProps,
  { increaseCounter, decreaseCounter }
  )(Counters);