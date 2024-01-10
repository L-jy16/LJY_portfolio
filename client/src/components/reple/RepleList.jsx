import React, { useEffect, useRef, useState } from 'react'
import RepleContent from './RepleContent'
import axios from 'axios';

const RepleList = ({ position, submitHandler }) => {
    const [repleList, setRepleList] = useState([]);
    const commentViewRef = useRef(null);

    const fetchRepleData = async () => {
        try {
            const response = await axios.post("/api/reple/getReple");
            if (response.data.success) {
                setRepleList([...response.data.repleList]);
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchRepleData();
    }, [submitHandler]);

    return (
        <div className={`reple_list ${position}`} ref={commentViewRef}>
            {repleList.map((reple, idx) => (
                <RepleContent reple={reple} key={idx} fetchRepleData={fetchRepleData} />
            ))}
        </div>
    )
}

export default RepleList
