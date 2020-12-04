import React from 'react';
import { Link } from 'react-router-dom';

// locals
import { data as lanterns } from '../dummy/data';
import Lantern from '../components/Lantern';

export default function Home() {
  // const [lanterns] = useState([...data]);

  return (
    <main className="home__dashboard">
      <div className="home__ui">
        {/* notice, JS is in curly brackets */}
        <h1>HOME</h1>
        <Link to="/home/create">Create Lantern</Link>
      </div>
      <div className="home__lanterns">
        {lanterns.map((lantern) => (
          <Lantern key={lantern.id} data={lantern} />
        ))}
      </div>
    </main>
  );
}
