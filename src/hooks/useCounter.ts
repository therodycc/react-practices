import { gsap as animation } from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export const useCounter = (
    MAXIMUM_COUNTER: number,
    MINIMUM_COUNTER: number
) => {
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
        if (counter === MINIMUM_COUNTER) return setError("Minimum value");
        if (counter < MAXIMUM_COUNTER) return setError("We need to count to " + MAXIMUM_COUNTER);
        tl.current.play(0);
        setError("We reached the maximum counter value");
    }, [counter]);

    const handleClick = (num: number) => {
        setCounter((prev) =>
            Math.max(Math.min(prev + num, MAXIMUM_COUNTER), MINIMUM_COUNTER)
        );
    };
    return {
        counter,
        handleClick,
        error,
        elementToAnimate,
    };
};
