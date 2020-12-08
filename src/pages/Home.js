import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// locals
import Lantern from '../components/Lantern';
// import { data as lanterns } from '../dummy/data';

export default function Home() {
  const [lanterns, setLanterns] = useState([]);
  // const [loading, setLoading] = React.useState(true);
  async function getLanterns() {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/post`)
      .then((res) => {
        // setLoading(false);
        console.log(res.data);
        setLanterns(res.data);
        // return null;
      })
      .catch((err) => {
        console.log(err);
        // setLoading(false);
      });
  }
  useEffect(() => {
    getLanterns();
    // axios
    //   .get(`${process.env.REACT_APP_BACKEND_URL}/post`)
    //   .then(({ data }) => {
    //     console.log({ data });
    //     setLanterns([...data]);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setLoading(false);
    //   });
    // .finally(() => {
    //   setLoading(false);
    //   setLanterns([]);
    // });
  }, []);

  if (lanterns.length === 0) {
    return (
      <main>
        <p>LOADING</p>
      </main>
    );
  }

  return (
    <main className="home__dashboard">
      <div className="home__ui">
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
