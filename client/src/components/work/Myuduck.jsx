import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { gsap } from "gsap";
import RepleAreas from '../reple/RepleAreas';

const Myuduck = () => {
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
                <span className='center_text'>myuduck <p>site</p></span>
                <div className="work_img_wrap myuduck">
                </div>
                <div className="desc">
                    <span>
                        PHP를 활용하여 만든 '뮤지컬 포털 사이트'입니다.
                        서울 대극장 정보와 배우, 뮤지컬 소식을 제공하며, 게시판과 회원가입/로그인 기능이 있습니다.
                        MySQL 데이터베이스 활용하여 게시판과 회원 정보를 효과적으로 관리하였습니다.
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
                    <Link to="http://ljy16.dothome.co.kr/myuduck/main/main.php">view</Link>
                    <Link to="https://github.com/L-jy16/myuduck">code</Link>
                </div>
            </div>
            {/* work_footer */}

            {/* comment */}
            <RepleAreas position={"right"} />
        </div>
    )
}
export default Myuduck