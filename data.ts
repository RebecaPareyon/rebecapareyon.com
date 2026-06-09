import { CaseStudy, ExperienceItem, ProductApproachItem, TestimonialItem } from "./types";

export const METRICS = [
  {
    id: "adoption",
    value: "80%",
    label: "Adopción digital",
    description: "de solicitudes en canales digitales que antes se realizaban de forma offline y presencial.",
    trend: "+62% vs año anterior",
    icon: "TrendingUp",
  },
  {
    id: "growth",
    value: "+58%",
    label: "Crecimiento de producto",
    description: "en el volumen transaccional y activación semanal del producto principal bajo mi liderazgo.",
    trend: "Sustentable e incremental",
    icon: "Activity",
  },
  {
    id: "hiring",
    value: "+400%",
    label: "Contratación digital",
    description: "incremento en colocaciones y solicitudes completadas de manera 100% digital end-to-end.",
    trend: "Escalabilidad asegurada",
    icon: "Zap",
  },
  {
    id: "onboarding",
    value: "7 → 3 min",
    label: "Tiempo de onboarding",
    description: "reducción en el tiempo medio para completar el registro y validación de identidad (KYC).",
    trend: "-57% de fricción en embudo",
    icon: "Clock",
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "reporte-credito",
    title: "Reporte de Crédito Especial (RCE)",
    subtitle: "Evolución de Producto & Regulación",
    description: "Lideré la estrategia y evolución de este producto crediticio, coordinando esfuerzos clave de negocio, desarrollo, operaciones y cumplimiento regulatorio.",
    challenge: "Mantener competitivo el principal producto de consulta crediticia en un entorno donde los usuarios demandaban experiencias más simples, digitales y de autoservicio.",
    solution: "Como Senior PM, definí el roadmap de evolución, prioricé mejoras críticas de experiencia y de interfaz de usuario. Alineé los requerimientos de cumplimiento gubernamental con un flujo de interacción fluido y de autoservicio, eliminando fricciones innecesarias y gestionando la entrega de valor de extremo a extremo.",
    keyMetric: "+58%",
    metricLabel: "Crecimiento de Producto",
    tags: ["Product Strategy", "Feature Prioritization", "Cross-Functional Integration", "Compliance"],
    results: [
      "+58% de crecimiento del producto.",
      "Mayor adopción del Reporte de Crédito Especial por parte de usuarios digitales.",
      "Incremento en el valor percibido y competitividad de la oferta."
    ],
    impactCategory: "Estrategia & Crecimiento"
  },
  {
    id: "pagos-digitales",
    title: "Experiencia de Pagos Digitales",
    subtitle: "Suscripciones Recurrentes & Optimización de Conversión",
    description: "Diseño y habilitación de flujos financieros robustos y con transaccionalidad recurrente integrada.",
    challenge: "Reducir la fricción durante la contratación y habilitar capacidades que soportaran nuevos modelos de negocio basados en recurrencia.",
    solution: "Lideré iniciativas de producto enfocadas en optimizar la experiencia transaccional y fortalecer las capacidades de pago de la plataforma. Definí requerimientos y reglas de negocio para nuevas capacidades, coordiné integraciones con proveedores de servicios financieros y gestioné dependencias entre equipos técnicos y operativos.",
    keyMetric: "Recurrente",
    metricLabel: "Habilitación Comercial",
    tags: ["Payments Strategy", "Subscription Billing", "API Integration", "Conversion Optimization"],
    results: [
      "Habilitación de pagos recurrentes para productos de suscripción.",
      "Mayor flexibilidad para el lanzamiento de nuevos modelos comerciales.",
      "Mejora en la experiencia de compra de los usuarios."
    ],
    impactCategory: "Monetización & Retención"
  },
  {
    id: "notificaciones",
    title: "Notificaciones",
    subtitle: "Evolución de Engagement & Monetización Recurrente",
    description: "Redefinición estratégica de notificaciones transaccionales a ganchos de comportamiento enfocados en salud financiera.",
    challenge: "Evolucionar un producto transaccional hacia una propuesta de valor recurrente que fortaleciera la relación con los clientes.",
    solution: "Lideré la redefinición estratégica del producto, identificando oportunidades de crecimiento, monetización y retención. Diseñé nuevos esquemas de suscripción, definí funcionalidades de engagement y coordiné el lanzamiento de nuevas capacidades.",
    keyMetric: "+400%",
    metricLabel: "Contratación Digital",
    tags: ["SaaS Models", "User Engagement", "Retention", "Multi-channel Communications"],
    results: [
      "Más de 400% de crecimiento en contrataciones digitales.",
      "Incremento en la adopción de servicios complementarios.",
      "Base para una estrategia de ingresos recurrentes."
    ],
    impactCategory: "Monetización & Retención"
  },
  {
    id: "protege-historial",
    title: "Protege tu Historial",
    subtitle: "Seguridad de Identidad & Mitigación de Fraude",
    description: "Iniciativa de alta seguridad orientada a la protección interactiva y ágil del historial crediticio contra accesos no autorizados.",
    challenge: "Responder a una necesidad creciente de seguridad financiera y protección contra fraude e identidad.",
    solution: "Lideré la evolución del producto desde la conceptualización de nuevas capacidades hasta la definición de su estrategia comercial. Rediseñé la propuesta de valor, definí planes y modelo de negocio, traduje necesidades de clientes y alineé requerimientos regulatorios y tecnológicos.",
    keyMetric: "Seguridad",
    metricLabel: "Diferenciación de Mercado",
    tags: ["Fraud Prevention", "Identity Security", "Product Discovery", "Commercial Strategy"],
    results: [
      "Fortalecimiento del portafolio de productos de protección financiera.",
      "Generación de nuevas oportunidades de monetización.",
      "Mayor diferenciación frente a la oferta tradicional del mercado."
    ],
    impactCategory: "Seguridad & Protección"
  },
  {
    id: "transformacion-digital",
    title: "Transformación Digital de la Operación",
    subtitle: "Automatización & Mitigación de Carga Back-Office",
    description: "Digitalización de flujos y trámites tradicionales logrando máxima escalabilidad y reduciendo la fricción burocrática.",
    challenge: "Dependencia de procesos presenciales que limitaban la escalabilidad del negocio y afectaban la experiencia del cliente.",
    solution: "Lideré iniciativas de transformación digital enfocadas en migrar procesos críticos a canales digitales. Identifiqué oportunidades de automatización y simplificación, definí prioridades e impulsé mejoras continuas en los journeys digitales.",
    keyMetric: "80%",
    metricLabel: "Interacciones del Canal",
    tags: ["Process Automation", "Digital Transformation", "Scale", "Operational Efficiency"],
    results: [
      "Migración de la operación hacia un modelo predominantemente digital.",
      "80% de las solicitudes realizadas a través de canales digitales.",
      "Mayor eficiencia operativa y escalabilidad."
    ],
    impactCategory: "Eficiencia Operativa"
  },
  {
    id: "optimizacion-onboarding",
    title: "Optimización de Onboarding",
    subtitle: "Acortamiento de Funnel & Conversión KYC de Registro",
    description: "Simplificación extrema y validación ágil de flujos de adquisición e incorporación en cumplimiento de regulaciones.",
    challenge: "Reducir el abandono durante la contratación y facilitar el acceso a los productos para nuevos usuarios.",
    solution: "Lideré iniciativas enfocadas en mejorar la conversión y simplificar la experiencia de incorporación. Analicé el comportamiento de usuarios dentro del funnel, identifiqué puntos de fricción y prioricé cambios de alto impacto.",
    keyMetric: "7 → 3 min",
    metricLabel: "Adquisición Acelerada",
    tags: ["KYC & Onboarding", "Funnel Conversion", "A/B Testing", "Friction Reduction"],
    results: [
      "Reducción del proceso de onboarding de 7 a 3 minutos.",
      "Mejora en la experiencia de contratación.",
      "Incremento en la eficiencia del funnel de adquisición."
    ],
    impactCategory: "Conversión & Embudo"
  },
  {
    id: "soluciones-b2b",
    title: "Soluciones B2B para Instituciones Financieras",
    subtitle: "Integración Empresarial & APIs Financieras Reguladas",
    description: "Evolución y entrega de interfaces de datos seguras y robustas para grandes clientes corporativos fintech.",
    challenge: "Atender necesidades de clientes empresariales dentro de un entorno altamente regulado y con múltiples actores involucrados.",
    solution: "Participé en la gestión y evolución de soluciones orientadas a instituciones financieras, colaborando estrechamente con áreas comerciales y técnicas. Realicé levantamiento de requerimientos y coordiné la entrega de soluciones.",
    keyMetric: "B2B & B2C",
    metricLabel: "Integración Segura",
    tags: ["B2B SaaS", "Corporate FinTech", "Stakeholder Management", "Regulated Environments"],
    results: [
      "Implementación de mejoras alineadas con objetivos de clientes corporativos.",
      "Fortalecimiento de relaciones con stakeholders internos y externos.",
      "Experiencia en productos financieros para segmentos B2B y B2C."
    ],
    impactCategory: "Enterprise B2B"
  }
];

export const PRODUCT_APPROACH: ProductApproachItem[] = [
  {
    title: "Product Discovery",
    description: "Investigo a fondo para encontrar los dolores correctos a resolver antes de construir código innecesario.",
    icon: "Compass",
    metricsText: "User Research & JTBD",
    activities: [
      "Metodología Jobs To Be Done (JTBD) para entender gatillos emocionales y funcionales.",
      "Entrevistas en profundidad y pruebas con prototipos interactivos rápidos.",
      "Mapeo de User Journeys y Service Blueprints para visibilizar fricciones."
    ]
  },
  {
    title: "Product Strategy",
    description: "Establezco metas claras que alinean el valor entregado para el usuario con el impacto al negocio.",
    icon: "Target",
    metricsText: "OKRs & Roadmapping",
    activities: [
      "Priorización rigurosa utilizando frameworks adaptados (RICE, Kano, Cost of Delay).",
      "Establecimiento de OKRs de producto medibles e integrados a las metas de ingresos corporativos.",
      "Roadmaps flexibles basados en outcomes en lugar de features estáticas."
    ]
  },
  {
    title: "Product Delivery",
    description: "Colaboro codo a codo con ingeniería y diseño para garantizar lanzamientos de alta calidad a tiempo.",
    icon: "Cpu",
    metricsText: "Cross-functional Execution",
    activities: [
      "Agilidad práctica (Scrum/Kanban) con ceremonias eficientes y comunicación ágil.",
      "Escribo requerimientos detallados (PRDs) con historias de usuario y criterios de aceptación claros.",
      "Estratega de lanzamientos progresivos (Phased rollouts, Feature flags, Beta Testing)."
    ]
  },
  {
    title: "Growth & Analytics",
    description: "Analizo datos continuamente para medir el impacto real e iterar basándome en evidencia.",
    icon: "BarChart3",
    metricsText: "A/B Testing & Funnels",
    activities: [
      "Análisis de embudo de conversión profundo y experimentación continua (A/B testing).",
      "Monitoreo de telemetría de interacción con herramientas de analítica (Google Analytics, SQL).",
      "Optimización constante del onboarding y flujos críticos de pago."
    ]
  }
];

export const SKILL_CATEGORIES = [
  {
    name: "Product Strategy & Management",
    skills: ["Product Strategy", "Roadmapping", "Product Discovery", "Product Delivery", "OKRs", "RICE Prioritization", "Stakeholder Management", "Cross-functional Leadership"]
  },
  {
    name: "Fintech & Data Capabilities",
    skills: ["Fintech Compliance", "Fraud Prevention", "Digital Onboarding & KYC", "Subscription Models", "Product Analytics", "SQL Data Extraction", "A/B Testing", "Data-Driven Decisions"]
  },
  {
    name: "Methods & Tools",
    skills: ["Agile/Scrum", "Jira", "Figma Prototyping", "Google Analytics", "User Interviewing", "Jobs To Be Done (JTBD)", "Growth Hacking", "Service Blueprinting"]
  }
];

export const CAREER_HISTORY: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Product Manager / Product Owner",
    company: "Círculo de Crédito",
    location: "México (Híbrido)",
    period: "Marzo 2022 - Presente",
    description: "Responsable de liderar de manera transversal el diseño, evolución, crecimiento y monetización de un portafolio digital utilizado por más de 500 mil usuarios, alineando esfuerzos de negocio, ingeniería, cumplimiento regulatorio y UX.",
    metrics: [
      "Definí la estrategia de evolución de 4 productos B2C y 7 productos B2B enfocados en monitoreo crediticio, protección y engagement recurrente.",
      "Lideré la transformación digital del negocio, aumentando la participación de canales digitales de 40% a 80% de las solicitudes totales, generando eficiencias operativas y escalabilidad.",
      "Rediseñé el onboarding digital reduciendo el tiempo de contratación en 57%, mejorando notablemente la conversión y la experiencia del usuario.",
      "Diseñé estrategias de cross-sell y productos complementarios que generaron un crecimiento superior al 400% en la adopción de servicios digitales adicionales."
    ],
    tags: ["Product Strategy", "Growth & Monetization", "Digital Onboarding", "Cross-selling", "Fintech Compliance", "SQL", "Google Analytics"]
  },
  {
    id: "exp-2",
    role: "Financial Planning",
    company: "iVoy delivery",
    location: "México",
    period: "Junio 2021 - Marzo 2022",
    description: "Liderazgo en planeación financiera táctica y análisis transaccional profundo, diseñando e implementando las reglas de negocio y sistemas automatizados para mitigar riesgos, reducir costos y optimizar la rentabilidad de las operaciones digitales.",
    metrics: [
      "Lideré el análisis de datos transaccionales y el comportamiento de los modelos de negocio para identificar fricciones operativas y definir iniciativas de optimización en la rentabilidad de la plataforma.",
      "Diseñé e implementé las reglas de negocio y el sistema de monitoreo automatizado de costos transaccionales, logrando una reducción del 15% en pérdidas por fraude.",
      "Fungí como stakeholder estratégico clave, traduciendo análisis de viabilidad financiera en requerimientos de negocio y roadmaps trimestrales para decisiones de nivel C-Level (CFO y CEO).",
      "Recibí un reconocimiento especial del CEO por destacado desempeño en finanzas durante el Q4 de 2021."
    ],
    tags: ["Financial Planning", "Data Analysis", "Fraud Prevention", "Roadmapping", "C-Level Reporting"]
  },
  {
    id: "exp-3",
    role: "Head of Financial Planning",
    company: "ADO",
    location: "México",
    period: "Agosto 2019 - Junio 2021",
    description: "Liderazgo integral de la planeación financiera y el control de gestión estratégica para tres líneas de negocio concurrentes, garantizando la optimización de recursos y estableciendo marcos de gobernanza presupuestal de alta precisión.",
    metrics: [
      "Aseguré la asignación óptima de recursos y la alineación de los objetivos operativos con la visión de crecimiento corporativo de la compañía.",
      "Establecí comités de seguimiento y marcos de gobernanza presupuestal que redujeron las desviaciones financieras en un 6% global.",
      "Automatizé la visibilidad de métricas críticas en tiempo real para agilizar la toma de decisiones estratégicas de la alta dirección."
    ],
    tags: ["Budgeting", "Governance", "Resource Allocation", "Métricas en Tiempo Real", "Corporate Finance"]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    name: "José Carlos Guraieb Valdés",
    role: "Analista Financiero Sr",
    company: "CBRE",
    text: "Muy dedicada, comprometida y organizada en su trabajo. Buena líder, abierta a trabajar con diferentes equipos, proactiva, se desenvuelve fácilmente, siempre abierta a ayudar y su trabajo siempre se basó por ser bien hecho y ético.",
    avatarLetter: "J",
    avatarBg: "bg-purple-600",
    date: "Recomendado en LinkedIn"
  },
  {
    id: "test-2",
    name: "Rodrigo Miguel Amaro Andreu",
    role: "KAM banca",
    company: "Institución Financiera",
    text: "Excelente persona y colaboradora, súper profesional y siempre sumando al logro de los objetivos.",
    avatarLetter: "R",
    avatarBg: "bg-emerald-600",
    date: "Recomendado en LinkedIn"
  },
  {
    id: "test-3",
    name: "Xavier Zuñiga",
    role: "Innovation, Digitalization & Growth Logistics",
    company: "First, Middle & Last Mile",
    text: "Rebe is an amazing professional. In my experience working with her, projects ran quickly and the relevant OKRs were achieved. Her high moral standards create an environment of trust, something especially important in the financial sector. Additionally, she brings enthusiasm and dedication to every task.",
    avatarLetter: "X",
    avatarBg: "bg-blue-600",
    date: "Recomendado en LinkedIn"
  },
  {
    id: "test-4",
    name: "Yannick Gaudin",
    role: "Project Manager",
    company: "CEPAL – Naciones Unidas",
    text: "Rebeca Pareyón trabajó en la CEPAL–Naciones Unidas en el marco del proyecto 'Nuevas narrativas para una transformación rural en América Latina y el Caribe'. Demostró entusiasmo y profesionalismo, realizando un trabajo de calidad y una gran capacidad de aprendizaje. Su experiencia en la oficina de las Naciones Unidas estuvo marcada por la publicación de un documento de trabajo como coautora.",
    avatarLetter: "Y",
    avatarBg: "bg-indigo-600",
    date: "Proyecto CEPAL"
  },
  {
    id: "test-5",
    name: "Juan Carlos Colín Irazábal",
    role: "Business Owner y Founder",
    company: "El Coach Godín",
    text: "Tuve el gusto de trabajar con Rebe durante año y medio en su rol de Product Owner en Círculo de Crédito, enfocada en el desarrollo de productos para el consumidor final. Desde el primer día destacó por su enfoque analítico, su capacidad de planificación y su compromiso con la calidad.\n\nRebe es una profesional que deja huella, no solo porque su trabajo cumple con los más altos estándares, sino por su compromiso, actitud positiva y mentalidad de '¿cómo sí?', que la impulsan a encontrar soluciones donde otros ven obstáculos.",
    avatarLetter: "J",
    avatarBg: "bg-pink-600",
    date: "Círculo de Crédito"
  },
  {
    id: "test-6",
    name: "Cecilia Estrada Fragoso",
    role: "Product Owner Fraud Platforms",
    company: "Maze Slow Fashion",
    text: "Muy buen trabajo en equipo. Confiable y responsable, comprometida con los objetivos.",
    avatarLetter: "C",
    avatarBg: "bg-amber-600",
    date: "Recomendado en LinkedIn"
  },
  {
    id: "test-7",
    name: "Rodrigo Orozco",
    role: "Subdirector de Analítica Avanzada",
    company: "Fintech",
    text: "Una colaboradora comprometida con el objetivo final. Siempre buscando formas innovadoras para entregar valor al negocio.",
    avatarLetter: "R",
    avatarBg: "bg-teal-600",
    date: "Recomendado en LinkedIn"
  }
];
