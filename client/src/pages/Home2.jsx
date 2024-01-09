import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';

import img01 from "../assets/image/i1-min.png"
import img02 from "../assets/image/i2-min.png"
import img03 from "../assets/image/min.png"
import img04 from "../assets/image/i4-min.png"
import img05 from "../assets/image/i5-min.png"
import img06 from "../assets/image/i6-min.png"
import img07 from "../assets/image/i7-min.png"
import img08 from "../assets/image/i8-min.png"
import img09 from "../assets/image/i9-min.png"
import img10 from "../assets/image/i10-min.png"
import img11 from "../assets/image/i11-min.png"
import img12 from "../assets/image/i12-min.png"


const Home2 = () => {
    const plane1 = useRef(null);
    const plane2 = useRef(null);
    const plane3 = useRef(null);
    const plane4 = useRef(null);
    const plane5 = useRef(null);
    const plane6 = useRef(null);
    const plane7 = useRef(null);
    const plane8 = useRef(null);
    const plane9 = useRef(null);
    const plane10 = useRef(null);
    const plane11 = useRef(null);
    const plane12 = useRef(null);

    const [isClicking, setIsClicking] = useState(false);
    const [move, setMove] = useState("")
    const [add, setAdd] = useState("")


    const navgaite = useNavigate()

    let requestAnimationFrameId = null;
    let xForce = 0;
    let yForce = 0;

    const easing = 0.08;
    const speed = 0.01;

    useEffect(() => {
        const animationConfig = {
            opacity: 0,
            scale: 0,
            stagger: {
                amount: 0.2,
                grid: 'auto',
                from: 'end',
            },
            duration: 0.8,
            ease: 'power4.inOut',
        };

        gsap.from('.imgs', animationConfig);
    }, [])

    const manageMouseMove = (e) => {
        const { movementX, movementY } = e
        if (!isClicking) {
            xForce += movementX * speed;
            yForce += movementY * speed;

            if (requestAnimationFrameId == null) {
                requestAnimationFrameId = requestAnimationFrame(animate);
            }
        }
    }

    const lerp = (start, target, amount) => start * (1 - amount) + target * amount;

    const animate = () => {
        xForce = lerp(xForce, 0, easing);
        yForce = lerp(yForce, 0, easing);
        gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` })
        gsap.set(plane6.current, { x: `+=${xForce}`, y: `+=${yForce}` })
        gsap.set(plane8.current, { x: `+=${xForce}`, y: `+=${yForce}` })
        gsap.set(plane10.current, { x: `+=${xForce}`, y: `+=${yForce}` })
        gsap.set(plane2.current, { x: `+=${xForce * 0.5}`, y: `+=${yForce * 0.5}` })
        gsap.set(plane4.current, { x: `+=${xForce * 0.5}`, y: `+=${yForce * 0.5}` })
        gsap.set(plane7.current, { x: `+=${xForce * 0.5}`, y: `+=${yForce * 0.5}` })
        gsap.set(plane12.current, { x: `+=${xForce * 0.5}`, y: `+=${yForce * 0.5}` })
        gsap.set(plane3.current, { x: `+=${xForce * 0.25}`, y: `+=${yForce * 0.25}` })
        gsap.set(plane5.current, { x: `+=${xForce * 0.25}`, y: `+=${yForce * 0.25}` })
        gsap.set(plane11.current, { x: `+=${xForce * 0.25}`, y: `+=${yForce * 0.25}` })
        gsap.set(plane9.current, { x: `+=${xForce * 0.25}`, y: `+=${yForce * 0.25}` })

        if (Math.abs(xForce) < 0.01) xForce = 0;
        if (Math.abs(yForce) < 0.01) yForce = 0;

        if (xForce !== 0 || yForce !== 0) {
            requestAnimationFrame(animate);
        }
        else {
            cancelAnimationFrame(requestAnimationFrameId)
            requestAnimationFrameId = null;
        }
    }

    const BackHandle = () => {
        navgaite("/")
    };

    const moveHandle = (path, e) => {
        setIsClicking(true);
        // navgaite(path);
        setAdd(path)
        setMove(e);
    }
    // click, onMouse 효과
    const clickHandle = () => {
        setIsClicking(false);
    };

    // 화면 전환
    useEffect(() => {
        const tl = gsap.timeline();

        const hideImages = ['i01', 'i02', 'i03', 'i04', 'i05', 'i06', 'i07', 'i08', 'i09', 'i10', 'i11', 'i12', 'main__title', 'center_text', 'BackButton'];
        hideImages.splice(hideImages.indexOf(move), 1);
        console.log(hideImages)
        hideImages.sort(() => Math.random() - 0.5);

        switch (move) {
            case "i01":
                tl.to(`.${hideImages[0]},.${hideImages[1]},.${hideImages[2]},.${hideImages[11]}`, { opacity: 0, duration: 0.3 })
                tl.to(`.${hideImages[3]},.${hideImages[4]},.${hideImages[5]},.${hideImages[6]},.${hideImages[12]}`, { opacity: 0, duration: 0.3 })
                tl.to(`.${hideImages[7]},.${hideImages[8]},.${hideImages[9]},.${hideImages[10]},.${hideImages[13]}`, { opacity: 0, duration: 0.3 })
                    .add(() => navgaite(add));
                // navgaite("/search")
                break;
            case "i02":
                tl.to(`.${hideImages[0]},.${hideImages[1]},.${hideImages[2]},.${hideImages[11]}`, { opacity: 0, duration: 0.3 })
                tl.to(`.${hideImages[3]},.${hideImages[4]},.${hideImages[5]},.${hideImages[6]},.${hideImages[12]}`, { opacity: 0, duration: 0.3 })
                tl.to(`.${hideImages[7]},.${hideImages[8]},.${hideImages[9]},.${hideImages[10]},.${hideImages[13]}`, { opacity: 0, duration: 0.3 })
                    .add(() => navgaite(add));
                // navgaite("/skill")
                break;
            case "i03":
                tl.to(`.${hideImages[0]},.${hideImages[1]},.${hideImages[2]},.${hideImages[11]}`, { opacity: 0, duration: 0.3 })
                tl.to(`.${hideImages[3]},.${hideImages[4]},.${hideImages[5]},.${hideImages[6]},.${hideImages[12]}`, { opacity: 0, duration: 0.3 })
                tl.to(`.${hideImages[7]},.${hideImages[8]},.${hideImages[9]},.${hideImages[10]},.${hideImages[13]}`, { opacity: 0, duration: 0.3 })
                    .add(() => navgaite(add));
                // navgaite("/aboutme")
                break;
            case "i04":
                tl.to(`.${hideImages[0]},.${hideImages[1]},.${hideImages[2]},.${hideImages[11]}`, { opacity: 0, duration: 0.3 })
                tl.to(`.${hideImages[3]},.${hideImages[4]},.${hideImages[5]},.${hideImages[6]},.${hideImages[12]}`, { opacity: 0, duration: 0.3 })
                tl.to(`.${hideImages[7]},.${hideImages[8]},.${hideImages[9]},.${hideImages[10]},.${hideImages[13]}`, { opacity: 0, duration: 0.3 })
                    .add(() => navgaite(add));
                // navgaite("/content")
                break;
            case "i05":
                tl.to(`.${hideImages[0]},.${hideImages[1]},.${hideImages[2]},.${hideImages[11]}`, { opacity: 0, duration: 0.3 })
                tl.to(`.${hideImages[3]},.${hideImages[4]},.${hideImages[5]},.${hideImages[6]},.${hideImages[12]}`, { opacity: 0, duration: 0.3 })
                tl.to(`.${hideImages[7]},.${hideImages[8]},.${hideImages[9]},.${hideImages[10]},.${hideImages[13]}`, { opacity: 0, duration: 0.3 })
                    .add(() => navgaite(add));
                // navgaite("/blog")
                break;
            case "i06":
                tl.to(`.${hideImages[0]},.${hideImages[1]},.${hideImages[2]},.${hideImages[11]}`, { opacity: 0, duration: 0.3 })
                tl.to(`.${hideImages[3]},.${hideImages[4]},.${hideImages[5]},.${hideImages[6]},.${hideImages[12]}`, { opacity: 0, duration: 0.3 })
                tl.to(`.${hideImages[7]},.${hideImages[8]},.${hideImages[9]},.${hideImages[10]},.${hideImages[13]}`, { opacity: 0, duration: 0.3 })
                    .add(() => navgaite(add));
                // navgaite("/youtube")
                break;
            case "i07":
                tl.to(`.${hideImages[0]},.${hideImages[1]},.${hideImages[2]},.${hideImages[11]}`, { opacity: 0, duration: 0.3 })
                tl.to(`.${hideImages[3]},.${hideImages[4]},.${hideImages[5]},.${hideImages[6]},.${hideImages[12]}`, { opacity: 0, duration: 0.3 })
                tl.to(`.${hideImages[7]},.${hideImages[8]},.${hideImages[9]},.${hideImages[10]},.${hideImages[13]}`, { opacity: 0, duration: 0.3 })
                    .add(() => navgaite(add));
                // navgaite("/gsap")
                break;
            case "i08":
                tl.to(`.${hideImages[0]},.${hideImages[1]},.${hideImages[2]},.${hideImages[11]}`, { opacity: 0, duration: 0.3 })
                tl.to(`.${hideImages[3]},.${hideImages[4]},.${hideImages[5]},.${hideImages[6]},.${hideImages[12]}`, { opacity: 0, duration: 0.3 })
                tl.to(`.${hideImages[7]},.${hideImages[8]},.${hideImages[9]},.${hideImages[10]},.${hideImages[13]}`, { opacity: 0, duration: 0.3 })
                    .add(() => navgaite(add));
                // navgaite("/myuduck")
                break;
            case "i09":
                tl.to(`.${hideImages[0]},.${hideImages[1]},.${hideImages[2]},.${hideImages[11]}`, { opacity: 0, duration: 0.3 })
                tl.to(`.${hideImages[3]},.${hideImages[4]},.${hideImages[5]},.${hideImages[6]},.${hideImages[12]}`, { opacity: 0, duration: 0.3 })
                tl.to(`.${hideImages[7]},.${hideImages[8]},.${hideImages[9]},.${hideImages[10]},.${hideImages[13]}`, { opacity: 0, duration: 0.3 })
                    .add(() => navgaite(add));
                // navgaite("/mouse")
                break;
            case "i10":
                tl.to(`.${hideImages[0]},.${hideImages[1]},.${hideImages[2]},.${hideImages[11]}`, { opacity: 0, duration: 0.3 })
                tl.to(`.${hideImages[3]},.${hideImages[4]},.${hideImages[5]},.${hideImages[6]},.${hideImages[12]}`, { opacity: 0, duration: 0.3 })
                tl.to(`.${hideImages[7]},.${hideImages[8]},.${hideImages[9]},.${hideImages[10]},.${hideImages[13]}`, { opacity: 0, duration: 0.3 })
                    .add(() => navgaite(add));
                // navgaite("/movie")
                break;
            case "i11":
                tl.to(`.${hideImages[0]},.${hideImages[1]},.${hideImages[2]},.${hideImages[11]}`, { opacity: 0, duration: 0.3 })
                tl.to(`.${hideImages[3]},.${hideImages[4]},.${hideImages[5]},.${hideImages[6]},.${hideImages[12]}`, { opacity: 0, duration: 0.3 })
                tl.to(`.${hideImages[7]},.${hideImages[8]},.${hideImages[9]},.${hideImages[10]},.${hideImages[13]}`, { opacity: 0, duration: 0.3 })
                    .add(() => navgaite(add));
                // navgaite("/slide")
                break;
            case "i12":
                tl.to(`.${hideImages[0]},.${hideImages[1]},.${hideImages[2]},.${hideImages[11]}`, { opacity: 0, duration: 0.3 })
                tl.to(`.${hideImages[3]},.${hideImages[4]},.${hideImages[5]},.${hideImages[6]},.${hideImages[12]}`, { opacity: 0, duration: 0.3 })
                tl.to(`.${hideImages[7]},.${hideImages[8]},.${hideImages[9]},.${hideImages[10]},.${hideImages[13]}`, { opacity: 0, duration: 0.3 })
                    .add(() => navgaite(add));
                // navgaite("/addplus")
                break;
            default:
        }

    }, [move, navgaite, add])


    return (
        <div id='active__wrap' onMouseMove={(e) => manageMouseMove(e)} onMouseDown={() => clickHandle()} onMouseUp={() => clickHandle()} >

            <div className="imgs">
                <div className="img i01"
                    ref={plane1} src={img01}
                    alt="image01"
                    onClick={() => moveHandle("/search", "i01")}
                >
                <span className="work_name">
                    search
                </span>
                </div>
                <div className="img i06"
                    ref={plane6} src={img06}
                    alt="image06"
                    onClick={() => moveHandle("/youtube", "i06")}
                >
                <span className="work_name">
                    youtube
                </span>
                </div>
                <div className="img i08"                
                    ref={plane8} src={img08}
                    alt="image08"
                    onClick={() => moveHandle("/myuduck", "i08")}
                >
                <span className="work_name">
                    myuduck
                </span>
                </div>
                <div className="img i10"
                    ref={plane10} src={img10}
                    alt="image10"
                    onClick={() => moveHandle("/movie", "i10")}
                >
                <span className="work_name">
                    movie
                </span>
                </div>


                <div className="img i02"
                    ref={plane2} src={img02}
                    alt="image02"
                    onClick={() => moveHandle("/skill", "i02")}
                >
                <span className="work_name">
                    skill
                </span>
                </div>
                <div className="img i04"
                    ref={plane4} src={img04}
                    alt="image04"
                    onClick={() => moveHandle("/content", "i04")}
                >
                <span className="work_name">
                    content
                </span>
                </div>
                <div className="img i07"
                    ref={plane7} src={img07}
                    alt="image07"
                    onClick={() => moveHandle("/gsap", "i07")}
                >
                <span className="work_name">
                    gsap
                </span>
                </div>
                <div className="img i12"
                    ref={plane12} src={img12}
                    alt="image12"
                    onClick={() => moveHandle("/portfolio", "i12")}
                >
                <span className="work_name">
                    portfolio
                </span>
                </div>


                <div className="img i03"
                    ref={plane3} src={img03}
                    alt="image03"
                    onClick={() => moveHandle("/aboutme", "i03")}
                >
                <span className="work_name">
                    aboutme
                </span>
                </div>
                <div className="img i05"
                    ref={plane5} src={img05}
                    alt="image05"
                    onClick={() => moveHandle("/blog", "i05")}
                >
                <span className="work_name">
                    blog
                </span>
                </div>
                <div className="img i11"
                    ref={plane11} src={img11}
                    alt="image11"
                    onClick={() => moveHandle("/slide", "i11")}
                >
                <span className="work_name">
                    slide
                </span>
                </div>
                <div className="img i09"
                    ref={plane9} src={img09}
                    alt="image9"
                    onClick={() => moveHandle("/mouse", "i09")}
                >
                <span className="work_name">
                    mouse
                </span>
                </div>

                <div id="back_button" onClick={() => BackHandle()}>
                    <span className="BackButton">back</span>
                </div>
            </div>

            <div id="active__title" className="main__title">
                <h2>portfolio</h2>
                <span>lee ji young</span>
            </div>
            <div className="center">
                <span className='center_text'>selected <p>works</p></span>
            </div>
        </div>
    )
}

export default Home2;