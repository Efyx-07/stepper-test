'use client'

import { useRouter } from "next/navigation";

export default function EtapeFour() {
  const router = useRouter();
    return (
      <div className="page">
        Etape4
        <button onClick={() => router.push('/step3')}>Retour</button>
        <button>Devis</button>
      </div>
    );
  }