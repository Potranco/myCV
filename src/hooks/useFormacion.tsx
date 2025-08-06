import { useEffect, useState } from "react";
import { useData } from "../context/data";

const useFormacion = () => {
    const { state } = useData()
    const [formacion, setFormacion] = useState<any[]>([]);

    useEffect(() => {
        const {cv, status} = state
        if (status === 'success') {
            setFormacion(cv.formacion || []);
        } else {
            setFormacion([]);
        }
    }, [state]);

    const getFormacion = async () => {
        return formacion;
    };

    return {
        formacion,
        getFormacion
    };
}

export default useFormacion;