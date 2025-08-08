import UseProfile from "@/hooks/useProfile";

const Descripcion = () => {
    const { profile } = UseProfile();

    if (!profile) return <div>No user data available</div>;

    return (
        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Sobre mí</h2>
            <p className="text-text">
                {profile.perfil}
            </p>
        </section>
    );
}

export default Descripcion;
