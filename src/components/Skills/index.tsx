const skills = [
        "JavaScript",
        "React",
        "Tailwind CSS",
        "TypeScript",
        "Git"
    ];

const Skills = () => {
    const createSkillItem = (skill: string) => {
        return (
            <li key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                {skill}
            </li>
        );
    };

    return (
        <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Habilidades</h2>
        <ul className="flex flex-wrap gap-2 text-sm">
          {skills.map(createSkillItem)}
        </ul>
      </section>
    )
}

export default Skills;