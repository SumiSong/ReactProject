import React, { useState } from 'react';
import ProblemHeader from '../component/ProblemHeader';
import problemList from '../component/problemList'; // 문제 리스트 임포트
import style from '../../../component/Component.css';
import ProblemInfo from '../component/ProblemInfo';
// import QuestionAnswer from '../component/QuestionAnswer';
// import questionList from '../component/QuestionList';
// import CheckResult from './CheckResult';
// import ModalComponent from '../component/ModalComponent'

function FindConsonant() {


    return (
        <div className={style.wrapper}>
            <div className='container' style={style.container}>
                <ProblemHeader number={problemList.problem2.number} description={problemList.problem2.description} />
                <ProblemInfo imageSrc={problemList.problem2.imageSrc} />
                {/* <QuestionAnswer 
                    problemSetKey={questionList.problem2.questions} 
                    onAnswersChange={handleAnswersChange} 
                    onSubmit={handleSubmit}
                />
                {submitted && <CheckResult answers={answers} setResult={handleResult}/>}
                <ModalComponent show={showModal} handleClose={handleCloseModal} result={result} /> */}

            </div>
        </div>
    );
}

export default FindConsonant;
