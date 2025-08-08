type props = {
    children: React.ReactNode
    className?: string
}
const PageComponent = ({ children, className = '' }: props) => {
    const css = `snap-start min-h-screen py-5 sm:py-20 flex items-center justify-center flex-col ${className}`
    return (
        <section className={css}>
            {children}
        </section>
    )
}

export default PageComponent