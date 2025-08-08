import useProfile from "../../hooks/useProfile";

const CardUser = () => {
  const { profile } = useProfile();
  
  if (!profile) return <div>No user data available</div>;

  return (
    <div className="p-0 flex sm:gap-6 mb-8 flex-col sm:flex-row w-full">
      <img src={`${import.meta.env.BASE_URL}/perfil.png`} alt="Foto de perfil" className="object-center object-cover w-full rounded-t-3xl max-h-48 sm:rounded-full sm:w-28 sm:h-28" />
      <div className="p-6 sm:p-0 ">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">{profile?.name}</h1>
        <p className="text-text">{profile?.titulo}</p>
        <ul className="text-sm text-text mt-1 flex flex-col sm:flex-row gap-1 sm:gap-4">
          <li>{profile?.ubicacion}</li>
          <li>{profile?.email}</li>
          <li>{profile?.github}</li>
        </ul>
      </div>
    </div>
  );
}

export default CardUser;
      