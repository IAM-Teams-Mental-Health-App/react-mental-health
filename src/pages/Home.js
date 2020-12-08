/* eslint-disable no-nested-ternary */
import React from 'react';
import { Link } from 'react-router-dom';
// locals
import Lantern from '../components/Lantern';
import useLanterns from '../hooks/useLanterns';
// import { data as lanterns } from '../dummy/data';

export default function Home() {
  // use query
  const { isLoading, isError, data, isFetching } = useLanterns();

  // console.log('R-Query.data', data);

  return (
    <main className="home__dashboard">
      <div className="home__ui">
        <Link to="/create">Create Lantern</Link>
        {isFetching ? <p>loading more...</p> : null}
      </div>
      {isLoading ? (
        <p>Loading</p>
      ) : isError ? (
        <>
          <p>Oops, an error ocurred...</p>
        </>
      ) : (
        <div className="home__lanterns">
          {data.map((lantern) => (
            <Lantern key={lantern.id} data={lantern} />
          ))}
        </div>
      )}
    </main>
  );
}
