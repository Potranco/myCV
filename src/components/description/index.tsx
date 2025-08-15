import UseProfile from "@/hooks/useProfile";
import Page from '../page/page'

const Descripcion = () => {
    const { profile } = UseProfile();

    if (!profile) return <div>No user data available</div>;

    return (
        <Page>
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Sobre mí</h2>
                <p className="text-text">
                    {profile.perfil}
                </p>
            </section>
        </Page>
    );
}

export default Descripcion;
