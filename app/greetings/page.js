"use client";

import Modal from "@mui/material/Modal";
import { FaThumbsUp } from "react-icons/fa";
import { Sheet } from "@mui/joy";

import "./styles.css";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <div className="main-bg w-full h-screen">
      <Modal
        open={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Sheet
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgb(0, 0, 0, 0.4)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",            
          }}
        >
          <div className="w-full max-w-4xl text-center text-white flex flex-col items-center px-4">
            {/* <h1 className="text-5xl font-bold">accredian</h1>
            <h4 className="text-xl">credencials that matter</h4> */}
            <Image
              className="max-w-[250px] w-full"
              width={400}
              height={400}
              alt="logo"
              src="https://faculty.accredian.com/images/accredian-logo.png"
            />
            <div className="w-full bg-white flex flex-col items-center text-black px-4 py-16 rounded-lg mt-12 drop-shadow-sm">
              <FaThumbsUp className="text-5xl" />
              <h1 className="text-3xl md:text-5xl font-bold mt-12">Your Data is saved!</h1>
              <h4 className="text-lg md:text-xl font-bold mt-12">Thank You!</h4>
            </div>
            <div className="w-full flex gap-3 items-center justify-center mt-12">
              <h1>Â©2023 Accredian</h1>
              <span>|</span>
              <Link href="/" className="hover:underline">accredian.com</Link>
            </div>
          </div>
        </Sheet>
      </Modal>
    </div>
  );
};

export default page;
