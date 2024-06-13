import React, { useState } from 'react';
import './QuestionAnswer.css';

function QuestionAnswer({ problemSetKey, onAnswersChange, onSubmit  }) {
    const [answers, setAnswers] = useState({ 'ㄷ': '', 'ㄹ': '', 'ㅂ': '', 'ㅍ': '' });

    const handleChange = (event) => {
        const { name, value } = event.target;
        const newAnswers = {
            ...answers,
            [name]: value
        };
        setAnswers(newAnswers);
        onAnswersChange(newAnswers);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit();
    };


    return (
        <form className="question-answer" onSubmit={handleSubmit}>
            <table className="question-table">
                <tbody>
                    {problemSetKey.map((q, index) => (
                        <tr className="question-item" key={index}>
                            <td className="question">{q.question}</td>
                            <td className="answer">
                                <input
                                    type="text"
                                    name={q.question.split(' ')[1]}
                                    value={answers[q.question.split(' ')[1]]}
                                    onChange={handleChange}
                                    className="input-text"
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button type="submit" className="submit-button">제출</button>
        </form>
    );
}

export default QuestionAnswer;
