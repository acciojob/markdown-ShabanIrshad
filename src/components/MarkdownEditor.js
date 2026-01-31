
import React from 'react';
import ReactMarkdown from "react-markdown";

const MarkdownEditor=({data})=>{
    const {textArea,setTextArea,loading}=data;
    return (
        <>
        <div className='textarea'>
            <textarea  onChange={(e)=>setTextArea(e.target.value)}/>
        </div>
        <div className='preview'>
            {loading?<h6>Loading...</h6>:
            <ReactMarkdown>
                {textArea}
            </ReactMarkdown>}
        </div>
        
        </>
    );

}
export default MarkdownEditor;