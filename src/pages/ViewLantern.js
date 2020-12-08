import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import { data } from '../dummy/data';

export default function ViewLantern() {
  const { id } = useParams();
  // const [lantern, setLantern] = useState({ type: '', content: '', id });
  const [lantern, setLantern] = useState({});
  const [loading, setLoading] = useState(true);
  // const lantern = data.filter((lant) => lant.id === parseInt(id))[0];
  // console.log(lantern);

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
    <div>
      <h1>From another soul...</h1>
      <main className="view__container animate__animated animate__fadeInUp">
        {/* <h1>Viewing a Lantern: {lantern.id}</h1> */}
        <p>{lantern.content}</p>
        {/* <p>{JSON.stringify(lantern.replies, null, 2)}</p> */}
      </main>
    </div>
  );
}
