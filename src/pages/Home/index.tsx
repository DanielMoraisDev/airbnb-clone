import { Button } from "@/components/ui/button";
import { NavBarTop } from "@/components/common/Navbar";
import {
  Wifi,
  Car,
  AirVent as AirVentIcon,
  Tv,
  Utensils,
  BedDouble,
  ShowerHead,
  Lock,
  Fan,
  CookingPot,
  WashingMachine,
} from "lucide-react";
import { DatePicker } from "@/components/ui/date-picker";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

const imageBg = "https://deuviagem.com/wp-content/uploads/2020/11/maceio.jpg";

const Home = () => {
  const [selectedCheckIn, setSelectedCheckIn] = useState<Date | undefined>(
    new Date()
  );
  const [selectedCheckOut, setSelectedCheckOut] = useState<Date | undefined>(
    new Date()
  );

  const [peopleQtda, setPeopleQtda] = useState<Number>(2);

  const qtdaPeoples = [1, 2, 3, 4, 5, 6];

  const apts = [
    {
      nome: "APE 506",
      mini_descricao: "Desfrute de conforto e conveniência em...",
      tipo: "Apartamento",
      valor: 300,
      imagem: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      qualidades: [
        { qualidade: "wifi", icon: <Wifi /> },
        { qualidade: "estacionamento", icon: <Car /> },
        { qualidade: "ar-condicionado", icon: <AirVentIcon /> },
      ],
    },
    {
      nome: "LOFT 101",
      mini_descricao: "Ideal para estadias curtas com estilo moderno.",
      tipo: "Loft",
      valor: 250,
      imagem:
        "https://avatars.mds.yandex.net/i?id=a4ee5d97768aadd5cb5e2a374d79f32f61c62a4e-4900959-images-thumbs&n=13",
      qualidades: [
        { qualidade: "wifi", icon: <Wifi /> },
        { qualidade: "cozinha equipada", icon: <Utensils /> },
        { qualidade: "TV a cabo", icon: <Tv /> },
      ],
    },
    {
      nome: "SUÍTE MASTER",
      mini_descricao: "Luxo e privacidade em uma suíte espaçosa.",
      tipo: "Suíte",
      valor: 450,
      imagem:
        "https://avatars.mds.yandex.net/i?id=e6632a45ab76bb32eb4828a6a00fa344_l-5238529-images-thumbs&ref=rim&n=13&w=2048&h=1228",
      qualidades: [
        { qualidade: "cama king-size", icon: <BedDouble /> },
        { qualidade: "chuveiro quente", icon: <ShowerHead /> },
        { qualidade: "wifi", icon: <Wifi /> },
      ],
    },
    {
      nome: "STUDIO 207",
      mini_descricao: "Compacto, moderno e funcional para sua viagem.",
      tipo: "Studio",
      valor: 200,
      imagem:
        "https://avatars.mds.yandex.net/i?id=cf91a567bc7f2640fa2333d59ac4c8b7053f243ae3edb569-4805050-images-thumbs&n=13",
      qualidades: [
        { qualidade: "ar-condicionado", icon: <AirVentIcon /> },
        { qualidade: "estacionamento", icon: <Car /> },
        { qualidade: "smart TV", icon: <Tv /> },
      ],
    },
    {
      nome: "APE 305",
      mini_descricao: "Aconchegante com todos os itens essenciais.",
      tipo: "Apartamento",
      valor: 280,
      imagem:
        "https://mir-s3-cdn-cf.behance.net/project_modules/fs/4d2aad58709575.5a060c6a1b5f7.jpg",
      qualidades: [
        { qualidade: "ventilador", icon: <Fan /> },
        { qualidade: "geladeira", icon: <CookingPot /> },
        { qualidade: "wifi", icon: <Wifi /> },
      ],
    },
    {
      nome: "FLAT 909",
      mini_descricao: "Comodidade e segurança para viagens de negócios.",
      tipo: "Flat",
      valor: 320,
      imagem:
        "https://www.hauteresidence.com/wp-content/uploads/2015/07/DSC_0332-Edit1.jpg",
      qualidades: [
        { qualidade: "fechadura digital", icon: <Lock /> },
        { qualidade: "máquina de lavar", icon: <WashingMachine /> },
        { qualidade: "wifi", icon: <Wifi /> },
      ],
    },
  ];

  const handlePeoplesChange = (peopleQtda: string) => {
    setPeopleQtda(Number(peopleQtda));
  };

  const handleClick = () => {
    window.location.hash = "#choose-local";
  };

  useEffect(() => {
    if (selectedCheckIn) {
      const nextDay = new Date(selectedCheckIn);
      nextDay.setDate(nextDay.getDate() + 1);
      setSelectedCheckOut(nextDay);
    }
  }, [selectedCheckIn]);

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center">
        <NavBarTop />
        <div className="flex flex-col md:flex-row justify-center pt-10 pb-10 pr-5 pl-5 md:pr-20 md:pl-20 w-full h-auto md:h-150">
          <div
            className="flex flex-col justify-center w-full md:w-[50%] rounded-2xl h-64 md:h-auto"
            style={{
              backgroundImage: `url(${imageBg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="flex flex-col gap-5 w-full md:w-[50%] justify-center p-3 md:p-7">
            <p className="text-4xl font-bold">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              itaque placeat quasi perferendis modi voluptatum reiciendis
              corrupti voluptate, maiores incidunt sed veritatis libero fugiat
              labore est provident asperiores nulla praesentium?
            </p>
            <div className="flex justify-start">
              <Button
                onClick={handleClick}
                className="max-w-[300px] cursor-pointer w-full h-10"
              >
                Conhecer Agora
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 p-3 md:p-7">
          <div className="w-full flex gap-2 flex-col justify-center">
            <Label>Check-in</Label>
            <DatePicker
              selected={selectedCheckIn}
              onSelect={(date: Date | undefined) => setSelectedCheckIn(date)}
              disabledDates={(date: Date) => {
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                return date < today;
              }}
            />
          </div>
          <div className="w-full flex gap-2 flex-col justify-center">
            <Label>Check-out</Label>
            <DatePicker
              selected={selectedCheckOut}
              onSelect={(date: Date | undefined) => setSelectedCheckOut(date)}
              disabledDates={(date: Date) => {
                if (!selectedCheckIn) return true;
                const checkIn = new Date(selectedCheckIn);
                checkIn.setHours(0, 0, 0, 0);
                return date <= checkIn;
              }}
            />
          </div>
          <div className="w-full flex gap-2 flex-col justify-center">
            <Label>Hóspedes</Label>
            <Select
              onValueChange={handlePeoplesChange}
              value={peopleQtda.toString()}
            >
              <SelectTrigger className="cursor-pointer w-full">
                <SelectValue placeholder="Hora" />
              </SelectTrigger>
              <SelectContent>
                {qtdaPeoples.map((pessoas) => (
                  <SelectItem
                    className="cursor-pointer"
                    key={pessoas}
                    value={pessoas.toString()}
                  >
                    {pessoas} {pessoas > 1 ? "pessoas" : "pessoa"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="w-full flex gap-2 flex-col justify-end">
            <Button className="cursor-pointer">Buscar</Button>
          </div>
        </div>
      </div>
      <div
        id="choose-local"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pr-5 pl-5 pb-20 md:pr-20 md:pl-20"
      >
        {apts.map((apt, index) => (
          <Card
            key={index}
            className="h-full transition-transform duration-300 transform-gpu ease-in-out cursor-pointer hover:scale-102"
          >
            <CardContent className="p-4 space-y-2">
              <img
                src={apt.imagem}
                alt={apt.nome}
                className="w-full h-65 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold">{apt.nome}</h3>
              <p className="text-sm text-muted-foreground">
                {apt.mini_descricao}
              </p>
              <p className="text-sm font-medium">Tipo: {apt.tipo}</p>
              <p className="text-sm font-medium text-primary">
                R$ {apt.valor},00 / noite
              </p>

              <div className="flex gap-2 flex-wrap pt-2">
                {apt.qualidades.map((q, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1 text-sm text-muted-foreground"
                  >
                    {q.icon}
                    <span>{q.qualidade}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Home;
