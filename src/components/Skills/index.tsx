import useSkills from '@/hooks/useSkills'

const skill_color = {
    frontend: "bg-blue-100 text-blue-800",
};

const Skills = () => {
    const {skills} = useSkills()
    
    const createSkillItem = (skills: Array<string>) => {
        return (
            <ul className="flex flex-wrap gap-2 text-sm">
                {skills.map(skill => (
                    <li key={skill} className={`${skill_color.frontend} px-3 py-1 m-1 rounded-full`}>
                        {skill}
                    </li>
                ))}
            </ul>
        );
    };

    if (skills == null) return <div>Error...</div>
    
    return (
        <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Habilidades</h2>
        {createSkillItem(skills['frontend'])}
        {createSkillItem(skills['entornos'])}
        {createSkillItem(skills['testing'])}
        {createSkillItem(skills['versionado'])}
        {createSkillItem(skills['otros'])}        
      </section>
    )
}

export default Skills;