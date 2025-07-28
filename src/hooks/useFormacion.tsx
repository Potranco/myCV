import { useEffect, useState } from "react";
import { useData } from "../context/data";

const useFormacion = () => {
    const { user, loaded } = useData()
    const [formacion, setFormacion] = useState<any[]>([]);

    useEffect(() => {
        if (loaded) {
            setFormacion(user.formacion || []);
        } else {
            setFormacion([]);
        }
    }, [user, loaded]);

    const getFormacion = async () => {
        return formacion;
    };

    return {
        formacion,
        getFormacion
    };
}

export default useFormacion;