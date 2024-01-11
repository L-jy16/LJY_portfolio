import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

import moment from "moment";
import "moment/locale/ko"


const RepleContent = (props) => {
    const [modalFlag, setModalFlag] = useState(false);
    const [editFlag, setEditFlag] = useState(false);

    const [reple, setReple] = useState(props.reple.reple);  // 댓글 불러오기 및 수정
    const [password, setPassword] = useState(""); // 비번 입력
    const [showPasswordError, setShowPasswordError] = useState(false);
    const [repleInput, setRepleInput] = useState(false); // 수정 => 


    const ref = useRef();
    useOnClickOutside(ref, () => setModalFlag(false))

    const modifybtn = () => {
        setModalFlag(true);
        setEditFlag(true);
    };

    const deletebtn = (e) => {
        setModalFlag(true);
        setEditFlag(false);
        e.preventDefault()

    };

    const closeModal = () => {
        setModalFlag(false);
        setPassword(""); // 모달이 닫힐 때 비밀번호 상태 초기화
        setShowPasswordError(false); // 오류 메시지 초기화
    };

    const submitAction = () => {
        if (password === props.reple.password) {
            setModalFlag(false)
            setShowPasswordError(false);
            setRepleInput(true);
            setPassword("");
            if (!editFlag) {
                if (window.confirm("정말로 삭제 하시겠습니까?")) {
                    let body = {
                        repleId: props.reple._id,
                        postId: props.reple.postId
                    }

                    axios.post("/api/reple/delete", body)
                        .then((response) => {
                            if (response.data.success) {
                                alert("댓글이 삭제되었습니다.");
                                // setRefreshFlag(true);
                            }
                        })
                        .catch((err) => {
                            console.log(err);
                            alert("댓글을 삭제하는데 실패하였습니다.");
                        })
                }
            }
        } else {
            setShowPasswordError(true);
            window.confirm("비밀번호를 확인해주세요.")
        }
    };

    const modiHandler = (e) => {
        e.preventDefault();
        let body = {
            repleId: props.reple._id,
            reple: reple,
            nickName: props.reple.nickName,
        }

        axios.post("/api/reple/edit", body)
            .then((response) => {
                if (response.data.success) {
                    alert("댓글 수정이 성공하였습니다.")
                    setRepleInput(false);
                } else {
                    alert("댓글 수정이 실패하였습니다.")
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            <div className="reple">
                {repleInput && editFlag ? (
                    <form className='editinput'>
                        <input
                            className='editText'
                            type="text"
                            value={reple}
                            onChange={(e) => { setReple(e.currentTarget.value) }}
                        />
                        {/*  수정하기를 누르면 수정하기, 취소하기 버튼 안보이게 숨김 */}
                        <span className='edit' onClick={(e) => { modiHandler(e) }}>수정</span>
                        <span className='editdelete' onClick={(e) => {
                            e.preventDefault();
                            setEditFlag(false);
                        }}>취소</span>
                    </form>
                ) : (
                    <p className='reple_info'>{reple}</p>
                )}
                <div className='user_info'>
                    <span>{props.reple.nickName}</span>
                    <em>{moment(props.reple.createdAt).format('L')}</em>
                    {/* 최대글자수 10개 */}
                    <button className='modi' onClick={() => modifybtn()}>수정</button>
                    <button className='del' onClick={(e) => { deletebtn(e) }}>삭제</button>
                </div>

            </div>

            {
                modalFlag && (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={closeModal}>
                                X
                            </span>
                            <h2>비밀번호 입력해주세요.</h2>
                            <div className='password_input'>
                                <label className='blind'>Password:</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button onClick={submitAction}>Submit</button>
                                {showPasswordError}
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

function useOnClickOutside(ref, handler) {
    useEffect(() => {
        const listener = (event) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler]);
}

export default RepleContent
