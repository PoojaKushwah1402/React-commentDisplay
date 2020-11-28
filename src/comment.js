import React from 'react';
import './apps.css';


const Cmnt = ( props ) => {
    return (
        <div className='main' >
                 <img className='image' src={props.img} /> 
                <div className = 'right'>
                    <div className = 'heading'>
                        <name className = 'name'>{props.name}</name>
                        <time className ='time'>{props.time}</time>
                    </div>
                    <div className='comment'>
                        <p>{props.comment}</p>
                    </div>
                    
                </div>
        </div>
    )
}

export default Cmnt;