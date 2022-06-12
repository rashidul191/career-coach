import React from "react";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const SocialSignIn = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, userGithub, loadingGithub, errorGithub] =
    useSignInWithGithub(auth);
  const [signInWithFacebook, userFb, loadingFb, errorFb] =
    useSignInWithFacebook(auth);

  // console.log(userGoogle, userGithub, userFb);
  
  if (userGoogle || userGithub || userFb) {
    navigate("/");
  }

  if (loadingGoogle || loadingGithub || loadingFb) {
    return <Loading></Loading>;
  }

  let errorElement;
  if (errorGoogle || errorGithub || errorFb) {
    errorElement = (
      <p className="text-center text-danger">
        {errorGoogle?.message} {errorGithub?.message} {errorFb?.menubar}
      </p>
    );
  }

  return (
    <div className="text-center w-50 mx-auto">
      {errorElement}
      <div className="d-flex justify-content-center align-items-center">
        <div style={{ height: "2px" }} className="w-25 bg-primary"></div>
        <p className="px-4 mt-2">or</p>
        <div style={{ height: "2px" }} className="w-25 bg-primary"></div>
      </div>

      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info w-50 my-2"
        >
          Google Sign In
        </button>
      </div>

      <div>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-primary w-50 my-2"
        >
          GitHub Sign In
        </button>
      </div>

      <div>
        <button
          onClick={() => signInWithFacebook()}
          className="btn btn-success w-50 my-2"
        >
          Facebook Sign In
        </button>
      </div>
    </div>
  );
};

export default SocialSignIn;
