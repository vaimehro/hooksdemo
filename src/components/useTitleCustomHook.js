import {useEffect} from 'react';

const useTitleCustomHook = (count) => {
    useEffect(()=>{
        document.title=count;
    },[count]);

};

export default useTitleCustomHook;