import { useEffect, useState } from "react";
import { useData } from "../context/data";

const useIdiomas = () => {
    const { user, loaded } = useData()
    const [idiomas, setIdiomas] = useState<any[]>([]);

    useEffect(() => {
        setIdiomas(loaded
            ? user.idiomas || []
            : []
        );
    }, [user, loaded]);

    const getIdiomas = async () => {
        return idiomas;
    };

    return {
        idiomas,
        getIdiomas
    };
}

export default useIdiomas;