import { NavBarTop } from "@/components/common/Navbar";
import { useParams } from "react-router-dom";
import { apts } from "../../Apts";
import { Card, CardContent } from "@/components/ui/card";
import { HouseIcon, UsersIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const ItemPage = () => {
  const params = useParams();

  const item = apts.filter((e) => e.id == params.id);

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center pr-5 pl-5 pb-20 md:pr-20 md:pl-20">
        <NavBarTop />
        {item.map((apt, index) => (
          <Card key={index} className="w-full ">
            <CardContent className="p-10 space-y-3">
              <img
                src={apt.imagem}
                alt={apt.nome}
                className="w-full h-120 object-cover rounded-md"
              />
              <h3 className="text-4xl font-bold">{apt.nome}</h3>
              <p className="text-md text-muted-foreground">
                {apt.mini_descricao}
              </p>
              <p className="text-xl font-medium text-primary">
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
              <div className="pt-3">
                <Button className="cursor-pointer">Reservar</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ItemPage;
