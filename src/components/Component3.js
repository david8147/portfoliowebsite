import React from 'react';
import { useSpring, animated } from 'react-spring'


export default function Component3(){
    const props = useSpring({
        from: { opacity: 0 },
        to:{opacity: 1},
        config: { duration: 3000 }
    })
    return (
        <animated.h1 style={props}>
            <div>
                Welcome
            </div>
        </animated.h1>
    )


}
