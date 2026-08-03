import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>

      <nav 
      
      style={{ padding: "20px", backgroundColor: "#1f19d2", }} >


        <Link  to="/"  style={{
            color: "white", marginRight: "30px",
          }}>   Home </Link>

       
        <Link to="/notes"
          style={{
            color: "white",  marginRight: "30px",
          }}> Notes  </Link>

        <Link to="/add"
          style={{
            color: "white",
          }}> Add Note  </Link>

      </nav>

      {/*    Requirement was:  Navbar will appear here on every page.
          Outlet displays whichever child route is currently active.so same  Layout as parent
          and child route will be displayed in the Outlet.
       */}

      <div style={{ padding: "20px" }}>

        <Outlet />
        
      </div>

    </div>
  );
}

export default Layout;

