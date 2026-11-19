const projects = {
  eyebrow: "Trabalho desenvolvido",
  title: "Projetos selecionados",
  description:
    "Uma seleção de trabalhos reais que acompanhei desde o levantamento de necessidades até ao desenvolvimento, publicação e suporte.",

  featuredTitle: "Projetos em destaque",
  otherTitle: "Outros projetos",

  responsibilityLabel: "Responsabilidade",

  links: {
    website: "Visitar website",
    repository: "Ver projeto no GitHub",
    demo: {
      label: "Ver Demo",
      ariaLabel: "Abrir demonstração da Farmácia Santa Casa",
    },
    demoAccess: "Dados de acesso",
  },

  demoAccessModal: {
    title: "Acesso à demonstração",
    description:
      "Escolhe o perfil que pretendes utilizar para testar a aplicação.",
    usernameLabel: "Utilizador",
    passwordLabel: "Palavra-passe",
    accountNames: {
      santacasa: "Santa Casa",
      farmacia: "Farmácia",
    },
    copyLabel: "Copiar",
    copiedLabel: "Copiado",
    openDemoLabel: "Abrir demonstração",
    closeLabel: "Fechar",
    note: "Estas contas utilizam apenas dados de demonstração.",
  },

  technologiesAriaLabel: "Tecnologias utilizadas no projeto",

  items: {
    "farmacia-santa-casa": {
      type: "Aplicação web full stack",
      status: "Demonstração pública",
      description:
        "Plataforma operacional para gestão de utentes, receitas, pedidos, regularizações, alertas e utilizadores, com diferentes áreas e permissões.",
      responsibility:
        "Pesquisa, levantamento de necessidades, definição da solução, desenvolvimento frontend e backend, testes, publicação e suporte.",
      imageAlt:
        "Interface da aplicação Farmácia Santa Casa com listagem e gestão de utentes",
    },

    "ria-canal-hair-design": {
      type: "Website institucional",
      status: "Publicado",
      description:
        "Website responsivo para apresentação do salão, serviços, trabalhos, espaço, equipa, testemunhos, Instagram e contactos.",
      responsibility:
        "Pesquisa, contacto com o cliente, definição da solução, desenvolvimento, publicação e suporte.",
      imageAlt: "Página principal do website Ria Canal Hair Design",
    },
  },
};

export default projects;
