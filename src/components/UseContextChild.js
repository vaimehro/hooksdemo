import React, {useContext} from 'react';
import {UserContext, DeptContext} from './HookUseContextExample'

const UseContextChild = () => {

    const user = useContext(UserContext)
    const dept = useContext(DeptContext)
    return (
        <div>
            {user}-{dept}
        </div>
    );
};

export default UseContextChild;