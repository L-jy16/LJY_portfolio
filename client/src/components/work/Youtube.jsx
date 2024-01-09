import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { gsap } from "gsap";
import RepleAreas from '../reple/RepleAreas';


const Youtube = () => {
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
                <span className='center_text'>youtube <p>site</p></span>
                <div className="work_img_wrap youtube">
                </div>
                <div className="desc">
                    <span>
                        REACT를 활용하여 구현한 애니메이션 관련 유튜브 영상을 모은 사이트입니다.
                        Youtube API를 활용하여 동적으로 실시간 유튜브 콘텐츠를 검색하고 동영상을 불러오기 기능을 제공하였습니다.
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
                    <Link to="http://ljy16.dothome.co.kr/javascript/slider/slider01.html">view</Link>
                    <Link to="https://github.com/L-jy16/webs2024/tree/main/javascript/slider">code</Link>
                </div>
            </div>
            {/* work_footer */}

            {/* comment */}
            <RepleAreas position={"left"} />
        </div>
    )
}

export default Youtube