import useExpirience from "@/hooks/useExpirience";
import PageComponent from "../page/page";
import Carousel from "../Carousel/Carousel.tsx";
import { Card, CardHeader, CardTitle, CardDescription, CardContent} from '../ui/card.tsx'
import { useEffect, useState } from "react";

const Experience = () => {
    const { experience } = useExpirience();
    const [data, setData] = useState<Array<any>>([])

    useEffect(() => {
        const result = experience.map((job, index) => {
            return (
            <Card>
                <CardHeader>
                    <CardTitle>{job.puesto} · {job.empresa}</CardTitle>
                    <CardDescription>{job.fecha} · {job.ubicacion}</CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="list-none text-text text-sm">
                        {job.responsabilidades.map((responsibility:string, idx:number) => (
                            <li className="mb-2" key={`${index}-responsibility-${idx}`}>{responsibility}</li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
            )
        })
        setData(result)
    }, [experience])

    return (
        <PageComponent>
            <h2 id="expirience" className="text-xl font-semibold mb-2">Experiencia</h2>
            <Carousel items={data} />
        </PageComponent>
    );
}

export default Experience;
