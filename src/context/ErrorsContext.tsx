import { 
    createContext,
    useState,
    ReactNode
} from "react";
    
  
  export interface ErrorsContextType {
    errors: any[];
    addError: (error: any) => void;
    cleanErrors: () => void;
  }
  
  // Crear el contexto
  export const ErrorsContext = createContext<ErrorsContextType | undefined>(undefined);
  
  // Proveedor del contexto
  export const ErrorsProvider = ({ children }: { children: ReactNode }) => {
    const [errors, setErrors] = useState<any[]>([]);
  
    const addError = (error: any) => {
      setErrors((prevErrors) => [...prevErrors, error]);
    }
  
    const cleanErrors = () => {
      if (errors.length !== 0) {
          setErrors(prevErrors => prevErrors.filter(error => error.emit === false));
      }
    }
  
    const value = { errors, addError, cleanErrors }
    return (
      <ErrorsContext.Provider value={value}>
        {children}
      </ErrorsContext.Provider>
    );
  };
  