'use client';

import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Card } from "@/components/ui/card";
import { Building2, Clock, MapPin, Phone, Mail, Hammer, Shield, ThumbsUp, ArrowRight } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="text-xl font-bold text-primary">Gebäudeservice Shala</div>
            <NavigationMenu>
              <NavigationMenuList className="hidden md:flex gap-6">
                <NavigationMenuItem>
                  <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
                    Dienstleistungen
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                    Über uns
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
                    Projekte
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                    Kontakt
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <a href="tel:+4916091403944">
              <Button className="bg-primary hover:bg-primary/90">
              <Phone className="w-4 h-4 mr-2" /> Anrufen
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <Image
          src="https://www.infina.at/fileadmin/_processed_/e/1/csm_Sanierung_Raum_wird_saniert_16b4d397e4.jpeg"
          alt="Bauarbeiten"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container relative z-10 mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Gebäudeservice Shala
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
            Ihre verlässliche Wahl für professionelle Gebäudeservice in Pforzheim und Umgebung
          </p>
          <Link href="#contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Kontakt aufnehmen <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Unsere Dienstleistungen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Warum uns wählen?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Unsere Projekte</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link href={project.link} key={index} className="group relative overflow-hidden rounded-lg">
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div> 
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-200 text-sm">{project.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Kontaktieren Sie uns</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-primary mr-4" />
                <div>
                  <h3 className="font-semibold">Telefon</h3>
                  <p className="text-muted-foreground">+49 160 91403944</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-primary mr-4" />
                <div>
                  <h3 className="font-semibold">E-Mail</h3>
                  <p className="text-muted-foreground">service.sefershala@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-primary mr-4" />
                <div>
                  <h3 className="font-semibold">Adresse</h3>
                  <p className="text-muted-foreground">75203 Königsbach-Stein</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="w-6 h-6 text-primary mr-4" />
                <div>
                  <h3 className="font-semibold">Öffnungszeiten</h3>
                  <p className="text-muted-foreground">Mo. - Sa.: 08:00 - 18:00 Uhr</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://i.ibb.co/bMD4fDLP/8db5f90f-00a4-405e-ada6-e81f67193da5.jpg"
                alt="Unser Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Gebäudeservice Shala</h3>
              <p className="text-gray-400">Qualität und Zuverlässigkeit seit Jahren</p>
            </div>
            <div className="flex space-x-6">
              <Link href="/impressum">
                <Button variant="ghost" className="text-white hover:text-primary hover:bg-transparent">
                  Impressum
                </Button>
              </Link>
              <Link href="/datenschutz">
                <Button variant="ghost" className="text-white hover:text-primary hover:bg-transparent">
                  Datenschutz
                </Button>
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            © {new Date().getFullYear()} Gebäudeservice Shala. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    </div>
  );
}

const services = [
  {
    icon: Building2,
    title: "Mauerarbeiten & Sanierung",
    description: "Professionelle Ausführung von Mauerarbeiten und Sanierungen für Renovierungen."
  },
  {
    icon: Building2,
    title: "Trockenbauarbeiten",
    description: "Fachgerechte Trockenbauarbeiten in Wohn- und Badezimmern für moderne Raumgestaltung."
  },
  {
    icon: Hammer,
    title: "Fliesenlegung",
    description: "Professionelle Verlegung von Fliesen aller Art für Bäder, Küchen und Wohnräume."
  },
  {
    icon: Hammer,
    title: "Terrassen & Pflasterarbeiten",
    description: "Gestaltung und Verlegung von Terrassen und Pflastersteinen für Ihren Außenbereich."
  },
  {
    icon: Shield,
    title: "Abbrucharbeiten",
    description: "Professionelle Durchführung von Abbruch- und Entrümpelungsarbeiten."
  }
];

const benefits = [
  {
    icon: Building2,
    title: "Qualitätsarbeit",
    description: "Höchste Qualitätsstandards und sorgfältige Ausführung aller Arbeiten für optimale Ergebnisse."
  },
  {
    icon: ThumbsUp,
    title: "Kundenzufriedenheit",
    description: "Ihre Zufriedenheit steht bei uns an erster Stelle - von der Beratung bis zur Fertigstellung."
  },
  {
    icon: Clock,
    title: "Garantie & Gewährleistung",
    description: "Umfassende Garantien und gesetzliche Gewährleistung für Ihre Sicherheit.",
  },
  {
    icon: Shield,
    title: "Individuelle Lösungen",
    description: "Maßgeschneiderte Lösungen für Ihre speziellen Anforderungen und Wünsche."
  },
  {
    icon: Hammer,
    title: "Langjährige Arbeitserfahrung",
    description: "Über Jahre gesammelte Expertise und fundiertes Fachwissen in allen Bereichen unserer Dienstleistungen."
  }
]

const projects = [
  {
    title: "Badumbau",
    description: "Komplette Badsanierung mit modernen Sanitäranlagen und hochwertiger Fliesenarbeit - Klicken für Vorher/Nachher Bilder",
    image: "https://i.ibb.co/Q15C5sf/ed28c131-99c6-436c-a018-f4af866aa833.jpg",
    link: "/projekte/badumbau"
  },
  {
    title: "Gartenmauerprojekt",
    description: "Gestaltung und Bau einer dekorativen Gartenmauer mit Naturstein",
    image: "https://i.ibb.co/JjcQjLFw/d54f2ea2-7836-44f5-9296-d04cdfa2340b.jpg",
    link: "/projekte/gartenmauer"
  },
  {
    title: "Sanierung / Trockenbau",
    description: "Professionelle Sanierung und Trockenbauarbeiten für Wände, Decken und Raumgestaltung",
    image: "https://i.ibb.co/FbsSRWJX/8b59225d-a342-40a5-a553-38ec2e61804f.jpg",
    link: "/projekte/sanierung"
  }
];
