'use client'

import { useRouter } from "next/navigation";

export default function EtapeTwo() {
  const router = useRouter();
    return (
      <div className="page">
        Etape2
        <button onClick={() => router.push('/step1')}>Retour</button>
        <button onClick={() => router.push('/step3')}>Continuer</button>
      </div>
    );
  }