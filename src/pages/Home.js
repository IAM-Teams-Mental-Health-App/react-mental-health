import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// locals
import Lantern from '../components/Lantern';

export default function Home() {
  const [lanterns, setLanterns] = useState([]);
  async function getLanterns() {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/post`)
      .then((res) => {
        console.log(res.data);
        setLanterns(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getLanterns();
  }, []);

  if (lanterns.length === 0) {
    return (
      <main className=" animate__animated animate__fadeIn">
        <p>LOADING</p>
      </main>
    );
  }

  return (
    <main className="home__dashboard">
      <div className="home__ui animate__animated animate__fadeIn animate__slow">
        <Link to="/create">Create Lantern</Link>
      </div>
      <div className="home__lanterns">
        {lanterns.map((lantern) => (
          <Lantern key={lantern.id} data={lantern} />
        ))}
      </div>
    </main>
  );
}
