import React, { useState } from 'react';
import ProblemHeader from '../component/ProblemHeader';
import problemList from '../component/problemList'; // 문제 리스트 임포트
import style from '../../../component/Component.css';
import ProblemInfo from '../component/ProblemInfo';
import QuestionAnswer from '../component/QuestionAnswer';
import questionList from '../component/QuestionList';
import CheckResult from './CheckResult';
import ModalComponent from '../component/ModalComponent'

function FindConsonant() {
    const [answers, setAnswers] = useState({ 'ㄷ': '', 'ㄹ': '', 'ㅂ': '', 'ㅍ': '' });
    const [submitted, setSubmitted] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [result, setResult] = useState('');

    const handleAnswersChange = (newAnswers) => {
        setAnswers(newAnswers);
    };

    const handleSubmit = () => {
        setSubmitted(true);
    };

    const handleResult = (result) => {
        setResult(result);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSubmitted(false);
    };

    return (
        <div className={style.wrapper}>
            <div className='container' style={style.container}>
                <ProblemHeader number={problemList.problem1.number} description={problemList.problem1.description} />
                <ProblemInfo imageSrc={problemList.problem1.imageSrc} />
                <QuestionAnswer 
                    problemSetKey={questionList.problem1.questions} 
                    onAnswersChange={handleAnswersChange} 
                    onSubmit={handleSubmit}
                />
                {submitted && <CheckResult answers={answers} setResult={handleResult}/>}
                <ModalComponent show={showModal} handleClose={handleCloseModal} result={result} />

            </div>
        </div>
    );
}

export default FindConsonant;
