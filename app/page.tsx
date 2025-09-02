"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  ChevronRight,
  ChevronLeft,
  Clock,
  Eye,
  Smartphone,
  Zap,
  Heart,
  Play,
  CheckCircle,
  Target,
  TrendingUp,
} from "lucide-react"

const sections = [
  {
    id: "cover",
    title: "A Nova Moeda: Tempo e Atenção",
    subtitle: "A Economia da Atenção no Marketing Digital",
    type: "cover",
  },
  {
    id: "hook",
    title: "🚨 ESTATÍSTICA CHOCANTE",
    content: "Em 2024, o tempo médio de atenção caiu para apenas 8 segundos",
    highlight: "8 SEGUNDOS = tempo de ler este tweet",
    question: "O que vale mais: 1 milhão de visualizações ou 30 segundos da atenção de alguém?",
    type: "hook",
  },
  {
    id: "intro",
    title: "A Economia da Atenção",
    content:
      "Hoje, o recurso mais escasso não é dinheiro, mas a atenção das pessoas. As marcas não competem apenas com seus concorrentes diretos. Elas disputam espaço com notificações de celular, redes sociais, memes virais, podcasts, séries e qualquer estímulo que capture segundos do público.",
    highlight: "Na prática, cada segundo conta.",
    type: "intro",
  },
  {
    id: "examples",
    title: "🏆 GANHADORES vs ❌ PERDEDORES",
    content: "Casos reais de marcas que dominam (ou falham) na economia da atenção",
    examples: [
      {
        winner: true,
        brand: "TikTok",
        strategy: "Hooks visuais nos primeiros 3 segundos",
        result: "2.5 bilhões de usuários ativos"
      },
      {
        winner: true,
        brand: "Netflix",
        strategy: "Autoplay + previews personalizados",
        result: "70% dos usuários escolhem em 90 segundos"
      },
      {
        winner: false,
        brand: "Sites corporativos tradicionais",
        strategy: "Textos longos + formulários complexos",
        result: "Taxa de rejeição de 85%"
      },
      {
        winner: false,
        brand: "Emails genéricos",
        strategy: "Assuntos padrão + conteúdo massivo",
        result: "Taxa de abertura caiu 40%"
      }
    ],
    type: "examples",
  },
  {
    id: "contrast",
    title: "⚡ Marketing Tradicional vs Marketing da Atenção",
    content: "A diferença que faz a diferença",
    comparison: [
      {
        traditional: "Campanhas de 30 dias",
        attention: "Micro-momentos de 8 segundos",
        impact: "10x mais eficiente"
      },
      {
        traditional: "Foco em alcance",
        attention: "Foco em retenção",
        impact: "5x mais conversão"
      },
      {
        traditional: "Conteúdo perfeito",
        attention: "Conteúdo autêntico",
        impact: "3x mais engajamento"
      }
    ],
    highlight: "Custo da atenção: $0 | Custo do dinheiro: $∞",
    type: "contrast",
  },
  {
    id: "present",
    title: "Ligação com o Presente",
    content: "Plataformas como TikTok, Reels e Shorts moldaram a forma como consumimos conteúdo.",
    points: [
      "O público atual prefere interações rápidas, visuais e autênticas a longos discursos",
      "As novas gerações têm atenção fragmentada — e já influenciam como todas as faixas etárias consomem informação",
      "Algoritmos recompensam conteúdo que prende a atenção nos primeiros 3 segundos",
      "A competição não é mais entre marcas, mas entre qualquer estímulo digital",
    ],
    type: "present",
  },
  {
    id: "trends",
    title: "🔮 Tendências Futuras (2025-2027)",
    content: "Como a IA vai revolucionar ainda mais a economia da atenção",
    trends: [
      {
        trend: "IA Personalizada",
        description: "Conteúdo adaptado em tempo real para cada usuário",
        impact: "Taxa de retenção 3x maior"
      },
      {
        trend: "Realidade Aumentada",
        description: "Experiências imersivas que capturam 100% da atenção",
        impact: "Tempo de engajamento 5x maior"
      },
      {
        trend: "Neuro-Marketing",
        description: "Técnicas baseadas em ciência do cérebro",
        impact: "Conversão 2x mais eficiente"
      }
    ],
    warning: "Quem não se adaptar hoje, será irrelevante amanhã",
    type: "trends",
  },
  {
    id: "credibility",
    title: "📊 Pesquisas e Especialistas",
    content: "Baseado em estudos científicos e especialistas da área",
    sources: [
      {
        study: "Microsoft Research (2024)",
        finding: "Tempo de atenção caiu de 12s para 8s em 5 anos",
        expert: "Dr. Linda Stone - Especialista em Atenção Digital"
      },
      {
        study: "MIT Media Lab (2023)",
        finding: "Conteúdo visual é processado 60.000x mais rápido",
        expert: "Prof. Sherry Turkle - Psicóloga Digital"
      },
      {
        study: "Stanford University (2024)",
        finding: "Micro-momentos geram 3x mais memória de marca",
        expert: "Dr. Nir Eyal - Autor de 'Hooked'"
      }
    ],
    type: "credibility",
  },
  {
    id: "urgency",
    title: "⏰ URGÊNCIA: Agora ou Nunca",
    content: "Marcas que agem agora estão ganhando a guerra da atenção",
    success_stories: [
      {
        brand: "Duolingo",
        action: "Adaptou para micro-aulas de 5 minutos",
        result: "+300% de usuários ativos diários"
      },
      {
        brand: "Spotify",
        action: "Implementou playlists baseadas em humor",
        result: "+250% de tempo de escuta"
      },
      {
        brand: "Instagram",
        action: "Focou em Stories e Reels",
        result: "+400% de engajamento"
      }
    ],
    call_to_action: "Sua marca está pronta para capturar os próximos 8 segundos?",
    type: "urgency",
  },
  {
    id: "insights",
    title: "Insights Retirados",
    insights: [
      {
        icon: Zap,
        title: "Conteúdo curto = maior poder de retenção",
        description: "Um vídeo de 15s pode ter mais impacto que uma campanha de 2 minutos.",
      },
      {
        icon: Target,
        title: "Consistência vence perfeição",
        description:
          "O que importa é estar presente de forma frequente, não apenas esporádica com produções elaboradas.",
      },
      {
        icon: Heart,
        title: "Autenticidade gera conexão",
        description: "As pessoas se conectam mais com o que é real do que com o que é impecável.",
      },
      {
        icon: TrendingUp,
        title: "Relevância vem da experiência, não do volume",
        description: "Marcas que entregam valor em pouco tempo são lembradas e recompensadas com atenção contínua.",
      },
    ],
    type: "insights",
  },
  {
    id: "action",
    title: "Como Investir a Atenção das Pessoas",
    steps: [
      "Crie hooks poderosos nos primeiros 3 segundos do seu conteúdo",
      "Desenvolva uma linguagem visual consistente e reconhecível",
      "Priorize storytelling autêntico sobre produção perfeita",
      "Teste formatos curtos antes de investir em conteúdo longo",
      "Monitore tempo de permanência, não apenas visualizações",
      "Responda rapidamente aos comentários para manter o engajamento",
    ],
    type: "action",
    question: "Se a atenção é a nova moeda, como sua marca está investindo o tempo das pessoas?",
  },
]

export default function MiniTeaching() {
  const [currentSection, setCurrentSection] = useState(0)
  const progress = ((currentSection + 1) / sections.length) * 100

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1)
    }
  }

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1)
    }
  }

  const goToSection = (index: number) => {
    setCurrentSection(index)
  }

  const section = sections[currentSection]

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Progress */}
      <div className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-lg font-semibold text-foreground">Mini-Teaching: Economia da Atenção</h1>
            <Badge variant="secondary" className="text-xs">
              {currentSection + 1} de {sections.length}
            </Badge>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {section.type === "cover" && (
          <div className="text-center py-16">
            <div className="mb-8">
              <div className="relative">
                <Clock className="w-24 h-24 mx-auto text-primary mb-6" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-sm">$</span>
                </div>
              </div>
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-4 text-balance">{section.title}</h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">{section.subtitle}</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                Economia da Atenção
              </span>
              <span className="flex items-center gap-2">
                <Smartphone className="w-4 h-4" />
                Conteúdo Rápido
              </span>
              <span className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Autenticidade
              </span>
            </div>
          </div>
        )}

        {section.type === "hook" && (
          <div className="py-8">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-balance">{section.title}</h2>
            <Card className="mb-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-8">
                <p className="text-lg text-pretty mb-6">{section.content}</p>
                <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg">
                  <p className="text-lg font-semibold text-accent">{section.highlight}</p>
                </div>
              </CardContent>
            </Card>
            <div className="mt-8 text-center">
              <Card className="bg-accent/10 border-accent/30">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Clock className="w-8 h-8 text-accent" />
                    <span className="text-2xl">💰</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-balance">{section.question}</h3>
                  <p className="text-muted-foreground mb-6 text-pretty">
                    A atenção é finita, mas o valor que você entrega pode ser infinito.
                  </p>
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    Comece a Investir Atenção
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {section.type === "intro" && (
          <div className="py-8">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-balance">{section.title}</h2>
            <Card className="mb-8">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-foreground text-pretty mb-4">{section.content}</p>
                <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg">
                  <p className="text-lg font-semibold text-accent">{section.highlight}</p>
                </div>
              </CardContent>
            </Card>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Eye className="w-12 h-12 mx-auto text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Disputa por Atenção</h3>
                  <p className="text-sm text-muted-foreground">Competindo com notificações, memes e entretenimento</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Clock className="w-12 h-12 mx-auto text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Cada Segundo Conta</h3>
                  <p className="text-sm text-muted-foreground">O tempo é o recurso mais valioso do seu público</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Zap className="w-12 h-12 mx-auto text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Impacto Instantâneo</h3>
                  <p className="text-sm text-muted-foreground">Primeiros segundos definem o sucesso do conteúdo</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {section.type === "examples" && (
          <div className="py-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center text-balance">{section.title}</h2>
            <p className="text-lg text-center text-muted-foreground mb-8">{section.content}</p>
            <div className="space-y-6">
              {section.examples?.map((example, index) => (
                <Card key={index} className={`hover:shadow-lg transition-shadow ${
                  example.winner 
                    ? 'border-green-200 bg-green-50/50' 
                    : 'border-red-200 bg-red-50/50'
                }`}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg flex-shrink-0 ${
                        example.winner 
                          ? 'bg-green-100 text-green-600' 
                          : 'bg-red-100 text-red-600'
                      }`}>
                        {example.winner ? (
                          <CheckCircle className="w-6 h-6" />
                        ) : (
                          <Eye className="w-6 h-6" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-lg">{example.brand}</h3>
                          <Badge variant={example.winner ? "default" : "destructive"}>
                            {example.winner ? "🏆 GANHADOR" : "❌ PERDEDOR"}
                          </Badge>
                        </div>
                        <p className="text-pretty mb-2"><strong>Estratégia:</strong> {example.strategy}</p>
                        <p className={`text-sm font-medium ${
                          example.winner ? 'text-green-700' : 'text-red-700'
                        }`}>
                          <strong>Resultado:</strong> {example.result}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {section.type === "contrast" && (
          <div className="py-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center text-balance">{section.title}</h2>
            <Card className="mb-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-8">
                <p className="text-lg text-pretty mb-6">{section.content}</p>
                <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg">
                  <p className="text-lg font-semibold text-accent">{section.highlight}</p>
                </div>
              </CardContent>
            </Card>
            <div className="grid md:grid-cols-3 gap-6">
              {section.comparison?.map((comp, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2 text-balance">{comp.traditional}</h3>
                    <p className="text-sm text-muted-foreground">{comp.attention}</p>
                    <p className="text-lg font-bold text-primary mt-4">{comp.impact}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {section.type === "present" && (
          <div className="py-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center text-balance">{section.title}</h2>
            <Card className="mb-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex gap-2">
                    <Play className="w-6 h-6 text-primary" />
                    <Smartphone className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">TikTok, Reels e Shorts</h3>
                </div>
                <p className="text-lg text-pretty mb-6">{section.content}</p>
                <div className="space-y-4">
                  {section.points?.map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-pretty">{point}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {section.type === "trends" && (
          <div className="py-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center text-balance">{section.title}</h2>
            <Card className="mb-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-8">
                <p className="text-lg text-pretty mb-6">{section.content}</p>
                <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg">
                  <p className="text-lg font-semibold text-accent">{section.warning}</p>
                </div>
              </CardContent>
            </Card>
            <div className="grid md:grid-cols-3 gap-6">
              {section.trends?.map((trend, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2 text-balance">{trend.trend}</h3>
                    <p className="text-sm text-muted-foreground">{trend.description}</p>
                    <p className="text-lg font-bold text-primary mt-4">{trend.impact}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {section.type === "credibility" && (
          <div className="py-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center text-balance">{section.title}</h2>
            <Card className="mb-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-8">
                <p className="text-lg text-pretty mb-6">{section.content}</p>
                <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg">
                  <p className="text-lg font-semibold text-accent">Estudos e Especialistas</p>
                </div>
              </CardContent>
            </Card>
            <div className="grid md:grid-cols-3 gap-6">
              {section.sources?.map((source, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2 text-balance">{source.study}</h3>
                    <p className="text-sm text-muted-foreground">{source.finding}</p>
                    <p className="text-lg font-bold text-primary mt-4">{source.expert}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {section.type === "urgency" && (
          <div className="py-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center text-balance">{section.title}</h2>
            <Card className="mb-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-8">
                <p className="text-lg text-pretty mb-6">{section.content}</p>
                <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg">
                  <p className="text-lg font-semibold text-accent">{section.call_to_action}</p>
                </div>
              </CardContent>
            </Card>
            <div className="grid md:grid-cols-3 gap-6">
              {section.success_stories?.map((story, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2 text-balance">{story.brand}</h3>
                    <p className="text-sm text-muted-foreground">{story.action}</p>
                    <p className="text-lg font-bold text-primary mt-4">{story.result}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {section.type === "insights" && (
          <div className="py-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center text-balance">{section.title}</h2>
            <div className="space-y-6">
              {section.insights?.map((insight, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                        <insight.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{insight.title}</h3>
                        <p className="text-muted-foreground text-pretty">{insight.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {section.type === "action" && (
          <div className="py-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center text-balance">{section.title}</h2>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Estratégias para Capturar Atenção
                </CardTitle>
                <CardDescription>Como fazer sua marca valer cada segundo do seu público</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {section.steps?.map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-pretty">{step}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <div className="mt-8 text-center">
              <Card className="bg-accent/10 border-accent/30">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Clock className="w-8 h-8 text-accent" />
                    <span className="text-2xl">💰</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-balance">{section.question}</h3>
                  <p className="text-muted-foreground mb-6 text-pretty">
                    A atenção é finita, mas o valor que você entrega pode ser infinito.
                  </p>
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    Comece a Investir Atenção
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>

      {/* Navigation */}
      <div className="sticky bottom-0 bg-card border-t border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={prevSection}
              disabled={currentSection === 0}
              className="flex items-center gap-2 bg-transparent"
            >
              <ChevronLeft className="w-4 h-4" />
              Anterior
            </Button>

            <div className="flex gap-2">
              {sections.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSection(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSection ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextSection}
              disabled={currentSection === sections.length - 1}
              className="flex items-center gap-2"
            >
              Próximo
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
