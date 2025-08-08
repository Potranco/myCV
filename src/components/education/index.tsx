import useFormacion from '@/hooks/useFormacion'
import PageComponent from '../page/page';

const Education = () => {
    const { formacion } = useFormacion();

    return (
        <PageComponent>
            <h2 className="text-xl font-semibold mb-2">Educación</h2>
            <ul>
                {formacion.map((course:string, index:number) => (
                    <li key={`${index}-education`}>
                        <p className="font-medium text-text">{course}</p>
                    </li>
                ))}
            </ul>
        </PageComponent>
    );
}

export default Education;