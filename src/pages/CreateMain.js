/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';

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
    console.log('Type changed to: ', e.target.value);
    setFormState({ ...formState, type: e.target.value });
  };

  const handleColorInput = (e) => {
    console.log('# color changed to: ', e.target.value);
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
          val={formState.content}
        />
      ) : null}
      {btnIndex === 2 ? (
        <ChooseLanternType
          btnIndex={btnIndex}
          handleCount={handleCount}
          handleLanternType={handleLanternType}
          val={formState.type}
        />
      ) : null}
      {btnIndex === 3 ? (
        <ChooseLanternColor
          btnIndex={btnIndex}
          handleCount={handleCount}
          handleColorInput={handleColorInput}
          val={formState.color}
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
          value={val}
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
        <svg className="lantern" viewBox="0 0 100 105">
          <path d="M40.6186523,67.6130981v6.3546753c0,0.3413086,0.1738281,0.6586914,0.4614258,0.8427734  C41.2891235,74.9437256,43.2112427,76.0576172,49,76.1752319v3.0151978  c-1.0697632,0.1992188-2.0554199,0.7112427-2.8408203,1.5014648c-2.1137695,2.1254883-2.1137695,5.5834961,0,7.7089844  c1.0253906,1.03125,2.3896484,1.5996094,3.8408203,1.5996094s2.8154297-0.5683594,3.8408203-1.5996094  c2.1137695-2.1254883,2.1137695-5.5834961,0-7.7089844C53.0554199,79.9016113,52.0697632,79.3897095,51,79.1904297v-3.0151978  c5.7887573-0.1176147,7.7108765-1.2315063,7.9199219-1.3646851c0.2875977-0.184082,0.4614258-0.5014648,0.4614258-0.8427734  v-6.3546753c10.3793335-3.406311,17.8007812-12.2945557,17.8007812-22.6965942  c0-9.8156128-6.6115723-18.2778931-16.0776367-22.0635986v-5.3050537c0-1.6347656-1.3251953-2.9648438-2.9541016-2.9648438H51  v-3.5834961c0-0.5522461-0.4477539-1-1-1s-1,0.4477539-1,1v3.5834961h-7.1503906  c-1.6289062,0-2.9541016,1.3300781-2.9541016,2.9648438v5.3050537  c-9.4660645,3.7857056-16.0776367,12.2479858-16.0776367,22.0635986  C22.8178711,55.3185425,30.2393188,64.2067871,40.6186523,67.6130981z M52.4228516,86.9907227  c-1.2949219,1.3017578-3.5507812,1.3017578-4.8457031,0c-1.340332-1.3476562-1.340332-3.5410156,0-4.8886719  C48.2246094,81.4506836,49.0849609,81.0922852,50,81.0922852s1.7753906,0.3583984,2.4228516,1.0097656  C53.7631836,83.449707,53.7631836,85.6430664,52.4228516,86.9907227z M57.3813477,73.3149414  C56.5048828,73.6259766,54.3232422,74.1870117,50,74.1870117c-4.3349609,0-6.5166016-0.5639648-7.3813477-0.8701172v-5.1318359  C44.9675903,68.7756958,47.4414673,69.0986328,50,69.0986328s5.0324097-0.322937,7.3813477-0.9135742V73.3149414z M51,66.9613037  V22.8604736c6.9541626,0.8446045,12.4560547,10.4083252,12.4560547,22.0506592S57.9541626,66.1166992,51,66.9613037z M49,22.8604736  v44.1008301c-6.9541626-0.8446045-12.4560547-10.4078369-12.4560547-22.0501709S42.0458374,23.7050781,49,22.8604736z   M75.1821289,44.9165039c0,9.9853516-7.5301514,18.447998-17.8499146,21.2202759  c4.833313-4.081665,8.1238403-12.0649414,8.1238403-21.225647c0-9.1483154-3.2811279-17.1229248-8.1033936-21.2097778  C67.6619263,26.479248,75.1821289,34.9376831,75.1821289,44.9165039z M40.8955078,17.5478516  c0-0.5322266,0.4282227-0.9648438,0.9541016-0.9648438h16.3007812c0.5258789,0,0.9541016,0.4326172,0.9541016,0.9648438v4.5863037  C56.2562866,21.2305908,53.192627,20.734375,50,20.734375s-6.2562866,0.4962158-9.1044922,1.3997803V17.5478516z   M42.6473389,23.701355c-4.8222656,4.086853-8.1033936,12.0614624-8.1033936,21.2097778  c0,9.1607056,3.2905273,17.1439819,8.1238403,21.225647C32.3480225,63.364502,24.8178711,54.9018555,24.8178711,44.9165039  C24.8178711,34.9376831,32.3380737,26.479248,42.6473389,23.701355z" />
        </svg>
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
              checked={val === 'circle'}
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
              checked={val === 'square'}
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
      <div className="lanter__example" style={{ fill: val }}>
        <svg className="lantern" viewBox="0 0 100 105">
          <path d="M40.6186523,67.6130981v6.3546753c0,0.3413086,0.1738281,0.6586914,0.4614258,0.8427734  C41.2891235,74.9437256,43.2112427,76.0576172,49,76.1752319v3.0151978  c-1.0697632,0.1992188-2.0554199,0.7112427-2.8408203,1.5014648c-2.1137695,2.1254883-2.1137695,5.5834961,0,7.7089844  c1.0253906,1.03125,2.3896484,1.5996094,3.8408203,1.5996094s2.8154297-0.5683594,3.8408203-1.5996094  c2.1137695-2.1254883,2.1137695-5.5834961,0-7.7089844C53.0554199,79.9016113,52.0697632,79.3897095,51,79.1904297v-3.0151978  c5.7887573-0.1176147,7.7108765-1.2315063,7.9199219-1.3646851c0.2875977-0.184082,0.4614258-0.5014648,0.4614258-0.8427734  v-6.3546753c10.3793335-3.406311,17.8007812-12.2945557,17.8007812-22.6965942  c0-9.8156128-6.6115723-18.2778931-16.0776367-22.0635986v-5.3050537c0-1.6347656-1.3251953-2.9648438-2.9541016-2.9648438H51  v-3.5834961c0-0.5522461-0.4477539-1-1-1s-1,0.4477539-1,1v3.5834961h-7.1503906  c-1.6289062,0-2.9541016,1.3300781-2.9541016,2.9648438v5.3050537  c-9.4660645,3.7857056-16.0776367,12.2479858-16.0776367,22.0635986  C22.8178711,55.3185425,30.2393188,64.2067871,40.6186523,67.6130981z M52.4228516,86.9907227  c-1.2949219,1.3017578-3.5507812,1.3017578-4.8457031,0c-1.340332-1.3476562-1.340332-3.5410156,0-4.8886719  C48.2246094,81.4506836,49.0849609,81.0922852,50,81.0922852s1.7753906,0.3583984,2.4228516,1.0097656  C53.7631836,83.449707,53.7631836,85.6430664,52.4228516,86.9907227z M57.3813477,73.3149414  C56.5048828,73.6259766,54.3232422,74.1870117,50,74.1870117c-4.3349609,0-6.5166016-0.5639648-7.3813477-0.8701172v-5.1318359  C44.9675903,68.7756958,47.4414673,69.0986328,50,69.0986328s5.0324097-0.322937,7.3813477-0.9135742V73.3149414z M51,66.9613037  V22.8604736c6.9541626,0.8446045,12.4560547,10.4083252,12.4560547,22.0506592S57.9541626,66.1166992,51,66.9613037z M49,22.8604736  v44.1008301c-6.9541626-0.8446045-12.4560547-10.4078369-12.4560547-22.0501709S42.0458374,23.7050781,49,22.8604736z   M75.1821289,44.9165039c0,9.9853516-7.5301514,18.447998-17.8499146,21.2202759  c4.833313-4.081665,8.1238403-12.0649414,8.1238403-21.225647c0-9.1483154-3.2811279-17.1229248-8.1033936-21.2097778  C67.6619263,26.479248,75.1821289,34.9376831,75.1821289,44.9165039z M40.8955078,17.5478516  c0-0.5322266,0.4282227-0.9648438,0.9541016-0.9648438h16.3007812c0.5258789,0,0.9541016,0.4326172,0.9541016,0.9648438v4.5863037  C56.2562866,21.2305908,53.192627,20.734375,50,20.734375s-6.2562866,0.4962158-9.1044922,1.3997803V17.5478516z   M42.6473389,23.701355c-4.8222656,4.086853-8.1033936,12.0614624-8.1033936,21.2097778  c0,9.1607056,3.2905273,17.1439819,8.1238403,21.225647C32.3480225,63.364502,24.8178711,54.9018555,24.8178711,44.9165039  C24.8178711,34.9376831,32.3380737,26.479248,42.6473389,23.701355z" />
        </svg>
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
              checked={val === 'red'}
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
              checked={val === 'orange'}
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
              checked={val === 'yellow'}
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
              checked={val === 'purple'}
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
              checked={val === 'green'}
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
        <svg className="lantern" viewBox="0 0 100 105">
          <path d="M40.6186523,67.6130981v6.3546753c0,0.3413086,0.1738281,0.6586914,0.4614258,0.8427734  C41.2891235,74.9437256,43.2112427,76.0576172,49,76.1752319v3.0151978  c-1.0697632,0.1992188-2.0554199,0.7112427-2.8408203,1.5014648c-2.1137695,2.1254883-2.1137695,5.5834961,0,7.7089844  c1.0253906,1.03125,2.3896484,1.5996094,3.8408203,1.5996094s2.8154297-0.5683594,3.8408203-1.5996094  c2.1137695-2.1254883,2.1137695-5.5834961,0-7.7089844C53.0554199,79.9016113,52.0697632,79.3897095,51,79.1904297v-3.0151978  c5.7887573-0.1176147,7.7108765-1.2315063,7.9199219-1.3646851c0.2875977-0.184082,0.4614258-0.5014648,0.4614258-0.8427734  v-6.3546753c10.3793335-3.406311,17.8007812-12.2945557,17.8007812-22.6965942  c0-9.8156128-6.6115723-18.2778931-16.0776367-22.0635986v-5.3050537c0-1.6347656-1.3251953-2.9648438-2.9541016-2.9648438H51  v-3.5834961c0-0.5522461-0.4477539-1-1-1s-1,0.4477539-1,1v3.5834961h-7.1503906  c-1.6289062,0-2.9541016,1.3300781-2.9541016,2.9648438v5.3050537  c-9.4660645,3.7857056-16.0776367,12.2479858-16.0776367,22.0635986  C22.8178711,55.3185425,30.2393188,64.2067871,40.6186523,67.6130981z M52.4228516,86.9907227  c-1.2949219,1.3017578-3.5507812,1.3017578-4.8457031,0c-1.340332-1.3476562-1.340332-3.5410156,0-4.8886719  C48.2246094,81.4506836,49.0849609,81.0922852,50,81.0922852s1.7753906,0.3583984,2.4228516,1.0097656  C53.7631836,83.449707,53.7631836,85.6430664,52.4228516,86.9907227z M57.3813477,73.3149414  C56.5048828,73.6259766,54.3232422,74.1870117,50,74.1870117c-4.3349609,0-6.5166016-0.5639648-7.3813477-0.8701172v-5.1318359  C44.9675903,68.7756958,47.4414673,69.0986328,50,69.0986328s5.0324097-0.322937,7.3813477-0.9135742V73.3149414z M51,66.9613037  V22.8604736c6.9541626,0.8446045,12.4560547,10.4083252,12.4560547,22.0506592S57.9541626,66.1166992,51,66.9613037z M49,22.8604736  v44.1008301c-6.9541626-0.8446045-12.4560547-10.4078369-12.4560547-22.0501709S42.0458374,23.7050781,49,22.8604736z   M75.1821289,44.9165039c0,9.9853516-7.5301514,18.447998-17.8499146,21.2202759  c4.833313-4.081665,8.1238403-12.0649414,8.1238403-21.225647c0-9.1483154-3.2811279-17.1229248-8.1033936-21.2097778  C67.6619263,26.479248,75.1821289,34.9376831,75.1821289,44.9165039z M40.8955078,17.5478516  c0-0.5322266,0.4282227-0.9648438,0.9541016-0.9648438h16.3007812c0.5258789,0,0.9541016,0.4326172,0.9541016,0.9648438v4.5863037  C56.2562866,21.2305908,53.192627,20.734375,50,20.734375s-6.2562866,0.4962158-9.1044922,1.3997803V17.5478516z   M42.6473389,23.701355c-4.8222656,4.086853-8.1033936,12.0614624-8.1033936,21.2097778  c0,9.1607056,3.2905273,17.1439819,8.1238403,21.225647C32.3480225,63.364502,24.8178711,54.9018555,24.8178711,44.9165039  C24.8178711,34.9376831,32.3380737,26.479248,42.6473389,23.701355z" />
        </svg>
      </div>
      <button className="btn--next" type="submit" onClick={handleFinalSubmit}>
        Submit
      </button>
    </motion.div>
  );
}
