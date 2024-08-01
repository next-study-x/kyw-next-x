import Xlogo from "../../../../public/Zlogogg.png";

import Image from "next/image";

export default function LoginLeftSection() {
  return (
    <div className="flex-1 flex justify-center items-center min-w-0 max-w-[1000px]">
      <Image src={Xlogo} width={360} height={30} alt="홈페이지 로고" />
    </div>
  );
}
