import { useEffect, useState } from "react";
import { useData } from "../context/data";

function useSkills() {
    const {state} = useData();
    const [skills, setSkills] = useState<any | null>(null);

    useEffect(() => {
        const {cv, status} = state
        setSkills(status === 'success' ? cv.stack_principal : null);
    }, [state]);

    return {
        skills
    };
}

export default useSkills;