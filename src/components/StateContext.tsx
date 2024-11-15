import { useState, createContext, useContext, ReactNode } from "react";

interface ChildrenProps {
    children : ReactNode;
}

interface ContextProps {
    sidebarOpen: boolean,
    setSidebarOpen: (query: boolean) => void
  }

const StateContext = createContext<ContextProps | undefined>(undefined);

const StateProvider : React.FC<ChildrenProps> = ( {children} ) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return(
        <StateContext.Provider value={ {sidebarOpen, setSidebarOpen} }>
            {children}
        </StateContext.Provider>
    )
}

export default StateProvider;

export const useStateContext = () => {
    const ctx = useContext(StateContext);
    if (ctx === undefined) throw new Error("Outside of provider");
    return ctx;
}