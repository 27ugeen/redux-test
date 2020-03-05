import React from 'react';
import { connect } from 'react-redux';
import timerActions from '../redux/timerActions';
import css from './Timer.module.css';

const Timer = ({ value, onIncrement, onDecrement }) => (
  <div className={css.container}>
    <button type="button" className={css.button} onClick={() => onDecrement(5)}>
      &#8722;
    </button>

    <div className={css.value}>{value} minutes</div>

    <button
      type="button"
      className={css.button}
      onClick={() => onIncrement(10)}
    >
      &#43;
    </button>
  </div>
);

const mapStateToProps = state => ({
  value: state.timerValue,
});

// const mapDispatchToProps = dispatch => ({
//   onIncrement: value => dispatch(timerActions.increment(value)),
//   onDecrement: value => dispatch(timerActions.decrement(value)),
// });

const mapDispatchToProps = {
  onIncrement: timerActions.increment,
  onDecrement: timerActions.decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
