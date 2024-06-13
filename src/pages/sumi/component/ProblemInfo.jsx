import React from 'react';
import FindConsonantInfo from '../FindConsonant/FindConsonantInfo';

function ProblemInfo({ imageSrc}) {
    return (
        <div>
            <div className='problem-info'>
            <FindConsonantInfo imageSrc={imageSrc} />
            </div>
        </div>
    );
}

export default ProblemInfo;