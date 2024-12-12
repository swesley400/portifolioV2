import { RiReactjsFill } from 'react-icons/ri';
import { Playlist } from '../types/playlist';
import { 
  FaAws,
  FaCode,
  FaDocker,
  FaJava,
  FaNetworkWired,
  FaRegUser,
  FaSchool, 
} from 'react-icons/fa';
import { TbBrandMongodb, TbBrandNextjs, TbBrandNodejs, TbBrandTypescript } from 'react-icons/tb';
import { PiFileSqlThin } from 'react-icons/pi';
import { SiNestjs } from 'react-icons/si';
import { IoLogoElectron } from 'react-icons/io5';
import { LiaLanguageSolid } from 'react-icons/lia';
import { MdInterests } from 'react-icons/md';
import { CiCloud } from 'react-icons/ci';

export const playlists: Playlist[] = [
  {
    id: 'skills',
    name: 'Habilidades Técnicas',
    icon: <FaCode />,
    items: [
      {
        id: 'skill-1',
        name: 'React.js',
        description: 'Construção de aplicações web modernas com o ecossistema React',
        level: 90,
        icon: <RiReactjsFill />
      },
      {
        id: 'skill-2',
        name: 'Node.js',
        description: 'Desenvolvimento de JavaScript no lado do servidor',
        level: 85,
        icon: <TbBrandNodejs />
      },
      {
        id: 'skill-3',
        name: 'TypeScript',
        description: 'Desenvolvimento em JavaScript com tipagem segura',
        level: 88,
        icon: <TbBrandTypescript />
      },
      {
        id: 'skill-5',
        name: 'AWS',
        description: 'Computação em nuvem e gerenciamento de infraestrutura',
        level: 85,
        icon: <FaAws />
      },
      {
        id: 'skill-6',
        name: 'SQL',
        description: 'Design e otimização de bancos de dados relacionais',
        level: 90,
        icon: <PiFileSqlThin />
      },
      {
        id: 'skill-7',
        name: 'NoSQL',
        description: 'Trabalho com bancos de dados não-relacionais como MongoDB',
        level: 80,
        icon: <TbBrandMongodb />
      },
      {
        id: 'skill-8',
        name: 'NestJS',
        description: 'Desenvolvimento de aplicações server-side escaláveis',
        level: 87,
        icon: <SiNestjs />
      },
      {
        id: 'skill-9',
        name: 'Next.js',
        description: 'Desenvolvimento full-stack com React e renderização no servidor',
        level: 85,
        icon: <TbBrandNextjs />
      },
      {
        id: 'skill-10',
        name: 'Electron',
        description: 'Construção de aplicativos desktop multiplataforma',
        level: 78,
        icon: <IoLogoElectron />
      },
      {
        id: 'skill-11',
        name: 'Java',
        description: 'Desenvolvimento de aplicações robustas e de alto desempenho',
        level: 75,
        icon: 'coffee'
      },
      {
        id: 'skill-12',
        name: 'JavaScript',
        description: 'Habilidades essenciais para desenvolvimento web e backend',
        level: 92,
        icon: <FaJava />
      },
      {
        id: 'skill-13',
        name: 'Docker',
        description: 'Containerização de aplicações para implantação consistente e escalável',
        level: 80,
        icon: <FaDocker />
      }
    ]
  },
  {
    id: 'about',
    name: 'Sobre Mim',
    icon: <FaRegUser />,
    items: [
      {
        id: 'about-1',
        name: 'Resumo Profissional',
        description: 'Desenvolvedor full-stack apaixonado com 3 anos de experiência em construção de aplicações web e desktop',
        icon: <FaRegUser />
      },
      {
        id: 'about-2',
        name: 'Interesses',
        description: 'IA/ML, Open Source, Web3 e Computação em Nuvem',
        icon: <MdInterests />
      },
      {
        id: 'about-3',
        name: 'Idiomas',
        description: 'Inglês (B2), Português (Nativo)',
        icon: <LiaLanguageSolid />
      }
    ]
  },
  {
    id: 'education',
    name: 'Educação',
    icon: <FaSchool />,
    items: [
      {
        id: 'edu-1',
        name: 'Ciência da Computação',
        description: 'Bacharelado em Ciência da Computação - Estácio, 2024-2028',
        icon: <FaSchool />
      },
      {
        id: 'edu-2',
        name: 'Orientação a Objetos com JavaScript (Projetos e TypeScript)',
        description: 'Curso de orientação a objetos - Udemy',
        icon: <FaCode />
      },
      {
        id: 'edu-3',
        name: 'Formação: Aprenda a programar em JavaScript com foco no back-end',
        description: 'Formação Node.js, 74 horas - Alura',
        icon: <CiCloud />
      },
      {
        id: 'edu-4',
        name: 'HTTP: entendendo a web por baixo dos panos',
        description: 'Carga horária estimada em 10 horas - Alura',
        icon: <FaNetworkWired />
      },
      {
        id: 'edu-5',
        name: 'Electron: crie aplicativos Desktop com as tecnologias da Web',
        description: 'Carga horária estimada em 15 horas - Alura',
        icon: <FaCode />
      }
    ]
  }
];
