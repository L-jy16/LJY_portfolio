import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { gsap } from "gsap";
import RepleAreas from '../reple/RepleAreas';

const Quiz = () => {
    const navigate = useNavigate();

    // 화면 전환 효과
    useEffect(() => {

        gsap.set(".work_img_wrap", { opacity: 0, x: "-100%" });
        gsap.set(".work__title, .center_text, .comment, .desc, .work_back_button, .work_btn", { opacity: 0 });

        setTimeout(() => {
            const tl = gsap.timeline();


            tl.to(".work_img_wrap", { opacity: 1, x: 0, duration: 0.41 })
            tl.to(".work__title", { opacity: 1, duration: 0.41 })
            tl.to(".center_text", { opacity: 1, duration: 0.41 })
            tl.to(".desc", { opacity: 1, duration: 0.41 })
            tl.to(".comment", { opacity: 1, duration: 0.41 })
            tl.to(".work_back_button", { opacity: 1, duration: 0.41 })
            tl.to(".work_btn", { opacity: 1, duration: 0.41 })
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

            <div className="work_center right">
                <span className='center_text'>add-plus <p>site</p></span>
                <div className="work_img_wrap quiz">
                </div>
                <div className="desc">
                    <span>
                        JAVASCRIPT과 JSON을 활용하여 퀴즈 게임 사이트를 구현하였습니다.
                        객관식과 주관식, CBT 유형 등 다양한 문제 유형을 구현 하였으며, 문제를 푸는 시간과, 점수를 알 수 있도록 구현하였습니다.
                    </span>

                </div>
            </div>
            {/* work_center */}

            <div className="work_footer">
                <div className="link_button">
                    <Link to='/home' className="work_back_button">
                        <span>Main site</span>
                    </Link>
                </div>
                <div className="work_btn">
                    <Link to="/">view</Link>
                    <Link to="https://github.com/L-jy16/ADD-plus">code</Link>
                </div>
            </div>
            {/* work_footer */}

            {/* comment */}
            <RepleAreas position={"right"} />
        </div>
    )
}

export default Quiz