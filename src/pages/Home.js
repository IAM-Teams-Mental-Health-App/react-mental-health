import React from 'react';
import { Link } from 'react-router-dom';

// locals
import Lantern from '../components/Lantern';
import { data as lanterns } from '../dummy/data';

export default function Home() {
  // const [lanterns,setLanterns] = React.useState([]);
  // const [loading, setLoading] = React.useState(true);

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
