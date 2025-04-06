'use client';

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from 'next/image';

export default function Sanierung() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Zurück zur Startseite
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-8">Sanierung & Trockenbau</h1>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-6">Projektbilder</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative h-[600px] rounded-lg overflow-hidden">
                <Image 
                  src="https://i.ibb.co/FbsSRWJX/8b59225d-a342-40a5-a553-38ec2e61804f.jpg"
                  alt="Sanierung Projekt Bild 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[600px] rounded-lg overflow-hidden">
                <Image 
                  src="https://i.ibb.co/Y7y3WSK2/0b6e8d6a-1c5e-439f-97d4-1f983cef8e00.jpg"
                  alt="Sanierung Projekt Bild 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}