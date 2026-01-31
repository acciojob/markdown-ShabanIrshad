import React, { useEffect, useState } from "react";
import MarkdownEditor from "./MarkdownEditor";
import '../styles/styles.css'

const App = () => {
    const [textArea,setTextArea]=useState('');
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
         console.log('useeffect')
        setLoading(true);
        const timer=setTimeout(()=>{
            setLoading(false);
            console.log('useeffect-in timeout')
        },100);
        return ()=> clearTimeout(timer);
    },[textArea]);
 
  return (
    <div className="app">
        <MarkdownEditor data={{textArea,setTextArea,loading}} />
    </div>
  );
};

export default App;
