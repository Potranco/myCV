import useFormacion from '@/hooks/useFormacion'
import PageComponent from '../page/page';
import './style.css'

const Education = () => {
    const { formacion } = useFormacion();

    return (
        <PageComponent>
            <h2 id="education" className="text-xl font-semibold mb-2">Educación</h2>
            <ul className='Education-list'>
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