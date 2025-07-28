import { useEffect, useState } from "react";
import { useData } from "../context/data";

const useExpirience = () => {
    const { user, loaded } = useData()
    const [experience, setExperience] = useState<any[]>([]);

    useEffect(() => {
        if (loaded) {
            setExperience(user.experiencia || []);
        } else {
            setExperience([]);
        }
    }, [user, loaded]);

    const getExperience = async () => {
        return experience;
    };

    return {
        experience,
        getExperience
    };
}

export default useExpirience;