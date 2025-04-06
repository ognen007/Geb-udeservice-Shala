'use client';

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from 'next/image';

export default function Gartenmauer() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Zurück zur Startseite
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-8">Gartenmauerprojekt</h1>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-6">Projektbilder</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative h-[600px] rounded-lg overflow-hidden">
                <Image 
                  src="https://i.ibb.co/JjcQjLFw/d54f2ea2-7836-44f5-9296-d04cdfa2340b.jpg"
                  alt="Gartenmauer Projekt Bild 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[600px] rounded-lg overflow-hidden">
                <Image 
                  src="https://i.ibb.co/8gtB31jG/79d82459-77e9-4f40-9d7a-94f3b3123fda.jpg"
                  alt="Gartenmauer Projekt Bild 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[600px] rounded-lg overflow-hidden">
                <Image 
                  src="https://i.ibb.co/SXzd1FKL/aef1e39d-3c63-4855-8216-356c09717176.jpg"
                  alt="Gartenmauer Projekt Bild 3"
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