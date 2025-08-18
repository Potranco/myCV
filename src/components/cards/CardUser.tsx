import useProfile from "../../hooks/useProfile";
import GitHubIcon from "../buttons/RRSS/GithubIcon";
import LinkedinIcon from "../buttons/RRSS/LinkedinIcon";

const CardUser = () => {
  const { profile } = useProfile();
  
  if (!profile) return <div>No user data available</div>;

  return (
    <div id="init" className="p-0 flex mb-8 flex-col sm:w-sm bg-secondary rounded-3xl border-1">
      <img src={`${import.meta.env.BASE_URL}/perfil.png`} alt="Foto de perfil" className="object-center object-cover w-full max-h-48 rounded-t-3xl" />
      <div className="p-6">
        <h1 className="text-2xl font-bold text-primary leading-tight">{profile?.name}</h1>
        <p className="text-text">{profile?.titulo}</p>
        <ul className="text-sm text-text mt-1 flex flex-col gap-1">
          <li>{profile?.email}</li>
          <li className="flex">
            <a href={profile?.linkedin} rel="noopener noreferrer" target="_blank" title="Perfil en Linkedin">
              <LinkedinIcon />
            </a>
            <a href={profile?.github} rel="noopener noreferrer" target="_blank" title="Perfil Github">
              <GitHubIcon />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CardUser;
      