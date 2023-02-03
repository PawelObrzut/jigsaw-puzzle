import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section>
        <p className="text-left p-2 max-w-4xl mx-auto">Choose your Jigsaw Puzzle [source: https://creazilla.com/sv] </p>
      </section>
      <section className="grid mb-5 gap-2 grid-cols-2 max-w-4xl mx-auto">
        <div><Link to="/jigsaw-puzzle/dinosaur"><img src={require("../images/dinosaur.png")} alt="dinosaur" /></Link></div>
        <div><Link to="/jigsaw-puzzle/lobster"><img src={require("../images/lobster.png")} alt="lobster" /></Link></div>
        <div><Link to="/jigsaw-puzzle/turtle"><img src={require("../images/turtle.png")} alt="turtle" /></Link></div>
        <div><Link to="/jigsaw-puzzle/whale"><img src={require("../images/whale.png")} alt="whale" /></Link></div>
        <div><Link to="/jigsaw-puzzle/cupcake"><img src={require("../images/cupcake.png")} alt="cupcake" /></Link></div>
        <div><Link to="/jigsaw-puzzle/pirate"><img src={require("../images/pirate.png")} alt="pirate" /></Link></div>
        <div><Link to="/jigsaw-puzzle/yeti"><img src={require("../images/yeti.png")} alt="yeti" /></Link></div>
        <div><Link to="/jigsaw-puzzle/king"><img src={require("../images/king.png")} alt="king" /></Link></div>
        <div><Link to="/jigsaw-puzzle/iceskater"><img src={require("../images/iceskater.png")} alt="iceskater" /></Link></div>
        <div><Link to="/jigsaw-puzzle/meteor"><img src={require("../images/meteor.png")} alt="meteor" /></Link></div>
      </section>
    </>
  )
}

export default Home
