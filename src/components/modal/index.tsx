"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import XLogo from "../../../public/Zlogogg.png";

export function ModalHeader() {
  const router = useRouter();

  const onClose = () => {
    router.back();
  };

  return (
    <div>
      <button
        onClick={onClose}
        className="absolute w-[34px] h-[34px] border-none cursor-pointer left-4 top-4 hover:bg-black/50"
      >
        <svg
          width={20}
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
        >
          <g>
            <path
              fill="#fff"
              d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"
            ></path>
          </g>
        </svg>
      </button>
      <Image src={XLogo} width={30} height={30} alt="X logo" />
    </div>
  );
}

export function ModalBody({
  children,
  ...props
}: { children: React.ReactNode } & React.ComponentPropsWithoutRef<"div">) {
  return <div {...props}>{children}</div>;
}

Modal.body = ModalBody;
Modal.header = ModalHeader;

export default function Modal({ children }: React.PropsWithChildren) {
  return (
    <div
      style={{ backgroundColor: "rgba(86, 99, 110, 0.4)" }}
      className="w-[100vw] h-full flex items-center justify-center absolute inset-0"
    >
      <div className="py-[12px] relative bg-black w-[600px] h-[650px] flex flex-col items-center rounded-16">
        {children}
      </div>
    </div>
  );
}
