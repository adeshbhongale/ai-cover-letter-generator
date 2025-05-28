import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function FadeIn({
    children,
    direction = "up",
    delay = 0,
    duration = 0.5,
    className = "",
    once = true,
}) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    const getDirectionOffset = () => {
        switch (direction) {
            case "up":
                return { y: 40, x: 0 };
            case "down":
                return { y: -40, x: 0 };
            case "left":
                return { y: 0, x: 40 };
            case "right":
                return { y: 0, x: -40 };
            case "none":
                return { y: 0, x: 0 };
            default:
                return { y: 40, x: 0 };
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (once && ref.current) {
                        observer.unobserve(ref.current);
                    }
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.1,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [once]);

    const offset = getDirectionOffset();

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, ...offset }}
            animate={isVisible ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, ...offset }}
            transition={{
                duration,
                delay,
                ease: "easeOut",
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export default FadeIn;
