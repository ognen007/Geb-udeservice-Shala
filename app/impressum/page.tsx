'use client';

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Zurück zur Startseite
          </Button>
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">Impressum</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
            <p>Gebäudeservice Shala</p>
            <p>Königsbach-Stein 75203</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
            <p>Telefon: +49 160 91403944</p>
            <p>E-Mail: service.sefershala@gmail.com</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Umsatzsteuer-ID</h2>
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
            <p>DE XXX XXX XXX</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Streitschlichtung</h2>
            <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:</p>
            <p><a href="https://ec.europa.eu/consumers/odr/" className="text-primary hover:underline">https://ec.europa.eu/consumers/odr/</a></p>
            <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
          </section>
        </div>
      </div>
    </div>
  );
}