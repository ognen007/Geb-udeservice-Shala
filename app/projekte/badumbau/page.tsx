'use client';

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from 'next/image';

export default function Badumbau() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Zurück zur Startseite
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-8">Badezimmer Renovierung</h1>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-6">Vorher</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {beforeImages.map((image, index) => (
                <div key={index} className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image src={image} alt={`Bad vor der Renovierung ${index + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
            
            <h2 className="text-2xl font-semibold mb-6">Nachher</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {afterImages.map((image, index) => (
                <div key={index} className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image src={image} alt={`Bad nach der Renovierung ${index + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

const beforeImages = [
  "https://i.ibb.co/4Ds0h0g/6b4cb21f-843f-4822-87b0-e681588ed088.jpg",
  "https://i.ibb.co/qMQRMJz9/92b2ccd6-9703-43f6-8a5c-a475a311ccdf.jpg",
  "https://i.ibb.co/VpJdskx3/4d2ce2b7-3fa8-44c3-a058-59f8d4d10ec7.jpg"
];

const afterImages = [
  "https://i.ibb.co/Q15C5sf/ed28c131-99c6-436c-a018-f4af866aa833.jpg",
  "https://i.ibb.co/R4VG1XG9/ceffb730-16d6-4cef-a93e-7caa7d5dfaf8.jpg",
  "https://i.ibb.co/QjnwzQ7b/346c3f4e-a386-4109-9c54-436dfe3ef995.jpg"
];