import { useEffect, useState } from "react";
import { useData } from "../context/data";

const useExpirience = () => {
    const { state } = useData()
    const [experience, setExperience] = useState<any[]>([]);

    useEffect(() => {
        const { cv, status } = state
        setExperience(status === 'success' ? cv.experiencia : []);
    }, [state]);

    const getExperience = async () => {
        return experience;
    };

    return {
        experience,
        getExperience
    };
}

export default useExpirience;