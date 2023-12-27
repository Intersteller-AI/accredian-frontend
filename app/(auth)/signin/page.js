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
import SubmitButt from "@/components/Inputs/Buttons/SubmitButt";
import HoverCard from "@/components/Generals/Cards/HoverCard/HoverCard";
import HoverCard2 from "@/components/Generals/Cards/HoverCard2/HoverCard2";
import StatsCard from "@/components/Generals/Cards/StatsCard/StatsCard";

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
    <div className="w-full min-h-screen flex md:flex-row flex-col">
      <div className="flex-[0.8] flex flex-col justify-center items-center md:overflow-y-auto md:py-8">
        <h1 className="text-4xl font-semibold font-saira text-neutral-900">
          Sign In to Your Account
        </h1>
        <div className="max-w-lg w-full flex flex-col items-center gap-2 mt-16">
          <div className="wave-group">
            <input required type="text" className="input" />
            <span className="bar"></span>
            <label className="label">
              <span className="label-char" style={{ "--index": 0 }}>
                E
              </span>
              <span className="label-char" style={{ "--index": 1 }}>
                m
              </span>
              <span className="label-char" style={{ "--index": 2 }}>
                a
              </span>
              <span className="label-char" style={{ "--index": 3 }}>
                i
              </span>
              <span className="label-char" style={{ "--index": 4 }}>
                l
              </span>
              <span
                className="label-char"
                style={{ "--index": 5, marginLeft: "3px" }}
              >
                A
              </span>
              <span className="label-char" style={{ "--index": 6 }}>
                d
              </span>
              <span className="label-char" style={{ "--index": 7 }}>
                d
              </span>
              <span className="label-char" style={{ "--index": 8 }}>
                r
              </span>
              <span className="label-char" style={{ "--index": 9 }}>
                e
              </span>
              <span className="label-char" style={{ "--index": 10 }}>
                s
              </span>
              <span className="label-char" style={{ "--index": 10 }}>
                s
              </span>
            </label>
          </div>
          <div className="wave-group mt-4">
            <input required type="text" className="input" />
            <span className="bar"></span>
            <label className="label">
              <span className="label-char" style={{ "--index": 0 }}>
                P
              </span>
              <span className="label-char" style={{ "--index": 1 }}>
                a
              </span>
              <span className="label-char" style={{ "--index": 2 }}>
                s
              </span>
              <span className="label-char" style={{ "--index": 3 }}>
                s
              </span>
              <span className="label-char" style={{ "--index": 4 }}>
                w
              </span>
              <span className="label-char" style={{ "--index": 5 }}>
                o
              </span>
              <span className="label-char" style={{ "--index": 6 }}>
                r
              </span>
              <span className="label-char" style={{ "--index": 7 }}>
                d
              </span>
            </label>
          </div>
          {/* <h4 className="text-neutral-500 text-sm md:text-base max-w-[400px] w-full mt-8 font-saira">
            New on Accredian?{" "}
            <Link href="/" className="text-[#0E72ED] font-medium">
              Sign up
            </Link>
          </h4> */}
          <h4 className="text-neutral-500 text-sm md:text-base max-w-[400px] w-full mt-5 font-saira">
            <Link href="/" className="text-[#0E72ED] font-medium">
              Forget Password?
            </Link>
          </h4>
          <SubmitButt label="Sign In" />
          {/* middle line */}
          <div className="w-full max-w-[400px] flex items-center justify-center gap-2 mt-6">
            <div className="flex-1 border-b border-neutral-500/40" />
            <h4 className="flex-1 whitespace-nowrap font-amalde text-neutral-400">
              Or Continue in with
            </h4>
            <div className="flex-1 border-b border-neutral-500/40" />
          </div>
          {/* <h3 className="font-semibold font-saira mt-6">Continue with</h3> */}
          <div class="social-links mt-6">
            <div class="social-btn flex-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="24"
                height="24"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                />
              </svg>
              <span>Google</span>
            </div>

            <div id="twitter" class="social-btn flex-center">
              <svg
                viewBox="0 0 24 24"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
              <span>Twitter</span>
            </div>

            <div id="linkedin" class="social-btn flex-center">
              <svg
                viewBox="0 0 24 24"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
              </svg>
              <span>LinkedIn</span>
            </div>

            <div id="github" class="social-btn flex-center">
              <svg
                viewBox="0 0 24 24"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </svg>
              <span>Github</span>
            </div>
          </div>
          <h4 className="w-full max-w-[400px] text-neutral-500 text-sm md:text-base mt-6">
            Accredian is protected by reCAPTCHA and the{" "}
            <Link href="/" className="text-[#0E72ED] ">
              Google Privacy Statement
            </Link>{" "}
            and{" "}
            <Link href="/" className="text-[#0E72ED] ">
              Terms of Service.
            </Link>{" "}
          </h4>
        </div>
      </div>
      <div className="flex-1 hidden md:flex items-center justify-center bg-dullWhite relative">
        <HoverCard />
        <HoverCard2 />
        <StatsCard />
      </div>
    </div>
  );
};

// https://st1.zoom.us/fe-static/fe-signup-login-active/img/banner-step-1.2faf107a.png

export default page;
