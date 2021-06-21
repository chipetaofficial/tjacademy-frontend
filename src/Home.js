import { Link } from 'react-router-dom';
import './Home.css';
const Home = () => {
  return ( 
    <div className="page">
      <div className="student-details">
      </div>
      <div className="home-nav">
      <Link className="home-nav-links"> Mathematics </Link>
      <Link className="home-nav-links"> English </Link>
      <Link className="home-nav-links"> Science</Link>
      <Link className="home-nav-links"> Physics </Link>
      <Link className="home-nav-links"> R.E </Link>
      <Link className="home-nav-links"> Biology </Link>
      </div>

      <div className="content">
      </div>
      
    </div>
   );
}
 
export default Home;