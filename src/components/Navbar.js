const Navbar = () => {
    return (
        <div className="navbar-container">
        <div className="navbar-header">
          <div> <b>Academy</b> </div>
          
        </div>
        <div className="navbar-bottom">
        <div className="navbar">
          <div className="navbar-item">
            Home</div>
          <div className="navbar-item" style={{color:"yellow"}} > Notifications</div>
          <div className="navbar-item">Assesments</div>
          <div className="navbar-item">Account</div>

        </div>


        </div>
       
      </div>
     );
}
 
export default Navbar;