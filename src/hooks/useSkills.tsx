import { useEffect, useState } from "react";
import { useData } from "../context/data";

function useSkills() {
    const { user, loaded } = useData();
    const [skills, setSkills] = useState<any | null>(null);

    useEffect(() => {
        console.log('user', user)
        setSkills(loaded ? user.stack_principal : null);
    }, [user, loaded]);

    return {
        skills,
        loaded
    };
}

export default useSkills;