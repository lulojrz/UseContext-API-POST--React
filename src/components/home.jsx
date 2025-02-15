 import Header from "./header"
 import { Link } from "react-router-dom"

const Home = () => {
  return (

   <div className="home d-flex flex-column">
   <h1 className="text-center">Bienvenido al Bloc de Notas 🗒️</h1>

   <button className="btn btn-primary text-center mg-auto btn-xs "><Link to= "/blog">Ir al Bloc</Link></button>
   </div>
  )
}

export default Home
