import React ,{useState,useEffect} from 'react';

const EffectHooksForConditionalRender = () => {
    const [count,setCount]=useState(0)
    const [name,setName]=useState('')
    useEffect(()=>{
        console.log("Document Title changed")
        document.title=`Request Number ${count} `
    },[count])
    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={()=>setCount(count+1)}>Count {count}</button>
        </div>
    );
};

export default EffectHooksForConditionalRender;