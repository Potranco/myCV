type props = {
    onChangeTheme: () => void
    theme: string
}

const Footer = ({onChangeTheme, theme}:props) => {
    return (
        <section id="footer" className="snap-start mt-10 text-sm text-text">
            <p className='flex flex-row gap-2'>
              <span>© 2025 Chema</span> - 
              <a href="mailto:chema@email.com" className="text-blue-600 underline">Contáctame</a>
              - 
              <span onClick={onChangeTheme} className=" text-blue-600 uppercase">{theme}</span>
            </p>
        </section>
    )
}

export default Footer