import { Button } from "@/components/ui/button";
import { NavBarTop } from "@/components/common/Navbar";
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

import { apts } from "../../Apts";
import { HouseIcon, UsersIcon } from "lucide-react";

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
        <div className="flex flex-col md:flex-row justify-center pt-10 pb-10 pr-3 pl-3 md:pr-20 md:pl-20 w-full h-auto md:h-150">
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
              Descubra seu cantinho favorito em Maceió
            </p>
            <p className="text-md">
              Venha relaxar, curtir bons momentos e aproveitar tudo o que Maceió
              tem de melhor. Aqui é o lugar perfeito pra se acomodar, bater um
              papo tranquilo e se sentir em casa, mesmo longe dela.
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
              <p className="text-md font-medium text-primary">
                R$ {apt.valor},00 / noite
              </p>
              <div className="flex flex-row gap-2">
                <div className="flex gap-2 flex-wrap pt-2">
                  <div className="flex items-center gap-1 text-sm">
                    <HouseIcon />
                    <span>{apt.tipo}</span>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap pt-2">
                  <div className="flex items-center gap-1 text-sm">
                    <UsersIcon />
                    <span>{apt.capacidade} Pessoas</span>
                  </div>
                </div>
              </div>

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
