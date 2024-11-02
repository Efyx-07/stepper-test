'use client'

import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  return (
    <div className="page">
      Homepage
      <button onClick={() => router.push('/step2')}>Commencer mon projet</button>
    </div>
  );
}
