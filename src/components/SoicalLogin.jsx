import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SoicalLogin = () => {
  const {googleLogin, githubLogin} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const login = media => {
    media()
    .then(res => {
      console.log(res.user);
      navigate(location.state || '/');
    })
    .catch(err => console.error(err))
  }
  return (
    <div>
      <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
        Or
      </div>
      <div className="flex flex-col items-center gap-3">
        <button onClick={() => login(googleLogin)} className="btn btn-outline w-full btn-sm">
          <FcGoogle className="text-xl" />
          Sign in with Google
        </button>
        <button onClick={() => login(githubLogin)} className="btn btn-outline w-full btn-sm">
          <AiFillGithub className="text-xl" />
          Sign in with Github
        </button>
      </div>
    </div>
  );
};

export default SoicalLogin;
