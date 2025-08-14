import useSkills from '@/hooks/useSkills'
import PageComponent from '../page/page';

const skill_color = {
    frontend: " bg-blue-500 text-white",
};

const Skills = () => {
    const {skills} = useSkills()
    
    const createSkillItem = (skills: Array<string>) => {
        return (
            <ul className="flex flex-wrap gap-2 text-sm justify-center mb-6">
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
    <PageComponent className="mb-6">
        <h2 id="skills" className="text-xl font-semibold mb-2">Habilidades</h2>
        {createSkillItem(skills['frontend'])}
        {createSkillItem(skills['entornos'])}
        {createSkillItem(skills['testing'])}
        {createSkillItem(skills['versionado'])}
        {createSkillItem(skills['otros'])}        
    </PageComponent>
    )
}

export default Skills;