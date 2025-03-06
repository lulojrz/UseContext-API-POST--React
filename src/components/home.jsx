 import { Link } from "react-router-dom"

const Home = () => {
  return (

   <div className="home d-flex flex-column">
   <h1 className="text-center">Bienvenido al Blog de Notas 🗒️</h1>

   <button className="btn btn-primary text-center mg-auto go-to-blog "><Link to= "/blog">Blog</Link></button>
   </div>
  )
}

export default Home
