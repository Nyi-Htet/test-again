import React from 'react';
import style from './CountItem.module.css'

// const style = {
//     background : "lightgreen",
//     color: "blue",
//     height : "30px"
// }
// use with // style={style}

const CountItems = ({id , title , handleDelete, handleUpdate}) => {
    return (  
        <div >
            <div className={style.title}>
                <span >
                    <input className={style.input} type='text' value={title} onChange={e=> handleUpdate(id, e.target.value)}/>
                </span>
                <button className={style.delete} onClick={() =>handleDelete(id)}>Delete</button>
            </div>
            
        </div>
    );
}
 
export default CountItems;