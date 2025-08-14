import useExpirience from "@/hooks/useExpirience";
import PageComponent from "../page/page";
import Carousel from "../Carousel/Carousel";
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
                    <ul className="list-disc ml-5 text-text text-sm mt-1">
                        {job.responsabilidades.map((responsibility:string, idx:number) => (
                            <li key={`${index}-responsibility-${idx}`}>{responsibility}</li>
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
            <Carousel data={data} className=" max-w-xs"/>
        </PageComponent>
    );
}

export default Experience;
