import { useEffect, useState } from "react";
import { useData } from "../context/data";

const useIdiomas = () => {
    const { state } = useData()
    const [idiomas, setIdiomas] = useState<any[]>([]);

    useEffect(() => {
        const {cv, status} = state
        setIdiomas(status === 'success'
            ? cv.idiomas || []
            : []
        );
    }, [state]);

    const getIdiomas = async () => {
        return idiomas;
    };

    return {
        idiomas,
        getIdiomas
    };
}

export default useIdiomas;