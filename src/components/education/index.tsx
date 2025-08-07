import useFormacion from '@/hooks/useFormacion'

const Education = () => {
    const { formacion } = useFormacion();

    return (
        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Educación</h2>
            <ul>
                {formacion.map((course:string, index:number) => (
                    <li key={`${index}-education`}>
                        <p className="font-medium text-text">{course}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Education;