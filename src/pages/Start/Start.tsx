import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import submitAnswer from 'redux/actions/submitAction';

const Start = () => {
    const dispatch = useDispatch();

    return <div className='page start'>
        <h2>Lets start the quiz</h2>

        <Link to='/exam'>
            <button className='btnPrimary' onClick={() => {
                dispatch(submitAnswer({
                    score: 0,
                    step: 1,
                    data: []
                }));
            }}>
                Start
            </button>
        </Link>
    </div>
}
export default Start;