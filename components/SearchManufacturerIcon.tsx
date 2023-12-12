import {
  SiAcura,
  SiAlfaromeo,
  SiAstonmartin,
  SiAudi,
  SiBentley,
  SiBmw,
  SiCadillac,
  SiChevrolet,
  SiChrysler,
  SiCitroen,
  SiFerrari,
  SiFiat,
  SiFord,
  SiHonda,
  SiHyundai,
  SiInfiniti,
  SiJaguar,
  SiJeep,
  SiKia,
  SiLamborghini,
  SiLandrover,
  SiMaserati,
  SiMazda,
  SiMclaren,
  SiMercedes,
  SiMini,
  SiMitsubishi,
  SiNissan,
  SiPorsche,
  SiRam,
  SiRollsroyce,
  SiSubaru,
  SiTesla,
  SiToyota,
  SiVolkswagen,
  SiVolvo,
} from "react-icons/si";
import { PiCarDuotone } from "react-icons/pi";

const SearchManufacturerIcon = ({ input }: { input: string }) => {
  const props = {
    className: "w-5 h-5 ml-4",
    alt: "Car-Logo",
  };
  return (
    <>
      {input === "" && <PiCarDuotone {...props} />}
      {input === "Acura" && <SiAcura {...props} />}
      {input === "Alfa Romeo" && <SiAlfaromeo {...props} />}
      {input === "Aston Martin" && <SiAstonmartin {...props} />}
      {input === "Audi" && <SiAudi {...props} />}
      {input === "Bentley" && <SiBentley {...props} />}
      {input === "BMW" && <SiBmw {...props} />}
      {input === "Cadillac" && <SiCadillac {...props} />}
      {input === "Chevrolet" && <SiChevrolet {...props} />}
      {input === "Chrysler" && <SiChrysler {...props} />}
      {input === "Citroen" && <SiCitroen {...props} />}
      {input === "Ferrari" && <SiFerrari {...props} />}
      {input === "Fiat" && <SiFiat {...props} />}
      {input === "Ford" && <SiFord {...props} />}
      {input === "Honda" && <SiHonda {...props} />}
      {input === "Hyundai" && <SiHyundai {...props} />}
      {input === "Infiniti" && <SiInfiniti {...props} />}
      {input === "Jaguar" && <SiJaguar {...props} />}
      {input === "Jeep" && <SiJeep {...props} />}
      {input === "Kia" && <SiKia {...props} />}
      {input === "Lamborghini" && <SiLamborghini {...props} />}
      {input === "Land Rover" && <SiLandrover {...props} />}
      {input === "Maserati" && <SiMaserati {...props} />}
      {input === "Mazda" && <SiMazda {...props} />}
      {input === "McLaren" && <SiMclaren {...props} />}
      {input === "Mercedes-Benz" && <SiMercedes {...props} />}
      {input === "MINI" && <SiMini {...props} />}
      {input === "Mitsubishi" && <SiMitsubishi {...props} />}
      {input === "Nissan" && <SiNissan {...props} />}
      {input === "Porsche" && <SiPorsche {...props} />}
      {input === "Ram" && <SiRam {...props} />}
      {input === "Rolls-Royce" && <SiRollsroyce {...props} />}
      {input === "Subaru" && <SiSubaru {...props} />}
      {input === "Tesla" && <SiTesla {...props} />}
      {input === "Toyota" && <SiToyota {...props} />}
      {input === "Volkswagen" && <SiVolkswagen {...props} />}
      {input === "Volvo" && <SiVolvo {...props} />}

      {input === "Buick" && <PiCarDuotone {...props} />}
      {input === "Dodge" && <PiCarDuotone {...props} />}
      {input === "GMC" && <PiCarDuotone {...props} />}
      {input === "Lexus" && <PiCarDuotone {...props} />}
      {input === "Lincoln" && <PiCarDuotone {...props} />}
    </>
  );
};

export default SearchManufacturerIcon;
