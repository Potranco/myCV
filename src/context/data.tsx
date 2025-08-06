import { 
  createContext,
  useEffect,
  useContext,
  useReducer
 } from "react";
import { initialCVState, reducer} from '../reducers/cvReducer'
import getCv from "../api/getCv";

interface DataContextType {
  state: any | undefined;
  clean: () => void;
  setUser: (user: any | undefined) => void;
}

const defaultData: DataContextType = {
  state: undefined,
  clean: () => {},
  setUser: () => {},
};

const DataContext = createContext<DataContextType>(defaultData);

const DataProvider = ({ children }: { children: React.ReactNode;}) => {
  const [state, dispatch] = useReducer(reducer, initialCVState)
  
  useEffect(() => {
    if (state.status === "idle") setUser()
  }, [])

  const clean = () => dispatch({type: 'CLEAN', payload: state});

  const setUser = () => {
    dispatch({type: 'FETCH_START'})
    getCv()
      .then(res => {
        dispatch({type: 'FETCH_SUCCESS', payload: res})
      })
      .catch(e => {
        dispatch({type: 'FETCH_ERROR', error: e.message})
      })
      
  }

  const value = { 
    state, clean, setUser
  }
  
  return (
    <DataContext.Provider value={value}>
        {children}
    </DataContext.Provider>
  );
};

const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData not loaded");
  }
  return context;
};

export {
  DataProvider,
  useData,
  type DataContextType,
}