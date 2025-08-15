import { useEffect, useState } from "react";
import { useData } from "../context/data";

function useProfile() {
    const { state } = useData();
    const [profile, setProfile] = useState<any | null>(null);

    useEffect(() => {
        const {cv} = state
       
        if (cv !== undefined) {
            setProfile({
                "name": cv.name,
                "titulo": cv.titulo,
                "ubicacion": cv.ubicacion,
                "email": cv.email,
                "telefono": cv.telefono,
                "github": cv.github,
                "linkeding": cv.linkeding,
                "perfil": cv.perfil
            });
        } else {
            setProfile(null);
        }
    }, [state]);

    const getProfile = async () => {
        return profile;
    };

    return {
        profile,
        getProfile
    };
}

export default useProfile;