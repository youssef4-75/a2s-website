import { useState, useEffect } from 'react';

export default function useOnScreen(ref, rootMargin = '0px') {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Trigger once when it comes into view
                if (entry.isIntersecting) {
                    setIntersecting(true);
                    observer.disconnect(); // Stop observing after it's visible
                }
            },
            {
                rootMargin,
                threshold: 0.1 // Trigger when 10% visible
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [ref, rootMargin]);

    return isIntersecting;
}
