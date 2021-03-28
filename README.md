# :egg: Pokédex

Seja bem vindo (a) ao Pokédex :nerd_face:	

O Pokédex é um site onde você pode interagir através de filtros e navegar por 151 Pokémons. 
Com o Pokédex, esperamos que você possa ser divertir e ter a melhor experiência possível quando jogar Pokémon GO! :partying_face:

**[Acesse Pokédex](https://crismantovani.github.io/pokedex/src "Acesse o Pokédex")** 
![](/src/img/favicons/favicon-16x16.png)
___

## :page_facing_up: Índice

* [1. Objetivos](#1-objetivos)
* [2. Usuários](#2-usuários)
    * [2.2 Pesquisas](#22-pesquisas)
    * [2.3 Histórias de Usuários](#23-histórias)
* [3. Planejamento](#3-planejamento)
* [4. Desenvolvimento](#4-desenvolvimento)
* [5. Funcionalidades](#5-funcionalidades)
* [5.2 Linguagens](#52-linguagens)
* [5.3 Ferramentas](#53-ferramentas)
* [6. Testes](#6-testes)
* [7. Requisitos](#7-requisitos)
     * [7.2 Softwares](#72-softwares)
     * [7.3 Execução](#73-execução)
* [8. Desenvolvedoras](#8-desenvolvedoras)

***
## 1. Objetivos
Ao iniciarmos o projeto Pokédex, de pronto percebemos alguns pontos que seriam essenciais para entregar um bom MVP:

* Conhecer o usuário e entender suas necessidades;
* Foco na experiência do usuário;
* Aplicação interativa;
* Acessibilidade;
* Organização das tarefas via Trello
* **Responsividade:** Essencial pois o jogo é exclusivo para celulares e o usuário precisa conseguir obter informações ao mesmo tempo que está jogando.
---
## 2. Usuários

Colocamos os usuários e suas necessidades como foco principal do nosso projeto.
Buscamos atender todas as necessidades de forma clara, eficiente e objetiva. Para isso, realizamos uma pesquisa durante 4 dias, onde coletamos informações como:

* Perfil do usuário;
* Prioridades do usuário;
* Expectativas e desejos;
* Relacionamento com Pokémon Go;
* Principais dificuldades;

### 2.2 Pesquisas
Os resultados da pesquisa foram cruciais para desenvolvermos a melhor aplicação, focada em responsabilidade, acessibilidade, interatividade, disposição de dados, etc.
A pesquisa foi determinante para nos dar um norte sobre o perfil da maioria de nossos usuários:

**Média de idade**

![](/src/img/readme-img/pesquisa-idade.png)

Esse dado nos mostrou que a mais da metade de nossos usuários tem 45 anos ou mais, enquanto  ⅓ tem de 21 a 40 anos. Os demais grupos se fragmentaram em partes bem menores, o que faz com que eles não gerem demanda suficiente para viabilizar o desenvolvimento de um site adequado ao perfil informado.

**Plataforma em que mais joga**

![](/src/img/readme-img/pesquisa-plataforma.png)

Esse resultado mostra que mesmo o usuário podendo selecionar várias respostas, a plataforma mais utilizada é de Celular ou Tablet.
Isso nos mostrou que um site responsivo deveria ser uma de nossas prioridades neste projeto.

**Relacionamento com Pokémon Go**

![](/src/img/readme-img/pesquisa-relacionamento.png)

Podemos observar que a maioria de nossos usuários é fã de Pokémon desde o desenho e costuma jogar Pokémon Go com frequência. 
Os jogadores casuais e que têm algumas dúvidas sobre o funcionamento do jogo, representam quase 30% da nossa base. 
Também identificamos uma quantidade razoável (18.5%) de usuários em potencial, que demonstram interesse no jogo.

### 2.3 Histórias
Escolhemos 3 (três) histórias diferentes para atingir o máximo de usuários possível:

:writing_hand:	**História de Usuário #1**

_Flávia Machado_

![](/src/img/readme-img/persona1-flavia.png "Persona 1 Flávia")

Flávia é uma fã de carteirinha de Pokémon. Seu maior objetivo é descobrir as chances de _spawn_ de Pokémons Raros. Ela precisa de um site que mostre a raridade de cada Pokémon.

:writing_hand:	**História de Usuário #2**

_Eduardo Silva_

![](/src/img/readme-img/persona2-eduardo.png "Persona 2 Eduardo")

Eduardo tem bastante interesse no jogo mas não sabe nada sobre ele. Sua maior necessidade é obter informações rápidas sobre os Pokémons. Ele precisa de um site que mostre dados como tipo, força e spawn, de forma intuitva como em um card.

:writing_hand:	**História de Usuário #3**

_Marcelo Santos_

![](/src/img/readme-img/persona3-marcelo.png "Persona 3 Marcelo")

Marcelo é fã do desenho, mas nunca jogou Pokémon Go. Ele tem muita dificuldade em escolher o melhor tipo de Pokémon antes das batalhas.
Precisa de um site responsivo, para escolher o melhor momentos antes de entrar na guerra.
Acreditamos que isso pode ser resolvido com um site responsivo e que possibilite uma comparação rápida entre os tipos de Pokémons.

---
## 3. Planejamento

Fizemos todo o planejamento no Trello:
![](/src/img/readme-img/trello.PNG)

### 3.2 Paleta de cores

A paleta de cores foi criada pensando em acessibilidade para quem é daltônico.

![](/src/img/readme-img/paleta-cores.png)

 **Rascunho**

A interface foi rascunhada no papel:
 
 ![](/src/img/readme-img/prototipo_caderno.jpg)

  **Protótipo de Baixa Fidelidade para PC :computer:**

E no Figma, fizemos os protótipos de baixa fidelidade para as plataformas necessárias.
  
 ![](/src/img/readme-img/prototipo_baixaFidelidade.png)

 **Protótipo de Baixa Fidelidade para Celulares e Tablets :iphone:**
 ![](/src/img/readme-img/prototipo_baixaFidelidade.png)

 **MVP (Mínimo Produto Viável) :tada:**
 ![](/src/img/readme-img/prototipo_baixaFidelidade.png)

 ---
 
## 4. Desenvolvimento
Com as informações levantadas, partimos para o desenvolvimento da interface do site.

Versão 1:
![](/src/img/readme-img/pokedex-v1.png)

Após o desenvolvimento, partimos para as funcionalidades.

---

## 5. Funcionalidades
A aplicação foi desenvolvida pensando na acessibilidade e na praticidade, para que todos os usuários tenham uma boa experiência de uso.

* Visualizar todos os Pokémons na tela;
* Filtrar Pokémons por tipo;
* Filtrar Pokémons por raridade;
* Organizar os cards por ordem alfabética crescente ou decrescente;
* Botão "Limpar" para resetar a busca;
* Cards com: Nome do Pokémon, Foto, tipo e raridade;

### 5.2 Linguagens
O Pokedéx foi desenvolvido com as linguagens: HTML5, CSS3 e Vanilla JavaScript.

### 5.3 Ferramentas
As aplicações utilizadas são: Node.js, NPM, Visual Studio Code e GitHub.

---

## 6. Testes
Após o desenvolvimento do MVP, iniciamos os testes de usabilidade com usuários.
Os feedbacks que recebemos, nos fizeram mudar alguns pontos no design

* Remoção da DIV de comparação de cards;
* Alterações de tonalidade visando melhor experiência para daltônicos ;
* Reposicionamento dos filtros para melhor visualização;

Chegamos a versão atual:

**Desktop :computer:**
![](/src/img/readme-img/pokedex-latest.PNG)

**Celulares e Tablets :iphone:**

 ![](/src/img/readme-img/pokedex-tablet.jpeg)
 
 ![](/src/img/readme-img/pokedex-mobile1.jpeg)
 
 ![](/src/img/readme-img/pokedex-mobile2.jpeg)

---

## 7. Requisitos
Para instalar e executar o projeto localmente, você deve seguir os passos:

### 7.2 Softwares
* :anchor:	[GIT Desktop](https://desktop.github.com/ "GIT download") (somente se você usa Windows).
* :arrow_down: [Node.js com NPM incluso](https://nodejs.org/en/download/ "Node.js Download").
* :receipt:	[Visual Studio Code](https://code.visualstudio.com/download "VS Code Download")
* :fortune_cookie:	Caso você tenha Windows 10 ou superior, pode usar o [Windows Subsystem for Linux](https://docs.microsoft.com/pt-br/windows/wsl/install-win10 "WSL").

### 7.3 Execução
* :fork_and_knife:	Faça o [fork](#https://docs.github.com/pt "GitHub Documentação Oficial") do repositório. 
* :arrow_down: Clone o projeto na sua máquina com o comando ```git clone https://github.com/ThWember/SAP005-data-lovers.git```.
* :open_file_folder:	Acesse a pasta do projeto com o comando ```cd SAP005-data-lovers```.
* :woman_technologist: Instale o Node.js com o comando ```npm install``` e em seguida rode a aplicação com o comando ```npm start```.
* :gear:	Para executar os testes unitários utilize o comando ```npm test```.
* :chains:	Para acessar a interface no navegador, execute o comando ```npm start``` para iniciar o servidor web e acesse em ```http://localhost:5000```.

---

## 8. Desenvolvedoras
Pokédex é orgulhosamente desenvolvido por [Cris Mantovani](https://github.com/crismantovani "Cris Mantovani GitHub") e [Thais Wemberlaine](https://github.com/ThWember "Thais Wemberlaine GitHub"). Alunas da turma SAP-005 da [<Laboratória>](https://www.laboratoria.la/br "Laboratória Brasil") :yellow_heart:.

:mortar_board:	Este projeto foi o segundo desafio do bootcamp e nos ensinou sobre:

* Manipulação do DOM, objetos e arrays;
* Funções;
* Desenvolvimento de testes unitários;
* Responsividade;
* UX Design;
* Cálculo agregado;
* GitHub (repositórios, branchs, merge, pull request e deploy);
* Soluções dos mais diversos bugs;
* Planejamento;
* Trabalho em equipe;
* Empatia;
* Aprender a aprender;

Agradecemos por esse grande desafio e pelo apoio das mentoras, psicólogas e amigas de squad!

Don't stop code :rocket:	
