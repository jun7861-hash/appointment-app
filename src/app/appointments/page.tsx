"use client";

import { useSnapshot } from "valtio";

import { store } from "@/store";
import Appointment from "@/components/appointment";

export default function Home() {
  const {
    sidebar: { minimize },
  } = useSnapshot(store);
  return (
    <main style={{
      marginLeft: !minimize ? '240px': '120px'
    }}>
      <Appointment />
    </main>
  );
}
