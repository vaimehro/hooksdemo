import {useState,useEffect}from 'react';
import useTitleCustomHook from "./useTitleCustomHook";

const DocTitleOne = () => {
  const [count,setCount]= useState(0);
    useTitleCustomHook(count);

    return (
        <div>
            <button onClick={()=>setCount(count+1)}>count : {count}</button>
        </div>
    );
};

export default DocTitleOne;