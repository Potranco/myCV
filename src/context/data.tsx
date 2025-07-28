import { 
  createContext,
  useState,
  useEffect,
  useContext } from "react";

import default_data from "./default_data.json";

interface DataContextType {
  user: any | undefined;
  loaded: boolean;
  clean: () => void;
  setUser: (user: any | undefined) => void;
}

const defaultData: DataContextType = {
  user: undefined,
  loaded: false,
  clean: () => {},
  setUser: () => {},
};

const DataContext = createContext<DataContextType>(defaultData);

const DataProvider = ({ children }: { children: React.ReactNode;}) => {
  const [user, setUser] = useState<any | undefined>(undefined);
  const [loaded, setLoaded] = useState(false);
  // const [error, setError] = useState(200)
  
  useEffect(() => {
    if (user === undefined) {
        setUser(default_data)
        setLoaded(true);
    }
  }, [user])

  const clean = () => {
    setUser(undefined)
    setLoaded(false)
  };

  const value = { 
    user, loaded, clean, setUser
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