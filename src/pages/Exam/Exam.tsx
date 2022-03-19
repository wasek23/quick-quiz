import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './Exam.css';
import questions from 'data/questions';
import answers from 'data/answers';
import store from 'redux/store';
import initialQuestions from 'redux/actions/questionsAction';
import submitAnswer from 'redux/actions/submitAction';

const Exam = () => {
    const dispatch = useDispatch();

    const persistAns = JSON.parse(JSON.parse(localStorage.getItem('persist:quiz') || '')?.answers);

    const step = useRef(persistAns?.step || 1);
    const score = useRef(persistAns?.score || 0);
    const [selectedAns, setSelectedAns] = useState<string>('');
    const [storeQuestions, setStoreQuestions] = useState<Question[]>([]);
    const [submitted, setSubmitted] = useState<SubmittedData>(persistAns);

    useEffect(() => {
        dispatch(initialQuestions(questions));
    }, [dispatch]);

    useEffect(() => {
        if (store.getState().questions) {
            setStoreQuestions(store.getState().questions);
        }
    }, []);

    const isCorrectAns = (id: string, ans: string) => {
        const curAns: {
            _id: string,
            answer: string
        } | undefined = answers.find(ans => ans._id === id);

        return curAns?.answer === ans;
    }

    const currentQuestion = storeQuestions?.[step.current - 1] || null;

    const onSubmit = () => {
        step.current = step.current > storeQuestions?.length ? 0 : step.current + 1
        const { _id, question } = currentQuestion;

        const isCorrect = isCorrectAns(_id, selectedAns);

        isCorrect && score.current++;

        const prevData = submitted?.data || [];

        setSubmitted({
            score: score.current,
            step: step.current,
            data: [...prevData, { _id, question, selectedAns: selectedAns, isCorrect }]
        });

        dispatch(submitAnswer({
            score: score.current,
            step: step.current > storeQuestions?.length ? 0 : step.current,
            data: [...prevData, { _id, question, selectedAns: selectedAns, isCorrect }]
        }));

        setSelectedAns('');
    }

    return <div className='page exam'>
        {currentQuestion && <div className='paper'>
            <h3 className='question'>{currentQuestion.question}</h3>

            <div className='options'>
                {/* {currentQuestion.options.map((opt, index) => <p key={index}>
                    <input
                        name='qOptions'
                        id={`opt-${index}`}
                        type='radio'
                        value={opt}
                        checked={opt === selectedAns}
                        onChange={e => setSelectedAns(e.target.value)}
                    />

                    <label htmlFor={`opt-${index}`}>{opt}</label>
                </p>)} */}

                {currentQuestion.options.map((opt, index) => <label key={index} htmlFor={`opt-${index}`}>
                    <input
                        name='qOptions'
                        id={`opt-${index}`}
                        type='radio'
                        value={opt}
                        checked={opt === selectedAns}
                        onChange={e => setSelectedAns(e.target.value)}
                    />

                    {opt}
                </label>)}
            </div>

            {selectedAns && <>
                {step.current < questions.length ?
                    <button
                        className='btnPrimary'
                        onClick={onSubmit}>
                        Next</button> :

                    <Link to='/done'><button
                        className='btnPrimary'
                        onClick={onSubmit}
                    >Done</button></Link>
                }
            </>}
        </div>}
    </div>
}
export default Exam;