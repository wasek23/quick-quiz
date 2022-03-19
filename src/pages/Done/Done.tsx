import { Link } from 'react-router-dom';

const Done = () => {
    return <div className='page done'>
        <h2>You have submitted all answers!!!</h2>

        <Link to='/result'><button className='btnPrimary'>See Result</button></Link>
    </div>;
}
export default Done;