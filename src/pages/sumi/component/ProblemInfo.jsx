import React from 'react';
// import FindConsonantInfo from '../FindConsonant/FindConsonantInfo';
import RandomCanvas from './RandomCanvas';

function ProblemInfo({ imageSrc, items, itemType }) {
    return (
        <div>
            <div className='problem-info'>
            <RandomCanvas imageSrc={imageSrc} items={items} itemType={itemType}/>
            </div>
        </div>
    );
}

export default ProblemInfo;