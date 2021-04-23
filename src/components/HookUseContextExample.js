import React from 'react';
import UseContextChild from "./UseContextChild";

export const UserContext = React.createContext()
export const DeptContext = React.createContext()

const HookUseContextExample = () => {

    return (
        <div>
            <UserContext.Provider value={"Vaibhav"}>
                <DeptContext.Provider value={"Finance"}>
                    <UseContextChild/>
                </DeptContext.Provider>
            </UserContext.Provider>

        </div>
    );
};

export default HookUseContextExample;