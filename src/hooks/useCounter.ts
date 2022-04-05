import { gsap as animation } from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const MINIMUM_COUNTER = 1;

export const useCounter = (MAXIMUM_COUNTER: number) => {
    const [counter, setCounter] = useState(0);
    const [error, setError] = useState<string>("");

    const elementToAnimate = useRef<HTMLHeadingElement>(null);

    const tl = useRef(animation.timeline());

    useLayoutEffect(() => {
        if (!elementToAnimate.current) return;

        tl.current
            .to(elementToAnimate.current, { y: -10, duration: 0.2, ease: "ease.out" })
            .to(elementToAnimate.current, { y: 0, duration: 1, ease: "bounce.out" })
            .pause();
    }, []);

    useEffect(() => {
        if (counter === 1) return setError("Minimum value")
        if (counter < 10) return setError('We need to count to 10');
        tl.current.play(0);
        setError("We reached the maximum counter value");
    }, [counter]);

    const handleClick = (num: number) => {
        setCounter((prev) => Math.max(Math.min(prev + num, MAXIMUM_COUNTER), MINIMUM_COUNTER));
    };
    return {
        counter,
        handleClick,
        error,
        elementToAnimate
    };
};
