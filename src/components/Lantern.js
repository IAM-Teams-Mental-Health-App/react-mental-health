/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// local imports
import circle1 from '../assets/lanterns/circle_lantern.jpg';
import circle2 from '../assets/lanterns/circle2_lantern.jpg';
import square from '../assets/lanterns/square_lantern.jpg';
import attachFly from '../hooks/attachFly';

export default function Lantern({ data }) {
  const [imgDimensions, setImgDimensions] = useState([210, 337]);

  const history = useHistory();
  let lanternImg;

  switch (data.type) {
    case 'circle':
      lanternImg = circle1;
      setImgDimensions([210, 337]);
      break;
    case 'square':
      lanternImg = square;
      setImgDimensions([210, 429]);
      break;
    case 'circle2':
      lanternImg = circle2;
      setImgDimensions([210, 249]);
      break;
    default:
      lanternImg = circle1;
      setImgDimensions([210, 337]);
      return;
  }

  return (
    <button
      type="button"
      className="lantern__main animate__animated animate__fadeInUp animate__slower"
      onClick={() => {
        attachFly();
        // wait for 1.9s before pushing to deets
        setTimeout(() => {
          history.push(`/view/${data.id}`);
        }, 1900);
      }}
    >
      <img
        src={lanternImg}
        alt="view lantern details"
        width={imgDimensions[0]}
        height={imgDimensions[1]}
      />
    </button>
  );
}
