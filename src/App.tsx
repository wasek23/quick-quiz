import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
const Start = React.lazy(() => import('pages/Start/Start'));
const Exam = React.lazy(() => import('pages/Exam/Exam'));
const Done = React.lazy(() => import('pages/Done/Done'));
const Result = React.lazy(() => import('pages/Result/Result'));

function App() {
  return <div className='quickQuizApp'>
    <div className='content'>
      <h1>Quick Quiz</h1>

      <Suspense fallback={<div className="loader"></div>}>
        <Routes>
          <Route path='/' element={<Start />} />
          <Route path='/exam' element={<Exam />} />
          <Route path='/done' element={<Done />} />
          <Route path='/result' element={<Result />} />
        </Routes>
      </Suspense>
    </div>
  </div>;
}
export default App;
