import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Jigsaw = () => {
  const navigate = useNavigate();
  const { jigsaw } = useParams();

  return (
    <>
      <section className="p-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => navigate(-1)}>Back to homePage</button>
      </section>
      <section className="p-2">
        <img className="h-48 w-48" src={require(`../images/${jigsaw}.png`)} alt={jigsaw} />
      </section>
    </>
  )
}

export default Jigsaw