"use client";

import Input from "@/components/Inputs/Input";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import ServiceAuth from "@/components/ServiceAuth";
import { getUser, registerUser } from "@/services/user";
import { useMutation, useQuery } from "@tanstack/react-query";
import { userActions } from "@/store/reducers/user";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
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
    watch,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ name, email, password }) => {
      return registerUser({ name, email, password });
    },
    onSuccess: (data) => {
      if (data?.user) {
        toast.success("Signed Up Successfully!");
        dispatch(userActions.setUserInfo(data.user));
      }
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  const submitHandler = (data) => {
    const { name, email, password } = data;

    mutate({ name, email, password });
  };

  const password = watch("password");

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
      <div className="flex-1 flex flex-col justify-center items-center gap-6 md:max-h-screen md:overflow-y-auto py-8">
        <h1 className="font-happy capitalize md:text-4xl text-3xl md:mt-48">
          let's get started
        </h1>
        <div className="w-full flex items-center justify-center mt-6">
          <form
            className="w-full max-w-[360px] h-full flex flex-col items-center gap-4"
            onSubmit={handleSubmit(submitHandler)}
          >
            <div className="w-full relative">
              <input
                type="text"
                id="name"
                {...register("name", {
                  minLength: {
                    value: 1,
                    message: "Name length must be atleast one character",
                  },
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                })}
                className={`peer w-full focus:border-blue-500 p-3 pt-6 font-normal bg-white border-2 rounded-xl outline-none transition disabled:opacity-70 disabled:cursor-not-allowed pl-4
        ${errors["name"] ? "border-rose-500" : "border-neutral-500"} 
        ${errors["name"] ? "focus:border-rose-500" : "focus:border-black"}`}
              />
              <label
                className={`capitalize absolute font-medium text-sm duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[80%] peer-focus:-translate-y-4 ${
                  errors["name"] ? "text-rose-500" : "text-slate-700"
                }`}
              >
                Name
              </label>
            </div>
            {errors.name?.message && (
              <p className="text-red-500 text-xs w-full font-medium">
                {errors.name?.message}
              </p>
            )}
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
                  minLength: {
                    value: 6,
                    message: "Password length must be atleast six characters",
                  },
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
            <div className="w-full relative">
              <input
                type="password"
                id="confirmPassword"
                {...register("confirmPassword", {
                  required: {
                    value: true,
                    message: "Confirm Password is required",
                  },
                  validate: (value) => {
                    if (value !== password) {
                      return "Password does not match";
                    }
                  },
                })}
                className={`peer w-full focus:border-blue-500 p-3 pt-6 font-normal bg-white border-2 rounded-xl outline-none transition disabled:opacity-70 disabled:cursor-not-allowed pl-4
        ${errors["confirmPassword"] ? "border-rose-500" : "border-neutral-500"} 
        ${
          errors["confirmPassword"]
            ? "focus:border-rose-500"
            : "focus:border-black"
        }`}
              />
              <label
                className={`capitalize absolute font-medium text-sm duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[80%] peer-focus:-translate-y-4 ${
                  errors["confirmPassword"] ? "text-rose-500" : "text-slate-700"
                }`}
              >
                Confirm Password
              </label>
            </div>
            {errors.confirmPassword?.message && (
              <p className="text-red-500 text-xs w-full font-medium">
                {errors.confirmPassword?.message}
              </p>
            )}
            <button
              className="font-amalde bg-[#0E72ED] transition-all duration-150 hover:bg-[#176bd3] flex items-center justify-center w-full text-white py-2 rounded-xl text-base capitalize font-medium"
              type="submit"
            >
              {isLoading ? "creating your account wait..." : "continue"}
            </button>
            <h4 className="text-neutral-500 text-sm md:text-base">
              By proceeding, I agree to the{" "}
              <Link href="/" className="text-[#0E72ED] ">
                Accredian's Privacy Statement
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
          Accredian is protected by reCAPTCHA and the{" "}
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
