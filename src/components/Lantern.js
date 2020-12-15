/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';

import SquareLantern, {
  ReactComponent as SquareLantern2,
} from '../assets/lanterns/square_lantern.svg';
import CircleLantern, {
  ReactComponent as CircleLantern2,
} from '../assets/lanterns/circle_lantern.svg';

import attachFly from '../hooks/attachFly';

export default function Lantern({ data }) {
  const history = useHistory();

  return (
    <button
      type="button"
      className={`lantern__main animate__animated animate__fadeInUp
        ${data.id % 2 === 0 ? 'animate__slow' : 'animate__slower'}`}
      aria-label={`lantern-${data.type}-${data.id}`}
      onClick={() => {
        attachFly();
        // wait for 1.9s before pushing to deets
        setTimeout(() => {
          history.push(`/view/${data.id}`);
        }, 1900);
      }}
    >
      <div
        className={`lantern__example animate__animated animate__infinite animate__swing ${
          data.id % 2 === 0 ? 'animate__slower' : 'animate__slow'
        }`}
        style={{ fill: data.color }}
      >
        {data.type === 'circle' ? <CircleLantern2 /> : null}
        {data.type === 'square' ? <SquareLantern2 /> : null}
      </div>
    </button>
  );
}
