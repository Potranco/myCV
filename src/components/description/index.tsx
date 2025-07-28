import UseProfile from "@/hooks/useProfile";

const descripcion = () => {
    const { profile, loaded } = UseProfile();

    if (!loaded) return <div>Loading...</div>;
    if (!profile) return <div>No user data available</div>;

    return (
        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Sobre mí</h2>
            <p className="text-gray-700">
                {profile.perfil}
            </p>
        </section>
    );
}

export default descripcion;
