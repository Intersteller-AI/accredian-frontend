"use client";

import Link from "next/link";
import "../../../components/Auth/SignInTwo/SignInTwo.css";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const SignInTwo = () => {
  const textArray = [
    "Cultivating Trailblazing Talent for Future Data and Product Mastery",
    "Shaping Tomorrow's Data and Product Pioneers through Mentorship",
    "Crafting Visionary Leaders in Data and Product Strategy for the Future",
  ];
  const h1Ref = useRef(null);
  const indexRef = useRef(0);

  useEffect(() => {
    // Display the initial texts immediately
    changeText(h1Ref, textArray, indexRef);

    const interval = setInterval(() => {
      gsap.to(h1Ref.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => changeText(h1Ref, textArray, indexRef),
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const changeText = (ref, textArray, indexRef) => {
    ref.current.textContent = textArray[indexRef.current];
    gsap.fromTo(ref.current, { opacity: 0 }, { opacity: 1, duration: 0.5 });
    indexRef.current = (indexRef.current + 1) % textArray.length;
  };

  const [lottie, setLottie] = useState();
  const lottieRef = useRef(null);

  useEffect(() => {
    import("lottie-web").then((Lottie) => setLottie(Lottie.default));
  }, []);

  useEffect(() => {
    if (lottie && lottieRef.current) {
      const animation = lottie.loadAnimation({
        container: lottieRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("@/public/levitating.json"),
      });

      return () => animation.destroy();
    }
  }, [lottie]);

  useEffect(() => {
    gsap.to(lottieRef.current, {
      y: "+=20",
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 2,
    });
  }, []);

  return (
    <div className="w-full lg:h-screen min-h-screen flex lg:flex-row flex-col font-saira px-4 md:px-6 md:py-8">
      <div className="lg:flex-1 w-full h-[60vh] lg:h-full relative hidden md:flex">
        <div className="flex-[0.5] lg:flex-[0.6] bg-grad-2" />
        <div className="w-full absolute top-[10%] lg:top-[20%] left-[10%] max-w-[600px]">
          <h4 className="text-2xl font-semibold">Our Vision</h4>
          <h1
            ref={h1Ref}
            className="font-saira font-semibold text-3xl xl:text-4xl mt-4"
          ></h1>
        </div>
        <div
          className="w-[300px] lg:w-[450px] absolute bottom-[5%] right-[10%]"
          ref={lottieRef}
        ></div>
      </div>
      <div className="flex-[0.8] h-full flex items-center justify-center">
        <div className="w-full flex flex-col items-center gap-2 max-w-[400px]">
          <h1 className="text-3xl font-semibold">Create your new Account</h1>
          <div className="group mt-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              id="email"
              className="icon"
            >
              <path
                fill="#222"
                d="M53.42 53.32H10.58a8.51 8.51 0 0 1-8.5-8.5V19.18a8.51 8.51 0 0 1 8.5-8.5h42.84a8.51 8.51 0 0 1 8.5 8.5v25.64a8.51 8.51 0 0 1-8.5 8.5ZM10.58 13.68a5.5 5.5 0 0 0-5.5 5.5v25.64a5.5 5.5 0 0 0 5.5 5.5h42.84a5.5 5.5 0 0 0 5.5-5.5V19.18a5.5 5.5 0 0 0-5.5-5.5Z"
              ></path>
              <path
                fill="#222"
                d="M32 38.08a8.51 8.51 0 0 1-5.13-1.71L3.52 18.71a1.5 1.5 0 1 1 1.81-2.39L28.68 34a5.55 5.55 0 0 0 6.64 0l23.35-17.68a1.5 1.5 0 1 1 1.81 2.39L37.13 36.37A8.51 8.51 0 0 1 32 38.08Z"
              ></path>
              <path
                fill="#222"
                d="M4.17 49.14a1.5 1.5 0 0 1-1-2.62l18.4-16.41a1.5 1.5 0 0 1 2 2.24L5.17 48.76a1.46 1.46 0 0 1-1 .38zm55.66 0a1.46 1.46 0 0 1-1-.38l-18.4-16.41a1.5 1.5 0 1 1 2-2.24l18.39 16.41a1.5 1.5 0 0 1-1 2.62z"
              ></path>
            </svg>
            <input className="input" type="email" placeholder="Email" />
          </div>
          {/* <div className="group mt-3">
            <svg
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
            >
              <path
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </svg>
            <input className="input" type="password" placeholder="Password" />
          </div> */}
          <div className="w-full flex justify-end">
            <h4 className="text-neutral-400 font-medium text-sm mt-4 hover:underline hover:text-[#4461F2] transition-all duration-150">
              <Link href="/">Need help?</Link>
            </h4>
          </div>
          <div className="w-full mt-4 flex justify-center items-center">
            <button className="anim-butt">
              <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                  >
                    <path
                      fill="#fff"
                      d="M7.168 21.002a3.428 3.428 0 0 1-3.416-3.42V6.418a3.416 3.416 0 0 1 5.124-2.958l9.664 5.581a3.416 3.416 0 0 1 0 5.916l-9.664 5.581a3.41 3.41 0 0 1-1.708.463Z"
                      class="color6563ff svgShape"
                    ></path>
                  </svg>
                </div>
              </div>
              <span className="font-semibold">Continue</span>
            </button>
          </div>
          <div className="w-full mt-4 flex justify-end">
            <h3 className="font-medium text-neutral-400 text-sm">
              Already have an account?{" "}
              <Link className="text-[#4461F2] hover:underline" href="/signin">
                Sign in
              </Link>
            </h3>
          </div>
          <div className="w-full mt-3">
            <h4 className="text-neutral-400 text-sm font-medium">
              Learn more about Accredian's{" "}
              <Link href="/" className="text-[#4461F2]">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <br />
              <Link href="/" className="text-[#4461F2] ">
                Terms of Service.
              </Link>{" "}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInTwo;
