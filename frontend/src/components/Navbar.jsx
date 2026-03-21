import { Link } from "react-router"

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      
      {/* Logo */}
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl font-bold">
          Note App - Luben
        </Link>
      </div>

      {/* Links */}
      <div className="navbar-end gap-2">
        <Link to="/create" className="btn btn-primary">Create Note</Link>
      </div>

    </div>
  )
}

export default Navbar