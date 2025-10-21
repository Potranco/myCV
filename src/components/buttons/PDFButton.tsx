import './PDFButton.css'
const PDFButton = () => {
    return (
        <a 
            href={`${import.meta.env.BASE_URL}/Jose_Maria_Rodriguez_Garcia.pdf`}
            className="absolute right-[-130px] bottom-2 z-50"
            target='_blank'
            rel='noopener noreferrer'
            role='link'
        >
        <div className="button" data-tooltip="Descargar" title="Descargar CV en PDF">
            <div className="button-wrapper">
                <div className="text">CV en PDF</div>
                <span className="icon">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        width="2em"
                        height="2em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path>
                    </svg>
                </span>
            </div>
        </div>
        </a>
    )
}

export default PDFButton