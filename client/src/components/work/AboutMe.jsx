import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { gsap } from "gsap";
import RepleAreas from '../reple/RepleAreas';


const AboutMe = () => {
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
                <span className='center_text'>about <p>me</p></span>
                <div className="work_img_wrap aboutme">
                </div>
                <div className="desc">
                    <span>
                        안녕하세요. 끊임없는 노력과 최선을 다하는 개발자 이지영입니다.
                        제 좌우명은 "어떤 일을 하더라도 노력하고 최선을 다하며 후회를 남기지 말자"입니다.
                        개발자의 길에서도 항상 긍정적인 마음가짐으로 일에 임하며, 어떤 도전이라도 기회로 삼아 끊임없이 발전해나가겠습니다.
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
            </div>
            {/* work_footer */}

            {/* comment */}
            <RepleAreas position={"left"} />
        </div>
    )
}

export default AboutMe