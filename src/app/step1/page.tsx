'use client'

import { useRouter } from "next/navigation";
import Accordion from "@/components/Accordion";

export default function Home() {

  const router = useRouter();

  return (
    <div className="page">
      Homepage
      <button onClick={() => router.push('/step2')}>Commencer mon projet</button>
      <Accordion />
    </div>
  );
}
