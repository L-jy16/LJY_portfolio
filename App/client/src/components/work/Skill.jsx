import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { gsap } from "gsap";
import RepleAreas from '../reple/RepleAreas';

const Skill = () => {
    const navigate = useNavigate();

    // 화면 전환 효과
    useEffect(() => {

        gsap.set(".work_img_wrap", { opacity: 0, y: "100%" });
        gsap.set(".work__title, .center_text, .circle_wrap, .desc, .work_back_button, .comment_link, .s1, .s2, .s3, .s4, .s5, .s6, .s7, .s8, .s9, .s10, .s11", { opacity: 0 });

        setTimeout(() => {
            const tl = gsap.timeline();


            tl.to(".work_img_wrap", { opacity: 1, y: 0, duration: 0.41 })
            tl.to(".work__title", { opacity: 1, duration: 0.41 })
            tl.to(".center_text", { opacity: 1, duration: 0.41 })
            tl.to(".skill", { opacity: 1, duration: 0.41 })
            tl.to(".circle_wrap", { opacity: 1, duration: 0.41 })
            tl.to(".work_back_button", { opacity: 1, duration: 0.41 })
            tl.to(".comment_link", { opacity: 1, duration: 0.41 })
            tl.to(".s1", { opacity: 1, duration: 0.41 })
            tl.to(".s2", { opacity: 1, duration: 0.41 })
            tl.to(".s3", { opacity: 1, duration: 0.41 })
            tl.to(".s4", { opacity: 1, duration: 0.41 })
            tl.to(".s5", { opacity: 1, duration: 0.41 })
            tl.to(".s6", { opacity: 1, duration: 0.41 })
            tl.to(".s7", { opacity: 1, duration: 0.41 })
            tl.to(".s8", { opacity: 1, duration: 0.41 })
            tl.to(".s9", { opacity: 1, duration: 0.41 })
            tl.to(".s10", { opacity: 1, duration: 0.41 })
            tl.to(".s11", { opacity: 1, duration: 0.41 })
        })
    }, [])

    const mainHandle = () => {
        navigate("/home")
    }

    return (
        <div className='work_Detail'>
            <div className="work__title" onClick={() => mainHandle()}>
                <h2>portfolio</h2>
                <span>lee ji young</span>
            </div>
            {/* work__title */}

            <div className="work_center skill">
                <span className='center_text'>skill <p>Set</p></span>
                <div className="work_img_wrap"></div>
                <div className="skill">
                    <ul>
                        <li className='s1'><span>html</span></li>
                        <li className='s2'><span>css</span></li>
                        <li className='s3'><span>scss</span></li>
                        <li className='s4'><span>javascript</span></li>
                        <li className='s5'><span>jquery</span></li>
                        <li className='s6'><span>php</span></li>
                        <li className='s7'><span>react</span></li>
                        <li className='s8'><span>node.js</span></li>
                        <li className='s9'><span>vue.js</span></li>
                        <li className='s10'><span>vite.js</span></li>
                        <li className='s11'><span>MongoDB</span></li>
                        <li><span></span></li>
                    </ul>
                </div>
            </div>
            {/* work_center */}

            <div className="work_footer">
                <div className="link_button">
                    <Link to='/home' className="work_back_button">
                        <span>Main site</span>
                    </Link>
                </div>
            </div>
            {/* work_footer */}

            {/* comment */}
            <RepleAreas position={"right"} />
        </div>
    )
}
export default Skill