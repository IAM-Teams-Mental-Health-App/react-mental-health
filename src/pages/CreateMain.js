/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import SquareLantern, {
  ReactComponent as SquareLantern2,
} from '../assets/lanterns/square_lantern.svg';
import CircleLantern, {
  ReactComponent as CircleLantern2,
} from '../assets/lanterns/circle_lantern.svg';

export default function CreateMain() {
  const history = useHistory();
  const [btnIndex, setBtnIndex] = useState(1);
  const [formState, setFormState] = useState({
    type: 'circle',
    color: 'black',
    content: '',
  });

  function handleCount(e) {
    e.preventDefault();
    console.log(formState);
    setBtnIndex(btnIndex + 1);
  }

  const handleTextInput = (e) => {
    setFormState({ ...formState, content: e.target.value });
  };

  const handleLanternType = (e) => {
    setFormState({ ...formState, type: e.target.value });
  };

  const handleColorInput = (e) => {
    setFormState({ ...formState, color: e.target.value });
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    console.log('# final state: ', formState);
    document.getElementById('final__sec').classList.add('animate__fadeOut');
    document.getElementById('lantern').classList.add('animate__fadeOutUp');
    setTimeout(() => {
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/post`, formState)
        .then((response) => {
          // console.log(response);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          history.push('/');
        });
      // todo axios post
    }, 1200);
  };

  return (
    <motion.div
      className="create__main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {btnIndex === 1 ? (
        <CreateLanternForm
          btnIndex={btnIndex}
          handleCount={handleCount}
          handleTextInput={handleTextInput}
          val={formState}
        />
      ) : null}
      {btnIndex === 2 ? (
        <ChooseLanternType
          btnIndex={btnIndex}
          handleCount={handleCount}
          handleLanternType={handleLanternType}
          val={formState}
        />
      ) : null}
      {btnIndex === 3 ? (
        <ChooseLanternColor
          btnIndex={btnIndex}
          handleCount={handleCount}
          handleColorInput={handleColorInput}
          val={formState}
        />
      ) : null}
      {btnIndex === 4 ? (
        <SubmitLantern
          btnIndex={btnIndex}
          handleCount={handleCount}
          handleFinalSubmit={handleFinalSubmit}
          val={formState}
        />
      ) : null}
    </motion.div>
  );
}

function CreateLanternForm({ handleCount, handleTextInput, val }) {
  return (
    <motion.div
      className="create__write"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>What's on your mind?</h1>

      <form className="create__main__form">
        <textarea
          id="lantern_body"
          name="lantern_body"
          placeholder="How's your day going?"
          value={val.content}
          onChange={handleTextInput}
        />
      </form>

      <button className="btn--next" type="button" onClick={handleCount}>
        Next
      </button>
    </motion.div>
  );
}

function ChooseLanternType({ handleCount, handleLanternType, val }) {
  return (
    <motion.div
      className="create__write"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Choose Your Lantern Type</h1>

      <div className="lanter__example">
        {val.type === 'circle' ? <CircleLantern2 /> : null}
        {val.type === 'square' ? <SquareLantern2 /> : null}
      </div>

      <form>
        <div className="pickLanternColor">
          <label htmlFor="circle">
            <input
              className="color-btn--red"
              id="circle"
              type="radio"
              name="type"
              value="circle"
              checked={val.type === 'circle'}
              onChange={handleLanternType}
            />
            <span className="color-text">Circle</span>
          </label>
          <label htmlFor="square">
            <input
              className="color-btn--orange"
              id="square"
              type="radio"
              name="type"
              value="square"
              checked={val.type === 'square'}
              onChange={handleLanternType}
            />
            <span className="color-text">Square</span>
          </label>
        </div>
      </form>

      <button className="btn--next" type="button" onClick={handleCount}>
        Next
      </button>
    </motion.div>
  );
}

function ChooseLanternColor({ handleCount, handleColorInput, val }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Choose a Color</h1>
      <div className="lanter__example" style={{ fill: val.color }}>
        {val.type === 'circle' ? <CircleLantern2 /> : null}
        {val.type === 'square' ? <SquareLantern2 /> : null}
      </div>

      <form>
        <div className="pickLanternColor">
          <label htmlFor="red">
            <input
              className="color-btn--red"
              id="red"
              type="radio"
              name="color"
              value="red"
              checked={val.color === 'red'}
              onChange={handleColorInput}
            />
            <span className="color-text">Red</span>
          </label>
          <label htmlFor="orange">
            <input
              className="color-btn--orange"
              id="orange"
              type="radio"
              name="color"
              value="orange"
              checked={val.color === 'orange'}
              onChange={handleColorInput}
            />
            <span className="color-text">Orange</span>
          </label>
          <label htmlFor="yellow">
            <input
              className="color-btn--yellow"
              id="yellow"
              type="radio"
              name="color"
              value="yellow"
              checked={val.color === 'yellow'}
              onChange={handleColorInput}
            />
            <span className="color-text">Yellow</span>
          </label>
          <label htmlFor="purple">
            <input
              className="color-btn--purple"
              id="purple"
              type="radio"
              name="color"
              value="purple"
              checked={val.color === 'purple'}
              onChange={handleColorInput}
            />
            <span className="color-text">Purple</span>
          </label>
          <label htmlFor="green">
            <input
              className="color-btn--green"
              id="green"
              type="radio"
              name="color"
              value="green"
              checked={val.color === 'green'}
              onChange={handleColorInput}
            />
            <span className="color-text">Green</span>
          </label>
        </div>
      </form>

      <button className="btn--next" type="submit" onClick={handleCount}>
        Next
      </button>
    </motion.div>
  );
}

function SubmitLantern({ val, handleFinalSubmit }) {
  return (
    <motion.div
      id="final__sec"
      className="animate__animated"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Submit Your Lantern</h1>
      <div
        id="lantern"
        style={{ fill: val.color }}
        className="animate__animated"
      >
        {val.type === 'circle' ? <CircleLantern2 /> : null}
        {val.type === 'square' ? <SquareLantern2 /> : null}
      </div>
      <button className="btn--next" type="submit" onClick={handleFinalSubmit}>
        Submit
      </button>
    </motion.div>
  );
}
