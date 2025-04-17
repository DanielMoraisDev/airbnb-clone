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

export const apts = [
  {
    id: "abc",
    nome: "APE 506",
    mini_descricao: "Desfrute de conforto e conveniência em...",
    tipo: "Apartamento",
    capacidade: 4,
    valor: 300,
    imagem: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    qualidades: [
      { qualidade: "wifi", icon: <Wifi /> },
      { qualidade: "estacionamento", icon: <Car /> },
      { qualidade: "ar-condicionado", icon: <AirVentIcon /> },
    ],
  },
  {
    id: "def",
    nome: "LOFT 101",
    mini_descricao: "Ideal para estadias curtas com estilo moderno.",
    tipo: "Loft",
    capacidade: 2,
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
    id: "ghi",
    nome: "SUÍTE MASTER",
    mini_descricao: "Luxo e privacidade em uma suíte espaçosa.",
    tipo: "Suíte",
    capacidade: 6,
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
    id: "jkl",
    nome: "STUDIO 207",
    mini_descricao: "Compacto, moderno e funcional para sua viagem.",
    tipo: "Studio",
    capacidade: 2,
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
    id: "mno",
    nome: "APE 305",
    mini_descricao: "Aconchegante com todos os itens essenciais.",
    tipo: "Apartamento",
    capacidade: 3,
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
    id: "pqr",
    nome: "FLAT 909",
    mini_descricao: "Comodidade e segurança para viagens de negócios.",
    tipo: "Flat",
    capacidade: 5,
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
