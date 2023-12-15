import { logoutUser } from "@/services/user";
import { logout } from "@/store/actions/user";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {

  const [mobileMenu, setMobileMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const dispatch = useDispatch()
  const router = useRouter()
  const [user, setUser] = useState({
    name: "",
    email: "",
    avatar: "",
  });
  const [userModal, setUserModal] = useState(false)

  const controlNavbar = () => {
    if (window.scrollY > 300) {
      window.scrollY > lastScrollY && !mobileMenu
        ? setShow("-translate-y-[120px]")
        : setShow("drop-shadow-");
      setUserModal(false)
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const { mutate, isLoading } = useMutation({
    mutationFn: () => logoutUser(),
    onSuccess: (data) => {
      dispatch(logout);
      toast.success(data?.message);
      setUserModal(false)
      router.push("/signin");
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message);
    },
  });

  const logoutHandler = () => {
    mutate()
  };

  const contextMenuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (userModal && contextMenuRef.current && !contextMenuRef.current.contains(e.target)) {
        setUserModal(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [userModal]);


  const urlPath = usePathname();

  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    setUser(userInfo);
  }, [userInfo]);

  return (
    <div
      className={`w-full z-[999] flex items-center justify-between min-h-[60px] drop-shadow-sm bg-white border md:px-6 px-4`}
    >
      {user?.email ? (
        <>
          <div className="flex items-center gap-10 justify-between w-full">
            <div className="w-20 md:w-28 flex items-center justify-center overflow-hidden">
              <Image
                className="w-full h-full object-cover object-center"
                width={100}
                height={100}
                src="/assets/accredian.webp"
                alt="logo"
              />
            </div>
            <div className="cursor-pointer flex items-center justify-center w-10 h-10 overflow-hidden rounded-md">
              {user.avatar ? (
                <Image
                  width={100}
                  height={100}
                  alt="avatar"
                  src={user?.avatar}
                  className="w-full h-full object-cover"
                  id="context-opener"
                  onClick={() => setUserModal(!userModal)}
                />
              ) : (
                <Image
                  width={100}
                  height={100}
                  alt="user"
                  src="/assets/user.png"
                  className="w-full h-full object-cover"
                  id="context-opener"
                  onClick={() => setUserModal(!userModal)}
                />
              )}
            </div>
            {userModal && (
              <div ref={contextMenuRef} className="absolute top-[120%] right-[2%] bg-slate-200 rounded-lg z-[99] overflow-hidden max-w-[130px] w-full">
                <div className="flex flex-col w-full text-lg">
                  <Link href="/profile" onClick={() => setUserModal(false)}>
                    <div className="py-2 px-4 whitespace-nowrap cursor-pointer font-medium hover:text-blue-500 transition-all duration-75 mt-2">
                      Profile
                    </div>
                  </Link>
                  <div className="py-2 px-4 whitespace-nowrap cursor-pointer font-medium hover:text-blue-500 transition-all duration-75">
                    Support
                  </div>
                  <div onClick={logoutHandler} className="py-2 px-4 whitespace-nowrap cursor-pointer font-medium hover:text-white hover:bg-red-500 transition-all duration-75">
                    {isLoading ? "Logging Out..." : "Logout"}
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="w-20 md:w-28 flex items-center justify-center">
            <Image
              className="w-full h-full"
              width={100}
              height={100}
              src="/assets/accredian.webp"
              alt="logo"
            />
          </div>
          <div className="flex items-center">
            <div className="flex items-center gap-6">
              {urlPath === "/signin" ? (
                <h1 className="font-normal">
                  New to Accredian?{" "}
                  <Link href="/signup" className="text-dullBlue">
                    Sign Up Free
                  </Link>
                </h1>
              ) : (
                <h1 className="font-normal">
                  Already have an Account?{" "}
                  <Link href="/signin" className="text-dullBlue">
                    Sign In
                  </Link>
                </h1>
              )}
              <h1 className="capitalize text-dullBlue md:block hidden">support</h1>
              <h1 className="capitalize text-dullBlue md:block hidden">English</h1>
            </div>
          </div>
        </>
      )}
      {userModal && (
        <div className="absolute top-[110%] left-[50%] translate-x-[-50%] bg-white rounded-xl z-[99] overflow-hidden w-[90%] sm:hidden block">
          <div className="flex flex-col w-full">
            <div className="bg-paleBlue py-2 px-4 text-white capitalize whitespace-nowrap cursor-pointer font-medium">
              Profile
            </div>
            <div className="py-2 px-4 whitespace-nowrap cursor-pointer font-medium hover:text-blue-500 transition-all duration-75">
              Support
            </div>
            <div onClick={logoutHandler} className="py-2 px-4 whitespace-nowrap cursor-pointer font-medium hover:text-white hover:bg-red-500 transition-all duration-75">
              {isLoading ? "Logging Out..." : "Logout"}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
