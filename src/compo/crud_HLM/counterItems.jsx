import React, { Component, useState, Fragment, useEffect } from "react";
import style from "./countersCss.module.css";

const CounterItems = ({ id, task, handleDelete, handleUpdate }) => {
    const [show, setShow] = useState(false);
    const [editTxt, setEditTxt] = useState("");

    useEffect(() => {
        console.log("useEffect")
        return ()=> {
            console.log("return ES6")
        }
    } , []) //just testing

    const update = () => {
        handleUpdate({ id, title: editTxt });
        setShow(false);
    };

    let element = task;
    if (show) {
        element = (
            <>
                <input
                    type="text"
                    defaultValue={task}
                    onChange={(e) => setEditTxt(e.target.value)}
                    className={style.updateText}
                    
                />
                <button className={style.update} onClick={update}>Update</button>
            </>
        );
    }

    return (
        <React.Fragment>
            <li className={style.line}>
                <span className={style.title}>{element}</span>
                
                <button
                    className={style.delete}
                    onClick={() => handleDelete(id)}
                >
                    X
                </button>

                <button className={style.edit} onClick={() => setShow(!show)}>
                    Edit
                </button>
                {
                    // console.log(show)
                }
            </li>
        </React.Fragment>
    );
};

export default CounterItems;
