import { Link, Outlet } from "react-router-dom";
import { Button } from "antd";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>BookStore</h1>
      <nav className="nav">
        <Link to="/admins">
          <Button type="primary">Admins</Button>
        </Link>
        <Link to="/users">
          <Button type="primary">Users</Button>
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
