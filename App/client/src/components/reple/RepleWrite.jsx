import axios from 'axios';
import React, { useState } from 'react'

const RepleWrite = ({ position }) => {

    const [reple, setReple] = useState("");
    const [nickName, setNickName] = useState("");
    const [password, setPassword] = useState("");



    const submitHandler = (e) => {
        e.preventDefault();
        let repleLength = reple.replace(/\s/g, '')

        if (!reple || !nickName || !password) {
            return alert("모두 채워주세요.");
        }

        if (repleLength.length > 100) {
            return alert("댓글을 100글자 이내로 적어주세요.")
        }

        let body = {
            reple: reple,
            nickName: nickName,
            password: password,
        }

        axios.post("/api/reple/submit", body)
            .then((response) => {
                if (response.data.success) {
                    alert("댓글 감사합니다 😊")
                    console.log("Before reset:", reple, nickName, password);
                    setReple("")
                    setNickName("")
                    setPassword("")
                    console.log("After reset:", reple, nickName, password);
                } else {
                    alert("댓글이 작성되지 않았습니다.")
                }
            })
            .catch((err) => {
                console.log(err)
                alert("댓글 실패")
            })
    }

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
                            value={nickName}
                            onChange={(e) => { setNickName(e.currentTarget.value) }}
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
                            value={password}
                            onChange={(e) => { setPassword(e.currentTarget.value) }}
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
                            value={reple}
                            onChange={(e) => { setReple(e.currentTarget.value) }}
                            required
                        />
                        <button className="comment_btn" onClick={(e) => { submitHandler(e) }}>댓글쓰기</button>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default RepleWrite
