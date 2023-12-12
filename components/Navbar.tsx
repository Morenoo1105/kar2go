import Image from "next/image";
import Link from "next/link";
import { CustomButton, Logo } from ".";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/">
          <Logo />
        </Link>
        <CustomButton
          title="Registrarse"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default Navbar;
