'use client'

import { useRouter } from "next/navigation";

export default function EtapeThree() {
  const router = useRouter();
    return (
      <div className="page">
        Etape3
        <button onClick={() => router.push('/step2')}>Retour</button>
        <button onClick={() => router.push('/step4')}>Continuer</button>
      </div>
    );
  }