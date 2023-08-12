import { useEffect, useState } from "react";

interface ProgressBarProps {

}

const ProgressBar: React.FC<ProgressBarProps> = () => {
    const [progress, setProgress] = useState<number>(0);


    useEffect(() => {
        const intervalId = setInterval(() => {
            if (progress < 90) {
                setProgress(progress + 10);
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [progress]);

    return (<div className="progress-bar relative h-3 w-full bg-[#D1D1D1] max-w-[400px] m-auto my-6 rounded-md">
        <span
            className="h-3 bg-[#08A742] absolute left-0 top-0 rounded-md"
            style={{ width: `${progress}%` }}
        ></span>
    </div>);
}

export default ProgressBar;