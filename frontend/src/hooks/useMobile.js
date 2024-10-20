import { useState, useEffect } from 'react';

// Hook to detect if the device is mobile
const useMobile = (breakpoint = 768) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= breakpoint);
        };

        handleResize(); // Initial check when component mounts

        window.addEventListener('resize', handleResize); // Add resize listener

        return () => {
            window.removeEventListener('resize', handleResize); // Cleanup
        };
    }, [breakpoint]);

    return isMobile;
};

export default useMobile;
