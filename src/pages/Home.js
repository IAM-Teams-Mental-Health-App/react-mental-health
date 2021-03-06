import axios from 'axios';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
// locals
import Lantern from '../components/Lantern';

export default function Home() {
  const [lanterns, setLanterns] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getLanterns() {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/post`)
      .then((res) => {
        // console.log(res.data);
        setLanterns(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }
  useEffect(() => {
    getLanterns();
  }, []);

  if (loading) {
    return (
      <motion.main
        className=" animate__animated"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <p>LOADING...</p>
      </motion.main>
    );
  }

  return (
    <motion.main
      className="home__dashboard"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="home__lanterns">
        {lanterns.map((lantern) => (
          <Lantern key={lantern.id} data={lantern} />
        ))}
      </div>
    </motion.main>
  );
}
