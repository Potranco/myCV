
import useProfile from "../../hooks/useProfile";

const CardUser = () => {
  const { profile } = useProfile();

  
  if (!profile) return <div>No user data available</div>;

  return (
    <div className="card-user">
      <section className="bg-accent shadow-md rounded-xl p-6 flex items-center gap-6 mb-8">
        <img src={`${import.meta.env.BASE_URL}/perfil.png`} alt="Foto de perfil" className="rounded-full w-28 h-28" />
        <div>
          <h1 className="text-2xl font-bold sm:text-4xl">{profile?.name}</h1>
          <p className="text-text">{profile?.titulo}</p>
          <p className="text-sm text-text mt-1">{profile?.ubicacion} · {profile?.email} · {profile?.github}</p>
        </div>
      </section>
    </div>
  );
}

export default CardUser;
      