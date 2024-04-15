"use client";
import { Button, ButtonGroup, Input } from "@nextui-org/react";
import { Train } from "./train";
import React from "react";
import { putFirst, putLast } from "./actions/server";

export default function Home() {
  const [ item, setItem ] = React.useState("");
  const [ items, setItems ] = React.useState<any[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const train = await fetch("http://localhost:4000/api");
      const items = await train.json();
      setItems(items);
    }
    fetchData();
  }, [])
  return (
    <main className="grid place-items-center h-screen w-screen">
      <div className="grid gap-2">
        <form className="flex">
          <Input 
            label="Añadir un vagón"
            placeholder="Ej: 1" 
            value={item}
            onValueChange={setItem}
          />
          <ButtonGroup>
            <Button 
              // type="submit"
              tabIndex={1}
              onClick={() => item !== "" && putFirst(item).then((res) => res.json()).then((data) => setItems(data)).then(() => setItem(""))}
            >Put left</Button>
            <Button
              tabIndex={2}
              // type="submit"
              onClick={() => item !== "" && putLast(item).then((res) => res.json()).then((data) => setItems(data)).then(() => setItem(""))}
            >Put right</Button>
          </ButtonGroup>
        </form>
        <Train items={items} onChange={setItems}/>
      </div>
    </main>
  );
}