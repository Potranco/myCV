import ButtonTooltip from "./ButtonTooltip"

const PDFButton = () => {
    return (
        <ButtonTooltip
            text='CV en PDF'
            href={`${import.meta.env.BASE_URL}Jose_Maria_Rodriguez_Garcia.pdf`}
            title='Descargar CV en PDF'
            tooltip='Descargar'
        />
    )
}

export default PDFButton