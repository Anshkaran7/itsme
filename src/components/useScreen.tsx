import { useEffect, useState } from 'react';

const useOnScreen = (options: IntersectionObserverInit) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing once it is visible
                }
            },
            options
        );

        const element = document.querySelector('#about'); // Change this to the specific element you want to observe
        if (element) observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, [options]);

    return isVisible;
};
export default useOnScreen;