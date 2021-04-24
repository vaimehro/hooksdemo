import React ,{useState} from 'react';

const HookForObject = () => {
    const [name, setName ] = useState({firstName:'',lastName:''})
    return (
        <div>
            <input type="text" value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}/>
            <input type="text"  value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})}/>

            {name.firstName}-{name.lastName}

        </div>
    );
};

export default HookForObject;