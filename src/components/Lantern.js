/* eslint-disable react/prop-types */
import React from 'react';

// local imports
import { Link } from 'react-router-dom';
import circle1 from '../assets/lanterns/circle_lantern.jpg';
import circle2 from '../assets/lanterns/circle2_lantern.jpg';
import square from '../assets/lanterns/square_lantern.jpg';

export default function Lantern({ data }) {
  let lanternImg;

  switch (data.type) {
    case 'circle':
      lanternImg = circle1;
      break;
    case 'square':
      lanternImg = square;
      break;
    case 'circle2':
      lanternImg = circle2;
      break;
    default:
      lanternImg = circle1;
      return;
  }

  console.log(data);

  return (
    <>
      <Link
        to={`/view/${data.id}`}
        className="lantern__main animate__animated animate__fadeInUp animate__slower"
      >
        <img src={lanternImg} alt="user lantern" />
      </Link>
    </>
  );
}
