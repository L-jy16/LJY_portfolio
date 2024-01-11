import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { gsap } from "gsap";
import RepleAreas from '../reple/RepleAreas';

const Mouse = () => {
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

            <div className="work_center left">
                <span className='center_text'>mouse <p>site</p></span>
                <div className="work_img_wrap mouse">
                </div>
                <div className="desc">
                    <span>
                        JAVASCRIPT와 GSAP 활용하여 여러 유형의 마우스 효과를 보여 줄 수 있는 사이트를 만들었습니다.
                        마우스 위치 정보와 마우스 커서 디자인, 돋보기 효과 등의 마우스 효과를 JAVASCRIPT와 GSAP 2가지 방법으로 구현하였습니다.
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
                    <Link to="http://ljy16.dothome.co.kr/javascript/mouse/mouse01.html">view</Link>
                    <Link to="https://github.com/L-jy16/webs2024/tree/main/javascript/mouse">code</Link>
                </div>
            </div>
            {/* work_footer */}

            {/* comment */}
            <RepleAreas position={"left"} />
        </div>
    )
}

export default Mouse