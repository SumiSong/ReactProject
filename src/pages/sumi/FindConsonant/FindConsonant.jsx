import React, { useState } from 'react';
import ProblemHeader from '../component/ProblemHeader';
import problemList from '../component/problemList'; // 문제 리스트 임포트
import Pagination  from  '../../../component/Pagination';

function FindConsonant() {
    const [currentPage, setCurrentPage] = useState(1);
    const problemsPerPage = 1;

    // 현재 페이지에 해당하는 문제 계산
    const indexOfLastProblem = currentPage * problemsPerPage;
    const indexOfFirstProblem = indexOfLastProblem - problemsPerPage;
    const currentProblem = problemList[indexOfFirstProblem]; // 현재 문제 가져오기

    //paginate 함수는 페이지 번호를 인수로 받아 currentPage 상태를 업데이트. 이 함수는 페이지 번호를 클릭했을 때 호출
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            {currentProblem && (
                <ProblemHeader number={currentProblem.number} description={currentProblem.question} />
            )}
            <Pagination
                totalProblems={problemList.length}
                problemsPerPage={problemsPerPage}
                currentPage={currentPage}
                paginate={paginate}
            />
        </div>
    );
}

export default FindConsonant;
