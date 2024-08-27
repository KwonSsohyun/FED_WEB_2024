// ▶ useContext
import React, { useState } from 'react';

// 전역 정보
const Context = React.createContext({value:'', changer:(value:string)=>{}});

interface Props {
    children: JSX.Element[] | JSX.Element
}

const Provider = (props: Props) => {

    const [value, changer] = useState('dark');

    return <Context.Provider value={{value, changer}}>
                {props.children}
            </Context.Provider>
}

export { Provider };
export default Context;