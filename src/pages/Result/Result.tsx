import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './Result.css';
import questions from 'data/questions';
import submitAnswer from 'redux/actions/submitAction';

const Result = () => {
    const dispatch = useDispatch();

    const persistAns = JSON.parse(JSON.parse(localStorage.getItem('persist:quiz') || '')?.answers);

    return <div className='page result'>
        <h2>You have completed the quiz</h2>

        <h4>Your Score is: {persistAns?.score} out of {questions?.length}.</h4>

        <Link to='/'><button className='btnPrimary' onClick={() => {
            dispatch(submitAnswer({
                score: 0,
                step: 1,
                data: []
            }));
        }}>Try Again</button></Link>
    </div>
}
export default Result;