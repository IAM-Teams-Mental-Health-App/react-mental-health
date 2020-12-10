import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';

export default function ViewLantern() {
  const { id } = useParams();
  const [lantern, setLantern] = useState({});
  const [loading, setLoading] = useState(true);

  async function getDeats() {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/post/${id}`)
      .then((response) => {
        setLoading(false);
        setLantern(response.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }
  useEffect(() => {
    getDeats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <main>
        <p>LOADING</p>
      </main>
    );
  }

  return (
    <motion.main
      id="lantern__deets"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="animate__animated animate__fadeInDown animate__slow">
        From another soul...
      </h1>
      <div className="view__container animate__animated animate__fadeInUp animate__slow">
        <p>{lantern.content}</p>
      </div>
      <div className="back__button animate__animated animate__fadeIn animate__delay-2s">
        <Link to="/">Home</Link>
      </div>
    </motion.main>
  );
}
