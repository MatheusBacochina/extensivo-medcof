'use client';
import HomeScreen from "./screens/Home/HomeScreen";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <HomeScreen />
    </NextUIProvider>
  );
}
