import Image from "next/image";
import { Bungee } from "next/font/google";

const bungee = Bungee({ weight: "400", subsets: ["latin"] });

const Logo = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-2 text-xl">
      <Image
        src="/logo.svg"
        width={34}
        height={18}
        alt="Kar2go Logo"
        className="object-contain"
      />
      <span className={bungee.className}>Kar2go</span>
    </div>
  );
};

export default Logo;
