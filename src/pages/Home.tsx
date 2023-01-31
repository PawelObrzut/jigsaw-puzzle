import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section>
        <p className="text-left p-2">Choose your Jigsaw</p>
      </section>
      <section className="grid gap-2 grid-cols-2">
        <div><Link to="/dinosaur"><img src={require("../images/dinosaur.png")} alt="dinosaur" /></Link></div>
        <div><Link to="/eagle"><img src={require("../images/eagle.png")} alt="eagle" /></Link></div>
        <div><Link to="/turtle"><img src={require("../images/turtle.png")} alt="turtle" /></Link></div>
        <div><Link to="/whale"><img src={require("../images/whale.png")} alt="whale" /></Link></div>
      </section>
    </>
  )
}

export default Home
