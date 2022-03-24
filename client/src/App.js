import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <nav
        style={{
          padding: "0 20px",
          borderBottom: "1px solid",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Starter App</h1>
        <nav>
          <Link to="/home">Home</Link>-
          <Link to="/users">Users</Link>-
          <Link to="/skills">Skills</Link>-
          <Link to="/grades">Grades</Link>-
         <Link to="/about">About</Link>
        </nav>
      </nav>
      <div
        style={{
          padding: "0 20px",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default App;