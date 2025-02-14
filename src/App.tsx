import React from 'react';
import { 
  Cloud, 
  Shield, 
  Terminal, 
  Briefcase, 
  GraduationCap, 
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Award,
  Code,
  User,
  Handshake
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated background gradients */}
        <div className="absolute inset-0 bg-gray-900">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-0 -right-4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex p-4 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 mb-8">
                <Shield className="w-8 h-8 text-purple-400 mr-3" />
                <Cloud className="w-8 h-8 text-blue-400" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-gradient">
                  Noah Isenschmid
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
                Zäziwil, Bern, Schweiz
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="#contact" 
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105 text-center"
              >
                Kontakt
              </a>
              <a 
                href="#expertise" 
                className="w-full sm:w-auto px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:bg-gray-700/50 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105 text-center"
              >
                Meine Kompetenzen
              </a>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto text-center">
              <div className="p-4 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700">
                <p className="text-3xl font-bold text-blue-400 mb-1">3+</p>
                <p className="text-sm text-gray-400">Jahre Erfahrung</p>
              </div>
              <div className="p-4 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700">
                <p className="text-3xl font-bold text-purple-400 mb-1">20+</p>
                <p className="text-sm text-gray-400">Erfolgreiche Projekte</p>
              </div>
              <div className="p-4 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700">
                <p className="text-3xl font-bold text-blue-400 mb-1">1</p>
                <p className="text-sm text-gray-400">Zertifizierung</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </header>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block p-4 rounded-full bg-gray-700 mb-6">
              <User className="w-8 h-8 text-purple-400" />
            </div>
            <h2 className="text-3xl font-bold mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Wer bin ich?
              </span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Ein leidenschaftlicher Informatiker mit dem Antrieb, sichere, massgeschneiderte Infrastruktur- & Cloudlösungen für den Kunden zu entwickeln.
              Ich lege grossen Wert auf Kommunikation und Miteinbeziehung des Kunden in meine Projekte - in meinem Arbeitsumfeld steht der Kunde immer an erster Stelle. Seine Zufriedenheit ist mein grösster Erfolg!
              Wenn ich nicht gerade Projekte realisiere, erkunde ich neue Technologien und vertiefe mein Wissen.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Aufgewachsen bin ich in meiner schönen Heimat Zäzwil, in welcher ich bis heute noch lebe. 
              Nach meiner obligatorischen Schulzeit, welche ich in Zäzwil und für die Sekundarschule in Grosshöchstetten, absolviert habe, habe ich in Zollbrück meine Ausbildung zum Informatiker EFZ Plattformentwicklung gemacht.
              In meiner Freizeit beschäftige ich mich gerne mit neuen Technologien im Microsoft 365 und Security Bereich. 
              Wenn ich nicht gerade vor dem PC sitze, begebe ich mich gerne in die Natur des Emmental und gehe gerne wandern oder verfolge mein langjähriges Hobby - das Hornussen.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <span className="px-4 py-2 bg-gray-700 rounded-full text-sm text-blue-400">Kundenorientiert</span>
              <span className="px-4 py-2 bg-gray-700 rounded-full text-sm text-purple-400">Kompetent</span>
              <span className="px-4 py-2 bg-gray-700 rounded-full text-sm text-blue-400">Technik Enthusiast</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Mein beruflicher Werdegang
            </span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-2 border-gray-700 pl-8 ml-4">
              <div className="mb-12 relative">
                <div className="absolute -left-14 p-2 bg-gray-900 border-2 border-purple-500 rounded-full">
                  <Briefcase className="w-6 h-6 text-purple-400" />
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-400">Co-Founder & COO</h3>
                  <p className="text-gray-400 mb-2">SWISSNAND • 2024 - Heute</p>
                  <p className="text-gray-300 mb-4">
                    Erstellen einer digitalen Online-Präsenz für KMUs mit Fokus auf den Kanton Bern.
                    Digitalisierung eines Unternehmens. Steigerung der Effienz durch unsere Plattform.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">GoHighLevel</span>
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Microsoft 365</span>
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Unternehmensführung</span>
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Teamleitung</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-12 relative">
                <div className="absolute -left-14 p-2 bg-gray-900 border-2 border-blue-500 rounded-full">
                  <Briefcase className="w-6 h-6 text-blue-400" />
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-purple-400">System Engineer</h3>
                  <p className="text-gray-400 mb-2">CompuTech Informatik AG • 2021 - Heute</p>
                  <p className="text-gray-300 mb-4">
                    Betreuen der Zugriffs- und Sicherheitsinfrastruktur der Private & Public Cloud.
                    Implementierung von Microsoft 365 Lösungen für personalisierte Kundenbedürfnisse.
                    Verwaltung und Administration der Webserver Infrastruktur.
                    Implementierung und Überwachung von Backup Lösungen.
                    Monitoring von Netzwerkinfrastrukturen.
                    Support und Kundenbetreuung.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Microsoft 365</span>
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Azure</span>
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">PowerShell</span>
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Citrix</span>
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Windows Server</span>
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Hyper-V</span>
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">SCVMM & SCCM</span>
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Linux</span>
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Plesk</span>
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Barracuda</span>
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Paessler PRTG</span>
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Hornetsecurity</span>
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Redstor</span>
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">MSP360</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Certifications Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Code className="w-8 h-8 text-blue-400" />
                <h2 className="text-2xl font-bold">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                    Technische Fähigkeiten
                  </span>
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-900 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3 text-blue-400">Cloud Technologien</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>Citrix</li>
                    <li>Azure</li>
                    <li>Microsoft 365</li>
                  </ul>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3 text-purple-400">Security</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>IAM</li>
                    <li>Network Security</li>
                    <li>Compliance</li>
                  </ul>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3 text-blue-400">Infrastruktur</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>Hyper-V</li>
                    <li>Docker</li>
                    <li></li>
                  </ul>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3 text-purple-400">Projektmanagement</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>Scoping und Planung</li>
                    <li>Kommunikation</li>
                    <li>Führungsstärke</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Award className="w-8 h-8 text-purple-400" />
                <h2 className="text-2xl font-bold">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                    Zertifizierungen
                  </span>
                </h2>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-900 p-4 rounded-lg flex items-start gap-4">
                  <Award className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-400">Microsoft Certified: Azure Fundamentals</h3>
                    <p className="text-gray-400">Microsoft • 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Kernkompetenzen
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-gray-800 border border-gray-700 hover:border-purple-500 transition-colors">
              <Cloud className="w-12 h-12 text-blue-400 mb-4" />
              
              <h3 className="text-xl font-semibold mb-2">System Engineering</h3>
              <p className="text-gray-400">Planung, Design und Umsetzung von massgeschneiderten Lösungen, welche den Anforderungen des Kunden entsprechen.</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-800 border border-gray-700 hover:border-purple-500 transition-colors">
              <Shield className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Security</h3>
              <p className="text-gray-400">Implementierung von robusten Sicherheitsrichtlinien für Kundensysteme.</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-800 border border-gray-700 hover:border-purple-500 transition-colors">
              <Handshake className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Kundenbetreuung</h3>
              <p className="text-gray-400">Verwaltung und Betreuung von Kunden mit einer offenen und unkomplizierten Art. Planung, Koordination und Umsetzung deren Projekte.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Goals Section */}
      <section id="goals" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Karriereaussichten
            </span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-6 mb-12">
              <div className="flex-shrink-0">
                <Briefcase className="w-8 h-8 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Management Anstrebungen</h3>
                <p className="text-gray-400">
                  Übergang zu technischen Führungs- und Managementrollen mit Schwerpunkt auf Teamleitung, Projektmanagement und strategischer Technologieimplementierung.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Kontinuierliche Wissensaneignung</h3>
                <p className="text-gray-400">
                  Absolvieren von zusätzlichen Zertifizierungen in technischen Bereichen vorallem in Microsoft 365 Security.
                  Absolvieren von Zertifizierungen in Teamleading und Projektmanagement Bereichen, sowie in Bereichen der Unternehmensführung.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Kontaktiere mich
            </span>
          </h2>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/isenschmid" className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/noah-isenschmid-b86041251" className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:noah@isenschmids.swiss" className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;