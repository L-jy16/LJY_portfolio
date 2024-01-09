import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from "gsap";


const Youtube = () => {
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

    return (
        <div className='work_Detail'>
            <div className="work__title">
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


            {/* reple_write 내용 */}
            <div className="work_footer">
                <div className="link_button">
                    <Link to='/home' className="work_back_button">
                        Main Site
                    </Link>
                </div>
                <div className="work_btn">
                    <Link to="https://lee-youtube-project.netlify.app/">view</Link>
                    <Link to="https://github.com/L-jy16/youtube-project">code</Link>
                </div>
            </div>
            {/* work_footer */}

            <div className="comment left">
                <span>comment</span>
            </div>
            <div className="comment_input left">
                <form>
                    <fieldset>
                        <legend className="blind">댓글쓰기</legend>
                        <label htmlFor="commentName" className="blind">
                            이름
                        </label>
                        <input
                            type="text"
                            id="commentName"
                            name="commentName"
                            className="comment__nickname"
                            placeholder="Nickame"
                            autoComplete="username"
                            required
                        />
                        <label htmlFor="commentPass" className="blind">
                            비밀번호
                        </label>
                        <input
                            type="password"
                            id="commentPass"
                            name="commentPass"
                            className="comment__password"
                            placeholder="Password"
                            autoComplete="current-password"
                            required
                        />
                        <label htmlFor="commentWrite" className="blind">
                            댓글쓰기
                        </label>
                        <input
                            type="text"
                            id="commentWrite"
                            name="commentWrite"
                            className="comment__detail"
                            placeholder="100글자 이내로 적어주세요."
                            required
                        />
                        <button className="comment_btn">댓글쓰기</button>
                    </fieldset>
                </form>
            </div>
            {/* comment */}

            {/* reple_list 내용 */}
            <div className="reple">
                <p>댓글 내용 댓글 내용 댓글 내용</p>
                <span>지죤 <em>2023.10.30</em><a>수정</a><a>삭제</a></span>
            </div>
        </div>
    )
}

export default Youtube