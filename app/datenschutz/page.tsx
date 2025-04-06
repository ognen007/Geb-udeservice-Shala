'use client';

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Zurück zur Startseite
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-xl font-semibold mb-3">Allgemeine Hinweise</h3>
            <p className="mb-4">Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="text-xl font-semibold mb-3">Datenschutz</h3>
            <p className="mb-4">Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Datenerfassung auf dieser Website</h2>
            <h3 className="text-xl font-semibold mb-3">Cookies</h3>
            <p className="mb-4">Unsere Website verwendet keine Cookies für Analyse- oder Trackingzwecke.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Kontaktformular und E-Mail-Kontakt</h2>
            <p className="mb-4">Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben einschließlich der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.</p>
          </section>
        </div>
      </div>
    </div>
  );
}