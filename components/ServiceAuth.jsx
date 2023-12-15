import { useRouter } from "next/navigation";
import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const ServiceAuth = () => {
  const router = useRouter();

  const handleGithubClick = () => {
    router.push(
      "https://github.com/login/oauth/authorize?client_id=cbaff9aacf16b5deac5d&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Fapi%2Fusers%2Fauth%2Fgithub&scope=user%3Aemail&state="
    );
  };

  const handleGoogleClick = () => {
    router.push(
      "https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Fapi%2Fusers%2Fauth%2Fgoogle&client_id=1005011060168-utsednj5kcv9pltvak00mebja88bcp05.apps.googleusercontent.com&access_type=offline&response_type=code&prompt=consent&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email"
    );
  };
  const handleFacebookClick = () => {};

  return (
    <div className="font-amalde text-base font-medium flex items-center justify-center gap-6 mt-2">
      <button className="flex flex-col items-center justify-center gap-2">
        <div
          className="hover:bg-black/5 transition-all duration-150 p-3 border border-neutral-300 rounded-xl"
        >
          <FcGoogle />
        </div>
        Google
      </button>
      <button className="flex flex-col items-center justify-center gap-2">
        <div
          className="hover:bg-black/5 transition-all duration-150 p-3 border border-neutral-300 rounded-xl"
        >
          <FaGithub />
        </div>
        Github
      </button>
      <button className="flex flex-col items-center justify-center gap-2">
        <div
          className="hover:bg-black/5 transition-all duration-150 p-3 border border-neutral-300 rounded-xl"
          onClick={handleFacebookClick}
        >
          <FaFacebook className="text-blue-600" />
        </div>
        Facebook
      </button>
    </div>
  );
};

export default ServiceAuth;
