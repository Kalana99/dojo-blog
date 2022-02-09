import {Link} from 'react-router-dom';

const NotFound = () => {

  return (

    <div className="not-found">

      <h2>404 - Ooops...!</h2>

      <p>Page could not be found</p>
      <Link to={'/'}>Back to the homepage...</Link>

    </div>
  );
}
 
export default NotFound;