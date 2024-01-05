import { createContext, useContext, useReducer } from "react";
import { counterReducer } from "./counter/reducers";
import { counterInitialState } from "./counter/initialState";
import { userReducer } from "./user/reducers";
import { userInitialState } from "./user/initialState";
// Boş merkezi state oluşturuldu
const StoreContext = createContext();

export const useStore = () => useContext(StoreContext);
export const StoreProvider = ({ children }) => {
    // useReducer hook una reducer ve initialState parametre olarak verilir.
    // useReducer hook u ise geriye state i getirecek bir getter ve değiştirecek bir setter oluşturur.
    const [counterState, dispatchCounter] = useReducer(
        counterReducer,
        counterInitialState
    );
    const [userState, dispatchUser] = useReducer(userReducer, userInitialState);
    return (
        <StoreContext.Provider
            value={{ counterState, dispatchCounter, userState, dispatchUser }}
        >
            {children}
        </StoreContext.Provider>
    );
};
