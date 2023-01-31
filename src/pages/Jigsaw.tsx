import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib'

const Jigsaw = () => {
  const navigate = useNavigate();
  const { jigsaw } = useParams();

  return (
    <>
      <section className="p-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => navigate(-1)}>Back to homePage</button>
      </section>

      <section className="border-2 m-2 grid grid-rows-2 grid-cols-4 grid-flow-col">
        <img className="h-48 w-48" src={require(`../images/${jigsaw}.png`)} alt={jigsaw} />
        <div className="border-2 p-2 h-48 w-48">
          clock
        </div>
        <div className="border-2 p-2 h-48 w-48">
          another component I do not know what for
        </div>
        <div className="border-2 h-480 w-480 row-span-3 col-span-3">
          <JigsawPuzzle 
            imageSrc={require(`../images/${jigsaw}.png`)}
            rows={4}
            columns={6}
          />
        </div>
      </section>
    </>
  )
}

export default Jigsaw