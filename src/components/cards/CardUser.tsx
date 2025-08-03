
import useProfile from "../../hooks/useProfile";

const CardUser = () => {
  const { profile, loaded } = useProfile();

  if (!loaded) return <div>Loading...</div>;
  if (!profile) return <div>No user data available</div>;

  return (
    <div className="card-user">
      <section className="bg-white shadow-md rounded-xl p-6 flex items-center gap-6 mb-8">
        <img src={`${import.meta.env.BASE_URL}/perfil.png`} alt="Foto de perfil" className="rounded-full w-28 h-28" />
        <div>
          <h1 className="text-2xl font-bold">{profile?.name}</h1>
          <p className="text-gray-600">{profile?.titulo}</p>
          <p className="text-sm text-gray-500 mt-1">{profile?.ubicacion} · {profile?.email} · {profile?.github}</p>
        </div>
      </section>
    </div>
  );
}

export default CardUser;
      