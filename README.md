# Patas Solidárias - Front-End

![GitHub repo size](https://img.shields.io/github/repo-size/AndreLuisCelis/front-patasSolidaris)
![GitHub last commit](https://img.shields.io/github/last-commit/AndreLuisCelis/front-patasSolidaris)
![GitHub contributors](https://img.shields.io/github/contributors/AndreLuisCelis/front-patasSolidaris)

Este é o front-end do projeto **Patas Solidárias**, desenvolvido como parte do **Projeto Integrado IV** no curso de Computação. A aplicação tem como objetivo apoiar ONGs no processo de adoção de animais, fornecendo uma interface para cadastro e gerenciamento de adotantes e informações de pets disponíveis para adoção.

### 🌐 Acesse a aplicação aqui:
- **[Patas Solidárias - Front-End no Railway](https://front-patassolidaris-production.up.railway.app)**

## 📋 Índice
- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Execução com Docker](#execução-com-docker)
- [Licença](#licença)

---

## Sobre o Projeto

A aplicação **Patas Solidárias** oferece uma interface web intuitiva e responsiva para que usuários e administradores possam visualizar informações de animais para adoção e cadastrar adotantes. 

Este projeto foi desenvolvido como parte do Projeto Integrado IV, com foco em aplicar conhecimentos de desenvolvimento web em uma aplicação prática e socialmente relevante.

## Tecnologias Utilizadas

- **HTML5** - Estrutura e marcação das páginas.
- **CSS3** - Estilos e layout da aplicação.
- **JavaScript** - Funcionalidades e interatividade do front-end.
- **Nginx** - Utilizado no container Docker para servir a aplicação.

## Pré-requisitos

Antes de começar, certifique-se de ter os seguintes itens instalados:

- [Docker](https://www.docker.com/) (para rodar a aplicação com o Docker)

## Instalação

1. Clone este repositório em sua máquina local:

    ```bash
    git clone https://github.com/AndreLuisCelis/front-patasSolidaris.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd front-patasSolidaris
    ```

## Execução com Docker

Se preferir executar a aplicação em um container Docker, siga as instruções abaixo:

1. **Construa a imagem Docker:**

    ```bash
    docker build -t patas-solidarias-front .
    ```

2. **Execute o container:**

    ```bash
    docker run -p 8080:80 patas-solidarias-front
    ```

    A aplicação estará disponível em [http://localhost:8080](http://localhost:8080).

---

## Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

### 📞 Suporte

Se tiver alguma dúvida ou sugestão, sinta-se à vontade para abrir uma _issue_ ou enviar uma _pull request_ neste repositório.

