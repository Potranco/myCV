import useExpirience from "@/hooks/useExpirience";
import PageComponent from "../page/page";

const Experience = () => {
    const { experience } = useExpirience();

    return (
        <PageComponent>
            <h2 className="text-xl font-semibold mb-2">Experiencia</h2>
            <ul className="space-y-4">
                {experience.map((job, index) => (
                <li key={`${index}-experience`}>
                    <h3 className="font-semibold">{job.puesto} · {job.empresa}</h3>
                    <p className="text-sm text-text">{job.fecha} · {job.ubicacion}</p>
                    <ul className="list-disc ml-5 text-text text-sm mt-1">
                        {job.responsabilidades.map((responsibility:string, idx:number) => (
                            <li key={`${index}-responsibility-${idx}`}>{responsibility}</li>
                        ))}
                    </ul>
                </li>
                ))}
            </ul>
        </PageComponent>
    );
}

export default Experience;
