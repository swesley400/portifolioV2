import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
          <div className="relative w-48 h-48 lg:w-64 lg:h-64">
            <img
              src="https://avatars.githubusercontent.com/u/79053520?s=400&u=37a8e40507f01482c263159fa1cef69c9301d5e4&v=4"
              alt="Profile"
              className="rounded-full w-full h-full object-cover shadow-2xl ring-4 ring-purple-500"
            />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
              <a
                href="https://github.com/swesley400"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full backdrop-blur-lg hover:bg-white/20 transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/wessantos98/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full backdrop-blur-lg hover:bg-white/20 transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:wesley@devwes.com.br"
                className="bg-white/10 p-2 rounded-full backdrop-blur-lg hover:bg-white/20 transition-all"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Wesley Santos</h1>
            <p className="text-xl text-gray-300 mb-6">Full Stack Developer</p>
            <p className="text-gray-400 max-w-2xl">
              Bem-vindo ao meu universo tecnológico! Sou Wesley, um apaixonado desenvolvedor com expertise em diversas tecnologias, desde a gestão eficiente de bancos de dados com SQL até a criação de interfaces dinâmicas com React.js. Com especialização em AWS, TypeScript, Node.js, e mais, trago uma abordagem inovadora e robusta ao desenvolvimento, construindo soluções escaláveis e impactantes. Juntos, exploraremos novas fronteiras da tecnologia e criaremos algo extraordinário!
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/5 rounded-lg p-6 backdrop-blur-lg">
            <h2 className="text-xl font-semibold mb-4">Experiencia</h2>
            <p className="text-gray-400">3+ Anos de Experiencia</p>
          </div>
          <div className="bg-white/5 rounded-lg p-6 backdrop-blur-lg">
            <h2 className="text-xl font-semibold mb-4">Projetos</h2>
            <p className="text-gray-400">15+ Projetos entregues</p>
          </div>
          <div className="bg-white/5 rounded-lg p-6 backdrop-blur-lg">
            <h2 className="text-xl font-semibold mb-4">Tecnologias</h2>
            <p className="text-gray-400">React, Node.js, TypeScript, AWS, Nest Js, React Native, SQL, NOSQL, MCV, SOLID</p>
          </div>
        </div>
      </div>
    </div>
  );
};