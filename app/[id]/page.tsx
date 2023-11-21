"use client";
import HomeScreen from "../screens/Home/HomeScreen";
import { NextUIProvider } from "@nextui-org/react";

export default function Home({ params }: { params: { id: string } }) {

  return (
    <NextUIProvider>
      <HomeScreen id={params.id} />
    </NextUIProvider>
  );
}
