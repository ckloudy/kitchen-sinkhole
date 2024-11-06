import { useState, useEffect } from "react";

const AnimatedNumber = (targetValue) => {
    const [currentValue, setCurrentValue] = useState(0);

    useEffect(() => {
        if (isNaN(targetValue) || targetValue < 0) return;

        const duration = 2000;
        const startTime = performance.now();

        const animate = (time) => {
            const elapsed = time - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const value = Math.floor(progress * targetValue);

            // Set the value only if it's greater than or equal to zero
            setCurrentValue(value >= 0 ? value : 0);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        // Reset the current value to 0 and start animation
        setCurrentValue(0);
        requestAnimationFrame(animate);
    }, [targetValue]);

    return currentValue;
};

export default AnimatedNumber;
