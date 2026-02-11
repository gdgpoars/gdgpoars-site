"use client"

import { useState } from "react"
import {
    MapPin,
    Calendar,
    Sparkles,
    Users,
    Mic,
    BookOpen,
    Handshake,
    Clock,
    Globe,
    Star,
    TrendingUp,
    Brain,
    Smartphone,
    Briefcase,
    Heart,
    MessageCircle,
    Code2,
    Palette,
    GraduationCap,
    ArrowUpRight,
    UserCheck,
    Lightbulb,
    Coffee,
    CheckCircle2,
    AlertCircle,
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    Menu,
    X,
    Link,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    PieChart,
    Pie,
    Cell,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip,
} from "recharts"
import { Header } from "@/components/header"

// Data
const stats = [
    { icon: Users, label: "Participantes inscritos", value: "325", emoji: "🎟️", color: "#4285F4" },
    { icon: Users, label: "Participantes presentes", value: "283", emoji: "👥", color: "#34A853" },
    { icon: Mic, label: "Palestras e painéis", value: "26", emoji: "🎤", color: "#EA4335" },
    { icon: BookOpen, label: "Trilhas de conteúdo", value: "4", emoji: "🧠", color: "#FBBC04" },
    { icon: Handshake, label: "Patrocinadores e Parceiros", value: "21", emoji: "🤝", color: "#4285F4" },
    { icon: Clock, label: "Horas de conteúdo", value: "7h+", emoji: "🕒", color: "#34A853" },
    { icon: Globe, label: "Alcance nas redes", value: "198.4k+", emoji: "🌎", color: "#EA4335" },
    { icon: Star, label: "Nota média do evento", value: "4,8/5", emoji: "⭐", color: "#FBBC04" },
]

const genderData = [
    { name: "Se identificam com o gênero feminino", value: 42, color: "#EA4335" },
    { name: "Se identificam com o gênero masculino", value: 58, color: "#4285F4" },
]

const speakerGenderData = [
    { name: "Se identificam com o gênero feminino", value: 45, color: "#EA4335" },
    { name: "Se identificam com o gênero masculino", value: 55, color: "#4285F4" },
]

const satisfactionData = [
    { name: "Superou expectativas", value: 91, color: "#34A853" },
    { name: "Voltarão em 2026", value: 93, color: "#4285F4" },
    { name: "Talvez voltem", value: 7, color: "#FBBC04" },
]

const tracks = [
    {
        icon: Brain,
        title: "🤖 Inteligência Artificial & Machine Learning",
        color: "#4285F4",
        topics: ["Agentes autônomos", "IA generativa", "LLMs", "Aplicações práticas"],
    },
    {
        icon: Smartphone,
        title: "📱 Mobile & Front-End",
        color: "#34A853",
        topics: ["Flutter", "Jetpack Compose", "Angular", "Web"],
    },
    {
        icon: Briefcase,
        title: "🚀 Carreira & Soft Skills",
        color: "#EA4335",
        topics: ["Liderança", "Transição de carreira", "Networking estratégico"],
    },
    {
        icon: Heart,
        title: "🧘 Saúde Mental, Diversidade & Comunidade",
        color: "#FBBC04",
        topics: ["Bem-estar", "Equidade", "Espaços seguros", "Pertencimento"],
    },
]

const testimonials = [
    { text: "O melhor evento de tecnologia que já participei em Porto Alegre! A energia da comunidade é contagiante.", author: "Participante" },
    { text: "Conteúdo técnico de altíssimo nível com um ambiente super acolhedor. Já quero o próximo!", author: "Desenvolvedora" },
    { text: "A diversidade de trilhas me permitiu aprender tanto sobre IA quanto sobre soft skills. Incrível!", author: "Estudante" },
    { text: "Networking genuíno, palestras inspiradoras e uma organização impecável. Nota 10!", author: "Product Manager" },
]

const sponsors = {
  master: { name: "Faculdade Dom Bosco", level: "master" },
  colaborador: ["Latromi TI", "Alura + Fiap"],
  apoio: ["CodeCafé", "ilegra", "KingHost", "4 TRIX IT"],
  impulso: ["Alcapone","Canal da Cloud","Casa Vivaro", "Codecon", "Critério", "Destino POA", "Use T.I.", "WK Job Hub"],
}

const whatWorked = [
    "Trilhas bem definidas e variadas",
    "Recepção acolhedora e sinalização clara",
    "Boa interação com patrocinadores",
    "Engajamento nas redes sociais",
    "Participação ativa do público",
]

const whatCanImprove = [
    "Ampliar a capacidade de inscritos",
    "Aumentar a quantidade de pausas entre conteúdos",
    "Integrar ainda mais atividades interativas (gamificação)",
    "Criar mais momentos de networking estruturado",
]

// Navigation Section
function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const links = [
        { href: "#numeros", label: "Números" },
        { href: "#conteudo", label: "Conteúdo" },
        { href: "#depoimentos", label: "Depoimentos" },
        { href: "#patrocinadores", label: "Patrocinadores" },
        { href: "#aprendizados", label: "Aprendizados" },
    ]

    return (
        <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <a href="#" className="font-bold text-lg">
                        <span className="text-[#4285F4]">Dev</span>
                        <span className="text-[#EA4335]">Fest</span>
                        <span className="text-[#FBBC04]"> POA</span>
                        <span className="text-[#34A853]"> 2025</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden py-4 border-t">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    )
}

// Hero Section
function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-foreground text-background">
            {/* Animated background shapes */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#4285F4] rounded-full opacity-20 blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#EA4335] rounded-full opacity-20 blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#FBBC04] rounded-full opacity-15 blur-3xl" />
                <div className="absolute bottom-40 left-1/4 w-64 h-64 bg-[#34A853] rounded-full opacity-20 blur-3xl" />
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 backdrop-blur-sm border border-background/20 mb-8">
                    <Sparkles className="w-4 h-4 text-[#FBBC04]" />
                    <span className="text-sm font-medium">Relatório Pós-Evento</span>
                </div>

                {/* Main title */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
                    <span className="text-[#4285F4]">Dev</span>
                    <span className="text-[#EA4335]">Fest</span>{" "}
                    <span className="text-[#FBBC04]">Porto</span>{" "}
                    <span className="text-[#34A853]">Alegre</span>{" "}
                    <span className="text-background">2025</span>
                </h1>

                {/* Subtitle */}
                <p className="text-xl md:text-2xl text-background/80 mb-8 max-w-3xl mx-auto text-pretty">
                    Uma celebração de tecnologia, comunidade e futuro
                </p>

                {/* Quote */}
                <blockquote className="text-lg md:text-xl italic text-background/70 mb-12 max-w-2xl mx-auto">
                    "Mais do que um evento, um ponto de encontro de quem constrói, aprende e compartilha."
                </blockquote>

                {/* Event details */}
                <div className="flex flex-wrap items-center justify-center gap-6 text-background/80">
                    <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-[#EA4335]" />
                        <span>Faculdade Dom Bosco, Porto Alegre/RS</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-[#4285F4]" />
                        <span>06 de dezembro de 2025</span>
                    </div>
                </div>

                {/* Community logos */}
                <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-background/10 rounded-lg backdrop-blur-sm">
                        <div className="w-8 h-8 rounded-full bg-[#4285F4] flex items-center justify-center text-background font-bold text-xs">
                            GDG
                        </div>
                        <span className="text-sm">GDG Porto Alegre</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-background/10 rounded-lg backdrop-blur-sm">
                        <div className="w-8 h-8 rounded-full bg-[#34A853] flex items-center justify-center text-background font-bold text-xs">
                            GDG
                        </div>
                        <span className="text-sm">GDG Caxias do Sul</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-background/10 rounded-lg backdrop-blur-sm">
                        <div className="w-8 h-8 rounded-full bg-[#EA4335] flex items-center justify-center text-background font-bold text-xs">
                            WTM
                        </div>
                        <span className="text-sm">WTM Porto Alegre</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

// Opening Section
function OpeningSection() {
    return (
        <section id="abertura" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <Card className="border-2">
                        <CardContent className="p-8 md:p-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-full bg-[#4285F4]/20 flex items-center justify-center">
                                    <MessageCircle className="w-6 h-6 text-[#4285F4]" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold">Mensagem de Abertura</h2>
                            </div>
                            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                                O DevFest Porto Alegre 2025 foi <strong className="text-foreground">intenso, inspirador e inesquecível</strong>. Reunimos pessoas com diferentes histórias, níveis de experiência e áreas de atuação, todas movidas pela mesma vontade: <strong className="text-foreground">aprender, compartilhar e evoluir juntas</strong>.
                            </p>
                            <p className="text-lg leading-relaxed text-muted-foreground">
                                Este relatório é um convite para reviver os melhores momentos, entender o impacto gerado e vislumbrar tudo o que ainda está por vir.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

// About Section
function AboutSection() {
    return (
        <section id="sobre" className="py-20 bg-muted/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                        O que é o DevFest
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto">
                    <Card className="mb-8">
                        <CardContent className="p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <Globe className="w-8 h-8 text-[#4285F4]" />
                                <p className="text-lg font-semibold">
                                    O maior evento organizado pelas comunidades Google Developer Groups (GDG) no mundo.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-foreground text-background">
                        <CardContent className="p-8">
                            <h3 className="text-xl font-semibold mb-6">
                                Em sua primeira edição em Porto Alegre, ganhou um tempero especial:
                            </h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#4285F4]/30 flex items-center justify-center">
                                        <Users className="w-8 h-8 text-[#4285F4]" />
                                    </div>
                                    <h4 className="font-semibold mb-2">Comunidade Ativa e Diversa</h4>
                                    <p className="text-sm text-background/70">Pessoas de todas as áreas e níveis</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#34A853]/30 flex items-center justify-center">
                                        <BookOpen className="w-8 h-8 text-[#34A853]" />
                                    </div>
                                    <h4 className="font-semibold mb-2">Conteúdo Técnico de Alto Nível</h4>
                                    <p className="text-sm text-background/70">Palestras relevantes e atuais</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#FBBC04]/30 flex items-center justify-center">
                                        <Heart className="w-8 h-8 text-[#FBBC04]" />
                                    </div>
                                    <h4 className="font-semibold mb-2">Espaço Seguro para Troca</h4>
                                    <p className="text-sm text-background/70">Networking e oportunidades</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

// Stats Section
function StatsSection() {
    return (
        <section id="numeros" className="py-20 bg-muted/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                        DevFest Porto Alegre 2025 em Números
                    </h2>
                    <p className="text-muted-foreground text-lg">Uma sessão para brilhar os olhos</p>
                </div>

                {/* Main stats grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {stats.map((stat) => (
                        <Card key={stat.label} className="h-full hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
                            <CardContent className="p-6 text-center">
                                <div className="text-3xl mb-2">{stat.emoji}</div>
                                <div
                                    className="text-3xl md:text-4xl font-bold mb-2"
                                    style={{ color: stat.color }}
                                >
                                    {stat.value}
                                </div>
                                <p className="text-sm text-muted-foreground">{stat.label}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Charts section */}
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Gender distribution */}
                    <Card>
                        <CardContent className="p-6">
                            <h3 className="font-semibold mb-4 text-center">Distribuição de Gênero - Participantes</h3>
                            <div className="h-48">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={genderData}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={40}
                                            outerRadius={70}
                                            paddingAngle={5}
                                            dataKey="value"
                                        >
                                            {genderData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip formatter={(value) => `${value}%`} />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="flex justify-center gap-4 mt-4">
                                {genderData.map((item) => (
                                    <div key={item.name} className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                                        <span className="text-sm">{item.name}: {item.value}%</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Speaker gender distribution */}
                    <Card>
                        <CardContent className="p-6">
                            <h3 className="font-semibold mb-4 text-center">Distribuição de Gênero - Palestrantes</h3>
                            <div className="h-48">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={speakerGenderData}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={40}
                                            outerRadius={70}
                                            paddingAngle={5}
                                            dataKey="value"
                                        >
                                            {speakerGenderData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip formatter={(value) => `${value}%`} />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="flex justify-center gap-4 mt-4">
                                {speakerGenderData.map((item) => (
                                    <div key={item.name} className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                                        <span className="text-sm">{item.name}: {item.value}%</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Satisfaction chart */}
                    <Card>
                        <CardContent className="p-6">
                            <h3 className="font-semibold mb-4 text-center">Satisfação do Público</h3>
                            <div className="h-48">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                        data={satisfactionData}
                                        layout="vertical"
                                        margin={{ top: 0, right: 30, left: 0, bottom: 0 }}
                                    >
                                        <XAxis type="number" domain={[0, 100]} hide />
                                        <YAxis type="category" dataKey="name" width={0} hide />
                                        <Tooltip formatter={(value) => `${value}%`} />
                                        <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                                            {satisfactionData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="space-y-2 mt-4">
                                {satisfactionData.map((item) => (
                                    <div key={item.name} className="flex items-center justify-between text-sm">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                                            <span>{item.name}</span>
                                        </div>
                                        <span className="font-semibold">{item.value}%</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Highlight stats */}
                <div className="mt-12 grid md:grid-cols-3 gap-6">
                    <Card className="bg-[#34A853]/10 border-[#34A853]/30">
                        <CardContent className="p-6 text-center">
                            <TrendingUp className="w-8 h-8 mx-auto mb-2 text-[#34A853]" />
                            <p className="text-2xl font-bold text-[#34A853]">91%</p>
                            <p className="text-sm text-muted-foreground">disseram que o evento SUPEROU as expectativas</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-[#4285F4]/10 border-[#4285F4]/30">
                        <CardContent className="p-6 text-center">
                            <Star className="w-8 h-8 mx-auto mb-2 text-[#4285F4]" />
                            <p className="text-2xl font-bold text-[#4285F4]">93%</p>
                            <p className="text-sm text-muted-foreground">afirmaram que VOLTARÃO em 2026</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-[#EA4335]/10 border-[#EA4335]/30">
                        <CardContent className="p-6 text-center">
                            <Users className="w-8 h-8 mx-auto mb-2 text-[#EA4335]" />
                            <p className="text-2xl font-bold text-[#EA4335]">0%</p>
                            <p className="text-sm text-muted-foreground">disseram que não voltariam</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

// Audience Section
function AudienceSection() {
    const audiences = [
        { icon: Code2, label: "Pessoas Desenvolvedoras", color: "#4285F4" },
        { icon: Palette, label: "Designers", color: "#EA4335" },
        { icon: Briefcase, label: "Product Managers", color: "#FBBC04" },
        { icon: GraduationCap, label: "Estudantes", color: "#34A853" },
        { icon: ArrowUpRight, label: "Transição de Carreira", color: "#4285F4" },
        { icon: UserCheck, label: "Lideranças Técnicas", color: "#EA4335" },
    ]

    return (
        <section id="publico" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                        Público & Comunidade
                    </h2>
                    <p className="text-muted-foreground text-lg">Quem fez o DevFest acontecer</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
                    {audiences.map((item) => (
                        <Card key={item.label} className="h-full hover:shadow-lg transition-shadow text-center">
                            <CardContent className="p-4">
                                <div
                                    className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center"
                                    style={{ backgroundColor: `${item.color}20` }}
                                >
                                    <item.icon className="w-6 h-6" style={{ color: item.color }} />
                                </div>
                                <p className="text-sm font-medium">{item.label}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <Card className="bg-muted max-w-2xl mx-auto">
                    <CardContent className="p-8">
                        <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-[#FBBC04]" />
                            Destaque para:
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-[#4285F4]" />
                                <span>Diversidade de níveis (iniciante ao sênior)</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-[#34A853]" />
                                <span>Forte presença de comunidade local</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-[#EA4335]" />
                                <span>Conexões que começaram ali (e vão longe)</span>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

// Content Section
function ContentSection() {
    return (
        <section id="conteudo" className="py-20 bg-muted/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                        Trilhas de Conteúdo
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Foram 26 palestras e painéis distribuídos em 4 trilhas temáticas
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {tracks.map((track) => (
                        <Card key={track.title} className="h-full hover:shadow-lg transition-shadow overflow-hidden">
                            <div className="h-2" style={{ backgroundColor: track.color }} />
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                        style={{ backgroundColor: `${track.color}20` }}
                                    >
                                        <track.icon className="w-6 h-6" style={{ color: track.color }} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-3">{track.title}</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {track.topics.map((topic) => (
                                                <span
                                                    key={topic}
                                                    className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                                                >
                                                    {topic}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <Card className="mt-8 max-w-4xl mx-auto bg-foreground text-background">
                    <CardContent className="p-8 text-center">
                        <blockquote className="text-xl md:text-2xl font-medium italic">
                            "A gente sai diferente de como entra — e essa era a ideia."
                        </blockquote>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

// Experience Section
function ExperienceSection() {
    return (
        <section id="experiencia" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                        Experiência do Participante
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Não foi só sobre conteúdo — foi sobre experiência.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 max-w-5xl mx-auto">
                    {[
                        { emoji: "🏠", title: "Ambiente Acolhedor", desc: "Espaço confortável e receptivo" },
                        { emoji: "🤝", title: "Networking Espontâneo", desc: "Conexões naturais e genuínas" },
                        { emoji: "💼", title: "Troca com Patrocinadores", desc: "Oportunidades de carreira" },
                        { emoji: "⚡", title: "Energia de Comunidade", desc: "Do começo ao fim" },
                    ].map((item) => (
                        <Card key={item.title} className="h-full hover:shadow-lg transition-shadow">
                            <CardContent className="p-6 text-center">
                                <div className="text-4xl mb-4">{item.emoji}</div>
                                <h3 className="font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <Card className="max-w-2xl mx-auto bg-foreground text-background">
                    <CardContent className="p-8 text-center">
                        <blockquote className="text-xl md:text-2xl font-medium italic">
                            "Dava vontade de ficar mais tempo."
                        </blockquote>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

// Testimonials Section
function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <section id="depoimentos" className="py-20 bg-muted/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                        O que Disseram Sobre o Evento
                    </h2>
                    <p className="text-muted-foreground text-lg">Vozes da comunidade</p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Card className="relative">
                        <CardContent className="p-8 md:p-12">
                            <div className="text-6xl text-primary/20 absolute top-4 left-4">"</div>
                            <blockquote className="text-xl md:text-2xl text-center mb-6 pt-8">
                                {testimonials[currentIndex].text}
                            </blockquote>
                            <p className="text-center text-muted-foreground">
                                — {testimonials[currentIndex].author}
                            </p>
                        </CardContent>
                    </Card>

                    <div className="flex items-center justify-center gap-4 mt-6">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={prevTestimonial}
                            aria-label="Depoimento anterior"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </Button>
                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                                        }`}
                                    onClick={() => setCurrentIndex(index)}
                                    aria-label={`Ir para depoimento ${index + 1}`}
                                />
                            ))}
                        </div>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={nextTestimonial}
                            aria-label="Próximo depoimento"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

function SponsorsSection() {
    return (
        <section id="patrocinadores" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                        Patrocinadores & Parceiros
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        21 empresas que acreditaram e investiram no DevFest Porto Alegre
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Master */}
                    <Card className="bg-gradient-to-r from-[#FBBC04]/20 to-[#FBBC04]/5 border-[#FBBC04]/30">
                        <CardContent className="p-8 text-center">
                            <span className="inline-block px-4 py-1 text-xs font-semibold uppercase tracking-wider bg-[#FBBC04] text-foreground rounded-full mb-4">
                                colaborador
                            </span>
                            <h3 className="text-2xl font-bold">{sponsors.master.name}</h3>
                        </CardContent>
                    </Card>

                    {/* Colaborador */}
                    <div>
                        <h4 className="text-center font-semibold mb-4 text-[#FBBC04]">Gold</h4>
                        <div className="flex flex-wrap justify-center gap-4">
                            {sponsors.colaborador.map((sponsor) => (
                                <Card key={sponsor}>
                                    <CardContent className="p-4 px-8">
                                        <span className="font-medium">{sponsor}</span>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Apoio */}
                    <div>
                        <h4 className="text-center font-semibold mb-4 text-muted-foreground">Silver</h4>
                        <div className="flex flex-wrap justify-center gap-4">
                            {sponsors.apoio.map((sponsor) => (
                                <Card key={sponsor}>
                                    <CardContent className="p-4 px-6">
                                        <span className="text-sm font-medium">{sponsor}</span>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Impulso */}
                    <div>
                        <h4 className="text-center font-semibold mb-4 text-[#CD7F32]">Bronze</h4>
                        <div className="flex flex-wrap justify-center gap-3">
                            {sponsors.impulso.map((sponsor) => (
                                <span
                                    key={sponsor}
                                    className="px-4 py-2 rounded-full bg-muted text-sm font-medium"
                                >
                                    {sponsor}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}   

// Impact Section
function ImpactSection() {
    const impacts = [
        { emoji: "📚", title: "Estímulo ao estudo contínuo" },
        { emoji: "💪", title: "Fortalecimento da comunidade local" },
        { emoji: "🤝", title: "Novas parcerias" },
        { emoji: "🎤", title: "Convites para palestras e eventos futuros" },
        { emoji: "🚪", title: "Portas abertas para quem está começando" },
    ]

    return (
        <section id="impacto" className="py-20 bg-muted/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                        Impacto para a Comunidade
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        O DevFest Porto Alegre 2025 gerou impacto que vai além do dia do evento
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="space-y-4">
                        {impacts.map((item) => (
                            <Card key={item.title} className="hover:shadow-lg transition-shadow">
                                <CardContent className="p-4 flex items-center gap-4">
                                    <div className="text-3xl">{item.emoji}</div>
                                    <p className="font-medium">{item.title}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

// Behind the Scenes Section
function BehindScenesSection() {
    return (
        <section id="bastidores" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                        Bastidores & Organização
                    </h2>
                    <p className="text-muted-foreground text-lg">Por trás de cada detalhe</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {[
                        { icon: Users, title: "Voluntários Incríveis", desc: "Incansáveis, 3 meses de trabalho focado" },
                        { icon: Lightbulb, title: "Planejamento Colaborativo", desc: "Ideias compartilhadas e construídas juntas" },
                        { icon: Coffee, title: "Muita Dedicação", desc: "Reuniões, cafés e mensagens no WhatsApp" },
                    ].map((item) => (
                        <Card key={item.title} className="h-full text-center hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                                    <item.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

// Learnings Section
function LearningsSection() {
    return (
        <section id="aprendizados" className="py-20 bg-muted/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                        Aprendizados
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Olhar para o que deu certo — e para o que pode evoluir
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* What Worked */}
                    <Card className="border-[#34A853]/30 bg-[#34A853]/5">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-full bg-[#34A853]/20 flex items-center justify-center">
                                    <CheckCircle2 className="w-5 h-5 text-[#34A853]" />
                                </div>
                                <h3 className="text-xl font-semibold">O que funcionou bem</h3>
                            </div>
                            <ul className="space-y-3">
                                {whatWorked.map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#34A853] flex-shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    {/* What Can Improve */}
                    <Card className="border-[#FBBC04]/30 bg-[#FBBC04]/5">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-full bg-[#FBBC04]/20 flex items-center justify-center">
                                    <AlertCircle className="w-5 h-5 text-[#FBBC04]" />
                                </div>
                                <h3 className="text-xl font-semibold">O que pode evoluir</h3>
                            </div>
                            <ul className="space-y-3">
                                {whatCanImprove.map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <AlertCircle className="w-5 h-5 text-[#FBBC04] flex-shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                <Card className="mt-8 max-w-2xl mx-auto bg-foreground text-background">
                    <CardContent className="p-8 text-center">
                        <blockquote className="text-xl font-medium italic">
                            "A gente aprende mais quando escuta de verdade."
                        </blockquote>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

// CTA Section
function CTASection() {
    return (
        <section id="2026" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                        E o DevFest 2026?
                    </h2>
                    <p className="text-muted-foreground text-lg">Já estamos preparando o próximo capítulo</p>
                </div>
  <div className="max-w-4xl mx-auto">
  <Card className="relative z-10 bg-gradient-to-br from-[#4285F4]/10 via-[#EA4335]/10 to-[#FBBC04]/10 border-2">
    <CardContent className="p-8 md:p-12">
      <div className="grid md:grid-cols-2 gap-8">

        {/* PATROCINADOR */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold mb-4">
            Quer patrocinar?
          </h3>

          <p className="text-muted-foreground mb-6">
            Participe da próxima edição e conecte sua marca com a maior comunidade tech do Rio Grande do Sul.
          </p>

          <Button
            type="button"
            onClick={() =>
              window.open(
                "https://forms.gle/444YexjxoH9LFRZC7",
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="pointer-events-auto bg-[#4285F4] hover:bg-[#4285F4]/90 text-white flex items-center gap-2"
          >
            Quero ser parceiro
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* PARTICIPANTE */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold mb-4">
            Quer participar?
          </h3>

          <p className="text-muted-foreground mb-6">
            Entre na lista de espera e saiba antes de todo mundo!
          </p>

          <Button
            type="button"
            variant="outline"
            onClick={() =>
              window.open(
                "https://forms.gle/ufdoNeJx29ax7hxR9",
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="pointer-events-auto border-[#34A853] text-[#34A853] hover:bg-[#34A853]/10 flex items-center gap-2"
          >
            Entrar na lista de espera
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </CardContent>
  </Card>

                    <div className="mt-12 text-center">
                        <p className="text-lg text-muted-foreground mb-4">Fique conectado(a):</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                { label: "GDG Porto Alegre", color: "#4285F4" },
                                { label: "GDG Caxias do Sul", color: "#34A853" },
                            ].map((community) => (
                                <Button
                                    key={community.label}
                                    variant="outline"
                                    className="rounded-full bg-transparent"
                                    style={{ borderColor: community.color, color: community.color }}
                                >
                                    {community.label}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// Thanks Section
function ThanksSection() {
    const thanks = [
        { emoji: "🎟️", label: "Participantes" },
        { emoji: "🎤", label: "Palestrantes" },
        { emoji: "💼", label: "Patrocinadores" },
        { emoji: "🤝", label: "Parceiros" },
        { emoji: "🙌", label: "Voluntários" },
        { emoji: "💙", label: "Comunidade GDG" },
    ]

    return (
        <section id="agradecimentos" className="py-20 bg-muted/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                        Agradecimentos
                    </h2>
                    <p className="text-muted-foreground text-lg">Nosso muito obrigado:</p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-12 max-w-3xl mx-auto">
                    {thanks.map((item) => (
                        <div
                            key={item.label}
                            className="flex items-center gap-2 px-6 py-3 rounded-full bg-background hover:bg-background/80 transition-colors shadow-sm"
                        >
                            <span className="text-xl">{item.emoji}</span>
                            <span className="font-medium">{item.label}</span>
                        </div>
                    ))}
                </div>

                <Card className="max-w-2xl mx-auto bg-foreground text-background">
                    <CardContent className="p-8 text-center">
                        <blockquote className="text-xl md:text-2xl font-medium italic mb-4">
                            "Comunidade se constrói junto. E esse evento foi prova disso."
                        </blockquote>
                        <p className="text-background/70">Até o próximo encontro!</p>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

// Footer
function Footer() {
    return (
        <footer className="py-8 bg-foreground text-background">
            <div className="container mx-auto px-4 text-center">
                <p className="mb-4 font-semibold">
                    <span className="text-[#4285F4]">Dev</span>
                    <span className="text-[#EA4335]">Fest</span>
                    <span className="text-[#FBBC04]"> Porto</span>
                    <span className="text-[#34A853]"> Alegre</span>
                    <span> 2025</span>
                </p>
                <p className="text-sm text-background/70 mb-4">
                    Organizado por GDG Porto Alegre, GDG Caxias do Sul e WTM Porto Alegre
                </p>
                <p className="text-xs text-background/50">
                    Uma iniciativa das comunidades Google Developer Groups
                </p>
            </div>
        </footer>
    )
}

export default function DevFestReport() {
    return (
        <>
            <div className="flex min-h-screen flex-col">
                <Header />
                <HeroSection />
                <Navigation />
                <OpeningSection />
                <AboutSection />
                <StatsSection />
                <AudienceSection />
                <ContentSection />
                <ExperienceSection />
                <SponsorsSection />
                <ImpactSection />
                <TestimonialsSection />
                <BehindScenesSection />
                <LearningsSection />
                <CTASection />
                <ThanksSection />
                <Footer />
            </div>
        </>
    )
}
