import React,{useState, createRef} from 'react'
import {useSearchParams} from "react-router-dom"
import Text from '../components/Text';
import { exportComponentAsJPEG} from 'react-component-export-image';

function EditPage() {
    const[params]=useSearchParams();
    const [count,setCount]=useState(0);

    const memeRef=createRef();

    const addText=()=>{
        setCount(count+1);
    }

    return (
        <div>
            <div style={{width:"1000px",border:"1px solid" }}
             ref={memeRef} className=' meme mt-5 mb-5 '>
            <img src={params.get("url")} width="300px"/>
            {
                Array(count).fill(0).map(e=><Text/>)
            }
            </div>
            <button onClick={addText}>Add Text</button>
            <button variant="success" onClick={(e)=>{exportComponentAsJPEG(memeRef)}}>Save</button>
        </div>
    
  )
}

export default EditPage