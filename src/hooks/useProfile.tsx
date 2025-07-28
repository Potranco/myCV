import { useEffect, useState } from "react";
import { useData } from "../context/data";

function useProfile() {
    const { user, loaded } = useData();
    const [profile, setProfile] = useState<any | null>(null);

    useEffect(() => {
        if (user) {
            setProfile({
                "name": user.name,
                "titulo": user.titulo,
                "ubicacion": user.ubicacion,
                "email": user.email,
                "telefono": user.telefono,
                "github": user.github,
                "perfil": user.perfil
            });
        } else {
            setProfile(null);
        }
    }, [user, loaded]);

    const getProfile = async () => {
        return profile;
    };

    return {
        profile,
        getProfile,
        loaded
    };
}

export default useProfile;