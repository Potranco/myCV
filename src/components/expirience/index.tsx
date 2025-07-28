import useExpirience from "@/hooks/useExpirience";

const Experience = () => {
    const { experience } = useExpirience();

    return (
        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Experiencia</h2>
            <ul className="space-y-4">
                {experience.map((job, index) => (
                <li key={`${index}-experience`}>
                    <h3 className="font-semibold">{job.puesto} · {job.empresa}</h3>
                    <p className="text-sm text-gray-600">{job.fecha} · {job.ubicacion}</p>
                    <ul className="list-disc ml-5 text-gray-700 text-sm mt-1">
                        {job.responsabilidades.map((responsibility:string, idx:number) => (
                            <li key={`${index}-responsibility-${idx}`}>{responsibility}</li>
                        ))}
                    </ul>
                </li>
                ))}
            </ul>
        </section>
    );
}

export default Experience;
