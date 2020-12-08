import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useQuery, queryCache } from 'react-query';

export default function ViewLantern() {
  const { id } = useParams();

  const { isError, isLoading, data } = useQuery(['lantern', id], () =>
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/post/${id}`)
      .then((res) => res.data)
  );

  if (isLoading) {
    return (
      <main>
        <p>LOADING</p>
      </main>
    );
  }
  if (isError) {
    return (
      <main>
        <p>Oops... an error occured...</p>
      </main>
    );
  }

  return (
    <div>
      <h1>From another soul...</h1>
      <main className="view__container animate__animated animate__fadeInUp">
        <p>{data.content}</p>
      </main>
    </div>
  );
}
