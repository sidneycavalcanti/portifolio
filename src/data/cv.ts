// Todo o conteúdo do site vem daqui. Para atualizar o portfólio, edite só este arquivo.

export const profile = {
  name: "Sidney Cavalcanti",
  fullName: "Sidney Correia Cavalcanti",
  role: "Analista de Infraestrutura Pleno",
  city: "Recife, PE",
  email: "sidney.correia.cavalcanti@gmail.com",
  linkedin: "https://www.linkedin.com/in/sidney-cavalcanti",
  github: "https://github.com/sidneycavalcanti",
  // data de início da carreira; alimenta o contador de uptime
  since: "2014-12-01T08:00:00-03:00",
  pitch:
    "Mantenho servidores, redes, backup e Microsoft 365 de pé para empresas que não podem parar, e automatizo o que der para automatizar.",
  about: [
    "Trabalho com TI desde 2014, sempre em ambientes onde parada custa caro: um shopping com dezenas de lojas, um centro de fulfillment de operação nacional, unidades do Exército e, hoje, um grupo com hotéis, agência de turismo e outras empresas sob o mesmo guarda-chuva.",
    "Meu dia a dia é virtualização (VMware, Proxmox), backup com Veeam, redes, Active Directory e Microsoft 365. O que me diferencia é transformar rotina em automação e em dado: inventário com Ansible, chamados e ativos no GLPI, monitoramento no Zabbix e no Grafana.",
    "Sou pós-graduado em Governança de TI e uso isso para conversar com a gestão: priorizar investimento, documentar o ambiente e planejar backup e DR antes que façam falta.",
  ],
};

export type Job = {
  company: string;
  role: string;
  note?: string;
  start: string;
  end?: string;
  summary: string;
  bullets: string[];
  stack: string[];
};

export const jobs: Job[] = [
  {
    company: "Grupo Pontes",
    role: "Analista de Infraestrutura Pleno",
    start: "ago 2026",
    summary:
      "Infraestrutura e Microsoft 365 para as unidades do grupo: Pontestur, Neo Hotel, Atlante Plaza, Mar Hotel e Captar.",
    bullets: [
      "Alinho decisões de infraestrutura aos objetivos do negócio e apoio a gestão na priorização de investimentos em tecnologia.",
      "Administro o Microsoft 365 (Exchange, SharePoint, Teams) de várias empresas do grupo.",
      "Suporte N2 e N3 para incidentes e problemas de maior complexidade.",
      "Documento e administro o VMware via vCenter e cuido da política de backup com Veeam.",
      "Dashboards no Grafana e no GLPI para infraestrutura, inventário de ativos e satisfação de atendimento.",
      "Inventário automatizado de servidores Linux e Windows com Ansible, e playbooks para storage IBM via REST API.",
      "Apoio o time de Cyber Security e administro domínios no Active Directory.",
      "DNS no Cloudflare e registro de domínios no Registro.br.",
      "Projetos de infraestrutura para o Summer Ville e para os eventos do grupo.",
      "Coordeno reuniões de TI entre as empresas: migração de e-mail, backup/DR e hospedagem na AWS.",
    ],
    stack: ["VMware vCenter", "Veeam", "Microsoft 365", "Ansible", "Grafana", "GLPI", "Cloudflare", "AWS"],
  },
  {
    company: "Shopee",
    role: "Analista de Suporte de TI Pleno",
    note: "Help Desk N2 e infraestrutura",
    start: "out 2025",
    end: "ago 2026",
    summary:
      "Centro de Fulfillment e SOC com cerca de 1.000 m² de infraestrutura, apoiando operações logísticas em nível nacional.",
    bullets: [
      "Administrei Workspace ONE, Microsoft Entra ID, Active Directory e Microsoft 365, com foco em governança de identidades.",
      "Gestão de acessos e privilégios, onboarding e offboarding com segregação de funções.",
      "Atendimento via ITCenter, ClickUp e Jira dentro de SLA e indicadores de qualidade.",
      "Procedimentos documentados no Confluence para auditorias e transferência de conhecimento.",
      "Configurei clusters VMware vSphere, provisionei servidores Dell via iDRAC e administrei redes Cisco Meraki e UniFi.",
      "Suporte a notebooks, desktops, MacBooks, impressoras e dispositivos móveis corporativos.",
    ],
    stack: ["vSphere", "Entra ID", "Workspace ONE", "Cisco Meraki", "UniFi", "Dell iDRAC", "Jira", "Confluence"],
  },
  {
    company: "Grupo MTM",
    role: "Supervisor de TI",
    note: "Plaza Shopping Casa Forte",
    start: "jan 2024",
    end: "out 2025",
    summary:
      "Responsável por toda a TI do grupo: infraestrutura, equipe, contratos, benfeitorias e suporte.",
    bullets: [
      "Liderei a equipe técnica e acompanhei chamados e incidentes por SLA e KPIs de Service Desk.",
      "Administrei Microsoft 365, servidores locais, backup e antivírus Defender.",
      "Negociei contratos com fornecedores com foco em redução de custos.",
      "Estruturei a virtualização com Proxmox e migrei o backup para Veeam, com fita LTO, S3 e NAS como repositórios.",
      "Implantei o GLPI com inventário via agente e monitoramento Zabbix/Grafana com alertas por e-mail e WhatsApp.",
      "Reestruturei a rede e os racks, e desenvolvi um aplicativo mobile para auditoria de lojas.",
    ],
    stack: ["Proxmox", "Veeam", "Fita LTO", "GLPI", "Zabbix", "Grafana", "Microsoft 365"],
  },
  {
    company: "Exército Brasileiro",
    role: "Gerente de Redes",
    note: "3º Sargento",
    start: "abr 2019",
    end: "abr 2024",
    summary: "Redes e servidores da unidade, com equipe técnica sob minha liderança.",
    bullets: [
      "Liderei equipes na administração de redes e servidores, com foco em estabilidade e desempenho.",
      "Implementei políticas de segurança da informação e backups automatizados.",
      "Geri a infraestrutura com Proxmox, pfSense, Zabbix, Docker e MySQL.",
      "Executei o projeto de cabeamento estruturado da unidade.",
      "Desenvolvi o sistema interno de controle de escala de serviço.",
    ],
    stack: ["Proxmox", "pfSense", "Zabbix", "Docker", "MySQL"],
  },
  {
    company: "Plaza Shopping Casa Forte",
    role: "Analista de Suporte",
    note: "Condomínio do shopping",
    start: "dez 2014",
    end: "abr 2019",
    summary: "Onde comecei: suporte, rede e o CPD do shopping.",
    bullets: [
      "Atendi e gerenciei chamados técnicos dentro de SLA.",
      "Implantei a rede Wi-Fi corporativa com Ruckus.",
      "Conduzi a migração do CPD sem interromper a operação.",
      "Estruturei a documentação técnica e conduzi treinamentos internos.",
    ],
    stack: ["Ruckus", "Windows Server", "Active Directory"],
  },
];

// cada grupo ganha a cor de um patch cable (ver --cable-* em global.css)
export const skills = [
  {
    name: "Infraestrutura e virtualização",
    cable: "blue",
    items: ["VMware vSphere/vCenter", "Proxmox VE", "Hyper-V", "Active Directory", "GPO", "DNS/DHCP", "VLAN", "VPN", "SonicWall", "Mikrotik", "pfSense/OPNsense", "Ruckus"],
  },
  {
    name: "Cloud e Microsoft 365",
    cable: "yellow",
    items: ["Azure", "AWS", "Cloudflare", "Registro.br", "Microsoft Entra ID", "Exchange", "SharePoint", "Teams"],
  },
  {
    name: "Backup, monitoramento e segurança",
    cable: "orange",
    items: ["Veeam (LTO, S3, NAS)", "Proxmox Backup", "Arcserve", "Zabbix", "Grafana", "Bitdefender", "Kaspersky", "Greenbone (OpenVAS)", "TrueNAS"],
  },
  {
    name: "Automação e DevOps",
    cable: "green",
    items: ["Ansible", "n8n", "Docker", "Kubernetes", "PowerShell", "GitHub", "MySQL", "SQL Server", "MongoDB"],
  },
  {
    name: "Service desk e gestão",
    cable: "violet",
    items: ["GLPI", "ITIL", "ITCenter", "Trello", "ClickUp", "Salesforce", "Group Shop", "NG", "Senior", "Sienge"],
  },
  {
    name: "Dispositivos e plataformas",
    cable: "gray",
    items: ["Workspace ONE (MDM)", "Windows", "Linux", "macOS", "PDA"],
  },
];

export const highlights = [
  {
    title: "Backup que sobrevive a um desastre",
    text: "Migrei o backup do Grupo MTM para Veeam com três destinos (fita LTO, S3 e NAS), cobrindo cópia local, cópia fora do prédio e retenção longa.",
    tools: ["Veeam", "LTO", "S3", "NAS"],
  },
  {
    title: "Inventário que se atualiza sozinho",
    text: "Playbooks Ansible coletam o inventário de servidores Linux e Windows e falam com o storage IBM via REST API, sem planilha manual.",
    tools: ["Ansible", "REST API", "IBM Storage"],
  },
  {
    title: "Alerta no WhatsApp antes do usuário ligar",
    text: "GLPI com inventário via agente, Zabbix monitorando e Grafana mostrando, com alertas por e-mail e WhatsApp para a equipe.",
    tools: ["GLPI", "Zabbix", "Grafana"],
  },
  {
    title: "Mudança de CPD sem parar o shopping",
    text: "Migrei o CPD do Plaza Shopping Casa Forte e implantei o Wi-Fi corporativo Ruckus com a operação das lojas funcionando.",
    tools: ["Ruckus", "Cabeamento", "Planejamento"],
  },
];

export const education = [
  { course: "Pós-graduação em Governança de TI", school: "Gran", year: "2025" },
  { course: "Análise e Desenvolvimento de Sistemas", school: "Universidade Estácio de Sá", year: "2019" },
  { course: "Técnico em Redes de Computadores", school: "Unibratec", year: "2015" },
];

export const certs = [
  "AWS Certified Cloud Practitioner",
  "Oracle Cloud Infrastructure Foundations Associate",
  "Microsoft Azure Fundamentals (AZ-900)",
  "Microsoft 365 Fundamentals (MS-900)",
  "Microsoft Security, Compliance, and Identity Fundamentals (SC-900)",
  "Fortinet Certified Fundamentals in Cybersecurity",
  "ISO 20000 e ITIL",
  "Jornada DevOps com AWS (Impulso)",
];

export const languages = [
  { name: "Inglês", level: "Intermediário, leitura técnica e comunicação" },
  { name: "Espanhol", level: "Iniciante" },
];
