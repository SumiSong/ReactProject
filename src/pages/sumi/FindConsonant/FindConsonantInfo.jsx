import react, {useEffect, useState, useRef} from 'react';
import './FindConsonant.css'

const FindConsonantInfo = ({imageSrc}) => {
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [context, setContext] = useState(null);
    const [shuffledConsonants, setShuffledConsonants] = useState([]);
    const consonants = [
        'ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
    ];
    
    useEffect(() => {
        const generateRandomConsonants = (num) => {
            const shuffled = [];
            for (let i = 0; i < num; i++) {
                const randomIndex = Math.floor(Math.random() * consonants.length);
                shuffled.push(consonants[randomIndex]);
            }
            return shuffled;
        };

        const shuffled = generateRandomConsonants(24);
        setShuffledConsonants(shuffled);

        
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.src = imageSrc;
        img.onload = () => {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };

        setContext(ctx);
    }, [imageSrc]);

    const handleMouseDown = () => {
        setIsDrawing(true);
    };

    const handleMouseUp = () => {
        setIsDrawing(false);
        context.beginPath();
    };

    const handleMouseMove = (event) => {
        if (!isDrawing) return;

        context.lineWidth = 5;
        context.lineCap = 'round';
        context.strokeStyle = 'red';

        const rect = canvasRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        context.lineTo(x, y);
        context.stroke();
        context.beginPath();
        context.moveTo(x, y);
    };

    return (
        <div className="consonant-info">
            <canvas
                ref={canvasRef}
                className="drawing-canvas"
                width={600}
                height={400}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            />
            <div className="consonants">
                {shuffledConsonants.map((item, index) => (
                    <span key={index} className="consonant">
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default FindConsonantInfo;