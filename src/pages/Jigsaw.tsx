import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib';

import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css';
import Clock from '../components/Clock';

const Jigsaw = () => {
  const navigate = useNavigate();
  const { jigsaw } = useParams();
  const [grid, setGrid] = useState({
    rows: 5,
    columns: 4
  })

  const handleSolved = () => {
    setGrid( {
      rows: 1,
      columns: 1
    });
  }

  const handleNewGame = () => {
    setGrid( {
      rows: 5,
      columns: 4
    });
  }

  return (
    <>
      <section className="p-2 mx-auto text-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-3 rounded" onClick={() => navigate(-1)}>Back to homePage</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-3 rounded" onClick={handleNewGame}>New Game</button>
      </section>

      <section className="border-2 mb-5 mx-auto grid grid-rows-2 grid-cols-4 grid-flow-col min-w-3xl max-w-4xl">
        <img className="" src={require(`../images/${jigsaw}.png`)} alt={jigsaw} />
        <div className="p-2 relative">
        <Clock />
        </div>
        <div className="border-t-2 p-2">
          Best Time:<br></br>
          "Bruno" - 1min :20sec
        </div>
        <div className="border-l-2 h-480 w-480 row-span-3 col-span-3">
          <JigsawPuzzle 
            imageSrc={require(`../images/${jigsaw}.png`)}
            rows={grid.rows}
            columns={grid.columns}
            onSolved={handleSolved}
          />
        </div>
      </section>
    </>
  )
}

export default Jigsaw