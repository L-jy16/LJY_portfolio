import React from 'react'

const RepleWrite = ({ position }) => {
    console.log(position)
    return (
        <div className={`comment_wrap ${position}`}>
            <div className="comment ">
                <span>comment</span>
            </div>
            <div className="comment_back">
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
        </div>
    )
}

export default RepleWrite
