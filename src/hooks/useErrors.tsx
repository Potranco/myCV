import { useContext } from "react";
import { ErrorsContext } from "../context/ErrorsContext";

function useErrors() {
    const data = useContext(ErrorsContext);

    const addError = (error: any) => {
        if (data?.errors) {
            const newError = {data: error, emit: false}
            data?.addError(newError);
        }        
    }

    return {
        errors: data?.errors,
        cleanErrors: () => data?.cleanErrors(),
        addError
    }    
}
export default useErrors