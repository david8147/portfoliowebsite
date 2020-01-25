import React from 'react';
import './FrontWelcomeStyles.scss';
import {useSpring, animated} from "react-spring";

export default function FrontWelcome() {
    // const props = useSpring({
    //     from: { opacity: 1},
    //     to:{opacity: 0},
    //     config: { duration: 5000 }
    // })
    return (
        <animated.div >
            <div>
                <div className="splash">
                    <div className="splash_logo">
                        DW
                    </div>
                    <div className="splash_svg">
                        <svg width="100%" height="100%">
                            <rect width="100%" height="100%"/>
                        </svg>
                    </div>
                    <div className="splash_minimize">
                        <svg width="100%" height="100%">
                            <rect width="100%" height="100%"/>
                        </svg>
                    </div>
                </div>
                <div className="text">
                    <p>Welcome </p>
                    <p>:)</p>
                </div>
            </div>

        </animated.div>
    );
}


