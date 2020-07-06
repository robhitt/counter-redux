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
  cursor: pointer;
  margin: .2rem .2rem .5rem;
  padding: 0.25rem 1rem;

  :hover {
    background-color: #fff2f6;
    color: #ca245a;
  }
`;

const Counter = styled.div`
  background: #fff;
  border-radius: 3px;
  border: 2px solid #fd9696;
  color: #fd9696;
  margin: 0 .2rem;
  padding: 0.25rem 1rem;
  width: 9.4rem;
`;

const mapStateToProps = state => ({ counter: state.counter });

export default connect(
  mapStateToProps,
  { increaseCounter, decreaseCounter }
  )(Counters);