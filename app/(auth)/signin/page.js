"use client";

import Input from "@/components/Inputs/Input";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import ServiceAuth from "@/components/ServiceAuth";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { userActions } from "@/store/reducers/user";
import { getUser, loginUser } from "@/services/user";
import toast from "react-hot-toast";

const page = () => {
  const router = useRouter();

  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);

  const { data, isFetching } = useQuery({
    queryFn: () => getUser(),
    queryKey: ["profile"],
  });

  useEffect(() => {
    if (data?.user && !isFetching) {
      dispatch(userActions.setUserInfo(data?.user));
    }
  }, [data]);

  useEffect(() => {
    if (userInfo) {
      router.push("/");
    }
  }, [userInfo]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ email, password }) => {
      return loginUser({ email, password });
    },
    onSuccess: (data) => {
      if (data?.user) {
        toast.success("Signed In Successfully!");
        dispatch(userActions.setUserInfo(data.user));
      }
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  const submitHandler = (data) => {
    const { email, password } = data;

    mutate({ email, password });
  };

  return (
    <div className="w-full h-screen md:h-[91vh] flex md:flex-row flex-col">
      <div className="flex-[0.6] hidden md:flex items-center justify-center bg-dullWhite">
        <Image
          priority
          width={600}
          height={600}
          src="https://st1.zoom.us/fe-static/fe-signup-login-active/img/banner-step-1.2faf107a.png"
          alt="side_image"
          className="w-[70%]"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center gap-6 md:max-h-screen md:overflow-y-auto md:py-8">
        <h1 className="font-happy capitalize text-4xl md:mt-48">sign in</h1>
        <div className="w-full flex items-center justify-center mt-6">
          <form
            className="w-full max-w-[360px] h-full flex flex-col items-center gap-4"
            onSubmit={handleSubmit(submitHandler)}
          >
            <div className="w-full relative">
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter a valid email",
                  },
                })}
                className={`peer w-full focus:border-blue-500 p-3 pt-6 font-normal bg-white border-2 rounded-xl outline-none transition disabled:opacity-70 disabled:cursor-not-allowed pl-4
        ${errors["email"] ? "border-rose-500" : "border-neutral-500"} 
        ${errors["email"] ? "focus:border-rose-500" : "focus:border-black"}`}
              />
              <label
                className={`capitalize absolute font-medium text-sm duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[80%] peer-focus:-translate-y-4 ${
                  errors["email"] ? "text-rose-500" : "text-slate-700"
                }`}
              >
                Email
              </label>
            </div>
            {errors.email?.message && (
              <p className="text-red-500 text-xs w-full font-medium">
                {errors.email?.message}
              </p>
            )}
            <div className="w-full relative">
              <input
                type="password"
                id="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                })}
                className={`peer w-full focus:border-blue-500 p-3 pt-6 font-normal bg-white border-2 rounded-xl outline-none transition disabled:opacity-70 disabled:cursor-not-allowed pl-4
        ${errors["password"] ? "border-rose-500" : "border-neutral-500"} 
        ${errors["password"] ? "focus:border-rose-500" : "focus:border-black"}`}
              />
              <label
                className={`capitalize absolute font-medium text-sm duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[80%] peer-focus:-translate-y-4 ${
                  errors["password"] ? "text-rose-500" : "text-slate-700"
                }`}
              >
                Password
              </label>
            </div>
            {errors.password?.message && (
              <p className="text-red-500 text-xs w-full font-medium">
                {errors.password?.message}
              </p>
            )}
            <div className="w-full flex items-center justify-between">
              <Link className="text-[#0E72ED]" href="/">
                Forgot password?
              </Link>
              <Link className="text-[#0E72ED]" href="/">
                Help
              </Link>
            </div>
            <button
              className="font-amalde bg-[#0E72ED] transition-all duration-150 hover:bg-[#176bd3] flex items-center justify-center w-full text-white py-2 rounded-xl text-base capitalize font-medium"
              type="submit"
            >
              {isLoading ? "please wait..." : "sign in"}
            </button>

            <h4 className="text-neutral-500 text-sm md:text-base">
              By signing in, I agree to the{" "}
              <Link href="/" className="text-[#0E72ED] ">
                Mooz's Privacy Statement
              </Link>{" "}
              and{" "}
              <Link href="/" className="text-[#0E72ED] ">
                Terms of Service.
              </Link>
            </h4>
          </form>
        </div>
        {/* middle line */}
        <div className="w-full max-w-[360px] flex items-center justify-center gap-2">
          <div className="flex-1 border-b border-neutral-500/40" />
          <h4 className="flex-1 whitespace-nowrap font-amalde text-neutral-400">
            Or sign in with
          </h4>
          <div className="flex-1 border-b border-neutral-500/40" />
        </div>
        <ServiceAuth />
        <h4 className="w-full max-w-[360px] text-neutral-500 text-sm md:text-base mt-2">
          Mooz is protected by reCAPTCHA and the{" "}
          <Link href="/" className="text-[#0E72ED] ">
            Moogle Privacy Statement
          </Link>{" "}
          and{" "}
          <Link href="/" className="text-[#0E72ED] ">
            Terms of Service.
          </Link>{" "}
        </h4>
      </div>
    </div>
  );
};

// https://st1.zoom.us/fe-static/fe-signup-login-active/img/banner-step-1.2faf107a.png

export default page;
