// Dados de exemplo sobre inovações tecnológicas
const dados = [
    {
        titulo: "ChatGPT",
        descricao: "Modelo de linguagem desenvolvido pela OpenAI que usa IA para entender e gerar texto humano.",
        curiosidade: "Pode escrever textos criativos e ajudar na programação.",
        categoria: "ia",
        link: "https://www.openai.com/blog/chatgpt"
    },
    {
        titulo: "HoloLens 2",
        descricao: "Óculos de realidade aumentada da Microsoft para experiências imersivas com hologramas.",
        curiosidade: "Usado em treinamento médico e design industrial.",
        categoria: "ar",
        link: "https://www.microsoft.com/pt-br/hololens"
    },
    {
        titulo: "Tesla Model S Plaid",
        descricao: "Carro elétrico da Tesla com aceleração impressionante e tecnologia avançada.",
        curiosidade: "Um dos carros elétricos mais rápidos do mundo.",
        categoria: "ev",
        link: "https://www.tesla.com/model-s"
    },
    {
        titulo: "Google Glass",
        descricao: "Óculos de realidade aumentada que exibem informações digitais sobre o mundo real.",
        curiosidade: "Pioneiro em popularizar dispositivos de AR.",
        categoria: "ar",
        link: "https://www.google.com/glass"
    },
    {
        titulo: "Quantum Supremacy",
        descricao: "Marco na computação quântica com o processador Sycamore do Google.",
        curiosidade: "Computador quântico realiza tarefas que supercomputadores clássicos não conseguem.",
        categoria: "quantum",
        link: "https://www.nature.com/articles/s41586-019-1666-5"
    },
    {
        titulo: "Drones de Entrega",
        descricao: "Drones usados para entregar pacotes e produtos rapidamente.",
        curiosidade: "Melhoram a eficiência dos serviços de logística.",
        categoria: "drone",
        link: "https://www.amazon.com/drones"
    },
    {
        titulo: "Blockchain",
        descricao: "Tecnologia de registro distribuído que sustenta criptomoedas e garante segurança.",
        curiosidade: "Tecnologia por trás do Bitcoin.",
        categoria: "blockchain",
        link: "https://www.ibm.com/topics/what-is-blockchain"
    },
    {
        titulo: "Robótica Avançada",
        descricao: "Avanços em robótica com robôs que possuem habilidades aprimoradas de movimento.",
        curiosidade: "Robôs modernos podem interagir socialmente com pessoas.",
        categoria: "robotics",
        link: "https://www.robotics.org"
    },
    {
        titulo: "5G",
        descricao: "Quinta geração de redes móveis com velocidades muito maiores e menor latência.",
        curiosidade: "Crucial para tecnologias futuras como veículos autônomos.",
        categoria: "telecom",
        link: "https://www.qualcomm.com/5g"
    },
    {
        titulo: "Realidade Virtual",
        descricao: "Tecnologia que cria ambientes simulados diferentes do mundo real.",
        curiosidade: "Usada em jogos, treinamento e terapia.",
        categoria: "vr",
        link: "https://www.oculus.com/quest"
    },
    // Adicione mais inovações aqui
    {
        titulo: "CRISPR",
        descricao: "Tecnologia de edição genética que permite modificar DNA com precisão.",
        curiosidade: "Usada para pesquisas em terapia genética e desenvolvimento de novos tratamentos.",
        categoria: "biotech",
        link: "https://www.yourgenome.org/facts/what-is-crispr"
    },
    {
        titulo: "Computação em Nuvem",
        descricao: "Tecnologia que permite o armazenamento e processamento de dados na nuvem.",
        curiosidade: "Facilita o acesso remoto a recursos computacionais.",
        categoria: "cloud",
        link: "https://aws.amazon.com/cloud-computing/"
    },
    {
        titulo: "Impressão 3D",
        descricao: "Tecnologia que cria objetos tridimensionais a partir de um modelo digital.",
        curiosidade: "Usada em prototipagem rápida e produção personalizada.",
        categoria: "3dprinting",
        link: "https://www.3dprinting.com/"
    },
    {
        titulo: "Internet das Coisas (IoT)",
        descricao: "Rede de dispositivos conectados que coletam e trocam dados.",
        curiosidade: "Transforma objetos do dia a dia em dispositivos inteligentes.",
        categoria: "iot",
        link: "https://www.iotforall.com/what-is-internet-of-things/"
    },
    {
        titulo: "Assistentes Virtuais",
        descricao: "Software que usa IA para interagir com usuários e executar tarefas.",
        curiosidade: "Inclui assistentes como Alexa e Siri.",
        categoria: "ia",
        link: "https://www.techradar.com/best/best-voice-assistants"
    },
    {
        titulo: "Realidade Aumentada Móvel",
        descricao: "Tecnologia de AR integrada em dispositivos móveis como smartphones e tablets.",
        curiosidade: "Permite experiências imersivas através de aplicativos móveis.",
        categoria: "ar",
        link: "https://www.qualcomm.com/reality-augmented-reality"
    },
    {
        titulo: "Sensores de Saúde",
        descricao: "Dispositivos que monitoram sinais vitais e condições de saúde em tempo real.",
        curiosidade: "Incluem wearables que acompanham atividades físicas e saúde geral.",
        categoria: "healthtech",
        link: "https://www.medicalnewstoday.com/health-sensors"
    },
    {
        titulo: "Energia Solar Avançada",
        descricao: "Tecnologias emergentes para melhorar a eficiência e armazenamento de energia solar.",
        curiosidade: "Incluem células solares de nova geração e baterias de armazenamento.",
        categoria: "energy",
        link: "https://www.solarpowerworldonline.com/"
    },
    {
        titulo: "Tecnologia de Edge Computing",
        descricao: "Processamento de dados próximo da fonte de dados para reduzir latência e melhorar a eficiência.",
        curiosidade: "Crucial para aplicações que exigem resposta em tempo real.",
        categoria: "cloud",
        link: "https://www.ibm.com/cloud/edge-computing"
    },
    {
        titulo: "Baterias de Estado Sólido",
        descricao: "Tipo de bateria que utiliza um eletrólito sólido para maior segurança e eficiência.",
        curiosidade: "Prometem melhorar a performance e segurança das baterias de lítio.",
        categoria: "energy",
        link: "https://www.bbc.com/news/technology-51547771"
    },
    {
        titulo: "Tecnologia de Reconhecimento Facial",
        descricao: "Sistema de IA que identifica ou verifica uma pessoa com base em características faciais.",
        curiosidade: "Usado em segurança, desbloqueio de dispositivos e personalização de serviços.",
        categoria: "ia",
        link: "https://www.cnbc.com/what-is-facial-recognition-technology/"
    },
    {
        titulo: "Redes Neurais Profundas",
        descricao: "Arquitetura de IA que simula a maneira como o cérebro humano processa informações.",
        curiosidade: "Usada em reconhecimento de imagem, processamento de linguagem e mais.",
        categoria: "ia",
        link: "https://towardsdatascience.com/deep-learning-introduction-to-deep-neural-networks-a9536d12a5b8"
    },
    {
        titulo: "Veículos Autônomos",
        descricao: "Carros e outros veículos que usam IA e sensores para operar sem intervenção humana.",
        curiosidade: "Podem transformar a forma como viajamos e transportamos mercadorias.",
        categoria: "auto",
        link: "https://www.nhtsa.gov/equipment/automated-vehicles"
    },
    {
        titulo: "Tecnologia de Impressão 4D",
        descricao: "Tecnologia que adiciona a dimensão do tempo à impressão 3D, permitindo que objetos mudem com o tempo.",
        curiosidade: "Usada em áreas como medicina e engenharia.",
        categoria: "3dprinting",
        link: "https://www.technologyreview.com/2020/01/02/what-is-4d-printing/"
    },
    {
        titulo: "Bioimpressão",
        descricao: "Processo de impressão 3D de tecidos e órgãos vivos utilizando células biológicas.",
        curiosidade: "Tem o potencial de revolucionar a medicina regenerativa.",
        categoria: "biotech",
        link: "https://www.smithsonianmag.com/innovation/how-bio-printing-works-180973793/"
    },
    {
        titulo: "Inteligência Artificial Explicativa",
        descricao: "IA que fornece explicações compreensíveis para suas decisões e ações.",
        curiosidade: "Melhora a transparência e confiança em sistemas de IA.",
        categoria: "ia",
        link: "https://www.scientificamerican.com/article/what-is-explainable-ai/"
    },
    {
        titulo: "Tecnologia de Supercondutores",
        descricao: "Materiais que conduzem eletricidade sem resistência quando resfriados a temperaturas muito baixas.",
        curiosidade: "Prometem avanços em energia e computação.",
        categoria: "quantum",
        link: "https://www.livescience.com/superconductors.html"
    },
    {
        titulo: "Nanotecnologia",
        descricao: "Manipulação de matéria em escala nanométrica para criar novos materiais e dispositivos.",
        curiosidade: "Aplicações em medicina, eletrônica e energia.",
        categoria: "nanotech",
        link: "https://www.nano.gov/nanotech-101"
    },
    {
        titulo: "Tecnologia de Realidade Mista",
        descricao: "Combina AR e VR para criar experiências que interagem com o mundo real e virtual.",
        curiosidade: "Usada em treinamento, design e entretenimento.",
        categoria: "ar",
        link: "https://www.microsoft.com/pt-br/hololens"
    },
    {
        titulo: "Ressonância Magnética de Alta Resolução",
        descricao: "Avanços em ressonância magnética que permitem imagens mais detalhadas do corpo humano.",
        curiosidade: "Melhora diagnósticos médicos e pesquisas.",
        categoria: "healthtech",
        link: "https://www.radiologyinfo.org/en/info.cfm?pg=mr"
    },
    {
        titulo: "Agricultura de Precisão",
        descricao: "Uso de tecnologias avançadas para otimizar a produção agrícola e reduzir desperdícios.",
        curiosidade: "Inclui drones e sensores para monitorar as condições das culturas.",
        categoria: "agritech",
        link: "https://www.agriculture.com/technology"
    },
    {
        titulo: "Tecnologia de Armazenamento de Energia",
        descricao: "Inovações em baterias e sistemas de armazenamento para gerenciar energia de forma mais eficiente.",
        curiosidade: "Inclui baterias de íon de lítio e sistemas de armazenamento em grande escala.",
        categoria: "energy",
        link: "https://www.energy.gov/eere/energy-storage"
    },
    {
        titulo: "Interfaces Cérebro-Computador",
        descricao: "Tecnologia que permite a comunicação direta entre o cérebro e dispositivos externos.",
        curiosidade: "Usada em pesquisas sobre paralisia e controle de dispositivos com o pensamento.",
        categoria: "neurotech",
        link: "https://www.scientificamerican.com/article/what-is-a-brain-computer-interface/"
    },
    {
        titulo: "Energias Renováveis Avançadas",
        descricao: "Tecnologias emergentes em energias renováveis como solar e eólica.",
        curiosidade: "Incluem turbinas eólicas flutuantes e painéis solares de alta eficiência.",
        categoria: "energy",
        link: "https://www.irena.org/renewable-energy"
    },
    {
        titulo: "Tecnologia de Realidade Aumentada para Educação",
        descricao: "Uso de AR para criar experiências educacionais interativas e envolventes.",
        curiosidade: "Permite visualizar e interagir com conceitos complexos de maneira intuitiva.",
        categoria: "ar",
        link: "https://edtechmagazine.com/higher/article/2020/04/augmented-reality-classroom-a-new-dimension-learning"
    },
    {
        titulo: "Tecnologia de Análise de Dados em Tempo Real",
        descricao: "Ferramentas que processam e analisam dados instantaneamente para tomada de decisões rápida.",
        curiosidade: "Usado em finanças, saúde e marketing.",
        categoria: "data",
        link: "https://www.forbes.com/sites/forbestechcouncil/2020/12/07/the-future-of-real-time-data-analytics/"
    },
    {
        titulo: "Desenvolvimento de Vacinas com Tecnologia de mRNA",
        descricao: "Uso de mRNA para desenvolver vacinas rapidamente e de forma eficaz.",
        curiosidade: "Foi crucial na resposta à pandemia de COVID-19.",
        categoria: "healthtech",
        link: "https://www.cdc.gov/vaccines/covid-19/mrna.html"
    },
    {
        titulo: "Tecnologia de Rede Neural Generativa",
        descricao: "IA que cria novos dados e conteúdos imitando padrões de dados existentes.",
        curiosidade: "Inclui geradores de imagens e textos realistas.",
        categoria: "ia",
        link: "https://www.ibm.com/blog/what-are-generative-adversarial-networks/"
    },
    {
        titulo: "Biotecnologia para Agricultura",
        descricao: "Uso de técnicas biológicas para melhorar a produção agrícola e resistência a doenças.",
        curiosidade: "Inclui organismos geneticamente modificados (OGMs).",
        categoria: "agritech",
        link: "https://www.sciencedirect.com/topics/agricultural-and-biological-sciences/agriculture-biotechnology"
    },
    {
        titulo: "Inteligência Artificial para Diagnóstico Médico",
        descricao: "IA que auxilia no diagnóstico e tratamento de doenças com base em grandes volumes de dados médicos.",
        curiosidade: "Melhora a precisão e a rapidez dos diagnósticos.",
        categoria: "healthtech",
        link: "https://www.healthit.gov/faq/what-artificial-intelligence-ai-healthcare"
    },
    {
        titulo: "Tecnologia de Sustentabilidade em Construção",
        descricao: "Inovações que tornam a construção mais ecológica e eficiente em termos de energia.",
        curiosidade: "Inclui materiais sustentáveis e técnicas de construção verde.",
        categoria: "sustainability",
        link: "https://www.sustainablebuilding.info/"
    },
    {
        titulo: "Realidade Aumentada em Comércio Eletrônico",
        descricao: "Uso de AR para visualizar produtos em 3D antes da compra online.",
        curiosidade: "Ajuda os consumidores a tomar decisões mais informadas.",
        categoria: "ar",
        link: "https://www.forbes.com/sites/forbescommunicationscouncil/2020/09/15/how-augmented-reality-is-transforming-ecommerce/"
    },
    {
        titulo: "Plataformas de Colaboração Remota",
        descricao: "Ferramentas que facilitam a colaboração em equipe à distância.",
        curiosidade: "Incluem videoconferência, compartilhamento de arquivos e ferramentas de produtividade.",
        categoria: "software",
        link: "https://www.cio.com/article/353056/how-collaboration-software-is-evolving.html"
    },
    {
        titulo: "Tecnologia de Armazenamento de Dados em DNA",
        descricao: "Uso de DNA para armazenar grandes quantidades de dados de forma densa e durável.",
        curiosidade: "Possui a capacidade de armazenar informações por bilhões de anos.",
        categoria: "biotech",
        link: "https://www.scientificamerican.com/article/data-storage-dna/"
    },
    {
        titulo: "Tecnologia de Resfriamento por Evaporação",
        descricao: "Método eficiente para resfriar dispositivos eletrônicos e edifícios usando evaporação.",
        curiosidade: "Mais sustentável comparado aos sistemas de resfriamento tradicionais.",
        categoria: "energy",
        link: "https://www.engineering.com/story/evaporative-cooling-technology"
    },
    {
        titulo: "Tecnologia de Algoritmos de Recomendação",
        descricao: "Algoritmos que personalizam sugestões de produtos e conteúdos com base no comportamento do usuário.",
        curiosidade: "Usado em plataformas como Netflix e Amazon.",
        categoria: "ia",
        link: "https://www.investopedia.com/terms/r/recommendation-engine.asp"
    },
    {
        titulo: "Automação de Processos Robóticos",
        descricao: "Uso de robôs de software para automatizar tarefas repetitivas e baseadas em regras.",
        curiosidade: "Melhora a eficiência e reduz erros em processos empresariais.",
        categoria: "robotics",
        link: "https://www.uipath.com/product/robotic-process-automation"
    },
    {
        titulo: "Plataformas de Telemedicina",
        descricao: "Tecnologias que permitem consultas médicas à distância por meio de videoconferências e aplicativos.",
        curiosidade: "Facilita o acesso a cuidados médicos, especialmente em áreas remotas.",
        categoria: "healthtech",
        link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7324475/"
    },
    {
        titulo: "Sensores Inteligentes em Cidades",
        descricao: "Sensores que monitoram e otimizam infraestrutura urbana, como tráfego e qualidade do ar.",
        curiosidade: "Melhora a gestão das cidades e a qualidade de vida.",
        categoria: "smartcities",
        link: "https://www.smartcitiesworld.net/news/news/smart-sensors-and-the-future-of-cities-5928"
    },
    {
        titulo: "Computação Neuromórfica",
        descricao: "Computação inspirada no funcionamento do cérebro humano para criar sistemas mais eficientes.",
        curiosidade: "Promete aumentar a eficiência energética dos sistemas de IA.",
        categoria: "ia",
        link: "https://www.nature.com/articles/s41598-020-66209-0"
    },
    {
        titulo: "Robôs de Assistência Pessoal",
        descricao: "Robôs projetados para ajudar em tarefas diárias e oferecer companhia a pessoas.",
        curiosidade: "Usados em casas e instituições de cuidado para assistência e suporte.",
        categoria: "robotics",
        link: "https://www.sciencedaily.com/releases/2020/10/201021113717.htm"
    },
    {
        titulo: "Tecnologia de Identificação por Rádio Frequência (RFID)",
        descricao: "Tecnologia que usa ondas de rádio para identificar e rastrear objetos e pessoas.",
        curiosidade: "Aplicada em logística, segurança e pagamentos.",
        categoria: "tech",
        link: "https://www.rfidjournal.com/what-is-rfid"
    },
    {
        titulo: "Desenvolvimento de Computadores Quânticos",
        descricao: "Avanços na construção de computadores que utilizam princípios da mecânica quântica.",
        curiosidade: "Prometem resolver problemas complexos mais rapidamente que computadores clássicos.",
        categoria: "quantum",
        link: "https://www.ibm.com/topics/quantum-computing"
    },
    {
        titulo: "Robótica em Agricultura",
        descricao: "Uso de robôs para realizar tarefas agrícolas, como plantio e colheita.",
        curiosidade: "Aumenta a eficiência e reduz a necessidade de trabalho manual.",
        categoria: "agritech",
        link: "https://www.agriculture.com/machinery/robots-in-agriculture"
    },
    {
        titulo: "Tecnologia de Desenho Assistido por Computador (CAD)",
        descricao: "Software que auxilia no design e modelagem de produtos e estruturas.",
        curiosidade: "Usado em engenharia, arquitetura e design industrial.",
        categoria: "tech",
        link: "https://www.autodesk.com/products/cad-software"
    },
    {
        titulo: "Impressão de Alimentos",
        descricao: "Tecnologia que usa impressoras 3D para criar alimentos personalizados.",
        curiosidade: "Permite a criação de alimentos com formas e texturas únicas.",
        categoria: "foodtech",
        link: "https://www.3dfoodprinter.com/"
    },
    {
        titulo: "Tecnologia de Recuperação de Calor Residual",
        descricao: "Métodos para capturar e reutilizar o calor que é desperdiçado em processos industriais.",
        curiosidade: "Aumenta a eficiência energética e reduz custos.",
        categoria: "energy",
        link: "https://www.researchgate.net/publication/325453174_Waste_Heat_Recovery"
    },
    {
        titulo: "Tecnologia de Desinfecção com Luz Ultravioleta",
        descricao: "Uso de luz UV para desinfetar superfícies e ambientes.",
        curiosidade: "Usado em hospitais e sistemas de purificação de água.",
        categoria: "healthtech",
        link: "https://www.cdc.gov/niosh/topics/uvradiation/"
    },
    {
        titulo: "Desenvolvimento de Tecnologias de Hidrogênio Verde",
        descricao: "Produção de hidrogênio a partir de fontes renováveis para uma energia limpa.",
        curiosidade: "Pode substituir combustíveis fósseis em diversas aplicações.",
        categoria: "energy",
        link: "https://www.energy.gov/eere/fuelcells/hydrogen-production"
    },
    {
        titulo: "Tecnologia de Processamento de Linguagem Natural (NLP)",
        descricao: "IA que permite que computadores compreendam e interajam com a linguagem humana.",
        curiosidade: "Usada em assistentes virtuais, tradução automática e análise de sentimentos.",
        categoria: "ia",
        link: "https://towardsdatascience.com/what-is-nlp-1f5f8c0899b5"
    },
    {
        titulo: "Tecnologia de Realidade Aumentada para Treinamento",
        descricao: "Uso de AR para criar ambientes de treinamento imersivos e realistas.",
        curiosidade: "Permite simular cenários complexos e perigosos de forma segura.",
        categoria: "ar",
        link: "https://www.trainingzone.co.uk/learning/training/augmented-reality-and-its-role-in-training"
    },
    {
        titulo: "Tecnologia de Detecção de Fraudes com IA",
        descricao: "IA que analisa transações e atividades para identificar possíveis fraudes.",
        curiosidade: "Usada em sistemas bancários e de pagamento para segurança aprimorada.",
        categoria: "ia",
        link: "https://www.finextra.com/blogs/blogs.asp?blogid=17454"
    },
    {
        titulo: "Impressão de Tecidos Biomédicos",
        descricao: "Uso de impressão 3D para criar tecidos e órgãos para pesquisa e medicina regenerativa.",
        curiosidade: "Tem o potencial de substituir enxertos e transplantes.",
        categoria: "biotech",
        link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7353211/"
    },
    {
        titulo: "Tecnologia de Segurança Cibernética Avançada",
        descricao: "Ferramentas e técnicas para proteger dados e sistemas contra ataques cibernéticos.",
        curiosidade: "Inclui criptografia avançada e sistemas de detecção de intrusões.",
        categoria: "cybersecurity",
        link: "https://www.sans.org/what-is-cyber-security/"
    },
    {
        titulo: "Desenvolvimento de Tecnologias de Captura de Carbono",
        descricao: "Métodos para capturar e armazenar dióxido de carbono da atmosfera.",
        curiosidade: "Ajuda a combater as mudanças climáticas.",
        categoria: "energy",
        link: "https://www.iea.org/topics/carbon-capture-utilisation-and-storage"
    },
    {
        titulo: "Tecnologia de Realidade Virtual para Reabilitação",
        descricao: "Uso de VR para ajudar na reabilitação de pacientes com lesões físicas ou neurológicas.",
        curiosidade: "Oferece exercícios personalizados e interativos.",
        categoria: "vr",
        link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6491924/"
    },
    {
        titulo: "Tecnologia de Drones para Monitoramento Ambiental",
        descricao: "Uso de drones para coletar dados e monitorar condições ambientais.",
        curiosidade: "Usado em pesquisa ambiental e gerenciamento de desastres.",
        categoria: "drone",
        link: "https://www.environmentalmonitoringnews.com/technology/drones-for-environmental-monitoring"
    },
    {
        titulo: "Plataformas de Inteligência Artificial para Negócios",
        descricao: "Soluções de IA que ajudam empresas a otimizar operações e melhorar a tomada de decisões.",
        curiosidade: "Incluem ferramentas de análise de dados e automação de processos.",
        categoria: "ia",
        link: "https://www.ibm.com/analytics/artificial-intelligence"
    },
    {
        titulo: "Tecnologia de Construção Modular",
        descricao: "Métodos de construção que utilizam módulos pré-fabricados para acelerar a construção.",
        curiosidade: "Reduz o tempo e os custos de construção.",
        categoria: "tech",
        link: "https://www.modular.org/HtmlPage.aspx?name=modular_building_overview"
    },
    {
        titulo: "Sistemas de Energia Solar Flutuante",
        descricao: "Instalação de painéis solares sobre corpos d'água para aproveitar espaço e reduzir evaporação.",
        curiosidade: "Pode gerar energia renovável sem ocupar espaço terrestre.",
        categoria: "energy",
        link: "https://www.reuters.com/business/energy/solar-power-flotation-boom-promises-reduce-emissions-2021-12-17/"
    },
    {
        titulo: "Tecnologia de Transplante de Órgãos 3D",
        descricao: "Uso de impressão 3D para criar órgãos e tecidos para transplante.",
        curiosidade: "Promete revolucionar a medicina regenerativa.",
        categoria: "biotech",
        link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7071163/"
    },
    {
        titulo: "Tecnologia de Algoritmos de Machine Learning",
        descricao: "Algoritmos que permitem que sistemas aprendam e melhorem automaticamente com base em dados.",
        curiosidade: "Usado em uma ampla gama de aplicações, desde recomendação de produtos até reconhecimento de padrões.",
        categoria: "ia",
        link: "https://www.sas.com/en_us/insights/analytics/machine-learning.html"
    },
    {
        titulo: "Tecnologia de Geração de Energia por Ondas",
        descricao: "Métodos para gerar energia a partir do movimento das ondas oceânicas.",
        curiosidade: "Promete uma fonte de energia renovável e constante.",
        categoria: "energy",
        link: "https://www.waves4power.com/"
    },
    {
        titulo: "Tecnologia de Captura de Dados por Sensores de Imagem",
        descricao: "Sensores que capturam dados visuais e permitem análise avançada.",
        curiosidade: "Usado em diversas aplicações, desde segurança até veículos autônomos.",
        categoria: "tech",
        link: "https://www.teledyneflir.com/"
    },
    {
        titulo: "Desenvolvimento de Tecnologias de Biologia Sintética",
        descricao: "Manipulação de organismos vivos para criar novos produtos e soluções.",
        curiosidade: "Inclui a criação de organismos modificados para produzir medicamentos e biocombustíveis.",
        categoria: "biotech",
        link: "https://www.synlogic.com/biologics/"
    },
    {
        titulo: "Plataformas de Automação de Marketing",
        descricao: "Ferramentas que automatizam e otimizam campanhas de marketing.",
        curiosidade: "Incluem e-mail marketing, segmentação de público e análise de desempenho.",
        categoria: "software",
        link: "https://www.hubspot.com/products/marketing"
    },
    {
        titulo: "Tecnologia de Redes Neurais para Diagnóstico de Imagens Médicas",
        descricao: "IA que usa redes neurais para analisar imagens médicas e auxiliar no diagnóstico.",
        curiosidade: "Melhora a precisão e a velocidade no diagnóstico de doenças.",
        categoria: "healthtech",
        link: "https://www.nature.com/articles/s41598-019-54885-w"
    },
    {
        titulo: "Tecnologia de Comunicação Quântica",
        descricao: "Uso de princípios da mecânica quântica para criar sistemas de comunicação ultra-segura.",
        curiosidade: "Promete revolucionar a segurança das comunicações digitais.",
        categoria: "quantum",
        link: "https://www.scientificamerican.com/article/quantum-communication/"
    },
    {
        titulo: "Tecnologia de Controle de Poluição do Ar",
        descricao: "Métodos para reduzir e controlar a poluição atmosférica.",
        curiosidade: "Inclui tecnologias de captura de poluentes e sistemas de purificação do ar.",
        categoria: "sustainability",
        link: "https://www.epa.gov/air-quality-management"
    },
    {
        titulo: "Tecnologia de Drones para Entrega de Pacotes",
        descricao: "Uso de drones para entregar pacotes de forma rápida e eficiente.",
        curiosidade: "Promete revolucionar a logística e o transporte de mercadorias.",
        categoria: "drone",
        link: "https://www.businessinsider.com/drone-delivery-companies-2021-7"
    }
];