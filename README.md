# Trabalho-Protractor

Projeto da disciplina de S206-Qualidade-de-Software Inatel. Estudo do Framework Protractor.
<br>
Desenvolvido por: <br>
• <a href="https://github.com/Uttoni">Utonni Brandani</a> <br>
• <a href="https://github.com/Redfox0012">Gabriel Henrique da Silva</a> <br>
• <a href="">Arilson Xavier</a> <br>
• <a href="">João Carlos</a>

#

## Sumário
* [Requisitos do ambiente de desenvolvimento](#requisitos)
* [Instalação das dependencias](#dependencias)
* [Executando Testes](#executando-testes)
* [Relatorio de testes](#relatorio)
* [Dicas no VS Code](#vscode)
* [Dicas no Navegador Chrome:](#chrome)

#
## Requisitos do ambiente de desenvolvimento  <a name="requisitos"></a>

1. nodejs(node):  https://nodejs.org/en/
2. java >= 8

#
## Instalação das dependencias <a name="dependencias"></a>
1. Rode o comando abaixo dentro da raiz para instalar as dependencias do projeto: 
> npm install

> ./node_modules/.bin/protractor --version
<br>

Se tudo estiver ok aparecerá a versão do protractor.

> 7.0.0 

2. Execute o comando para atualizar o webdriver-manager:
> npm run update

• referencias https://www.protractortest.org/#/

#
## Executando Testes <a name="executando-testes"></a>
Entre no diretorio principal do projeto clonado e execute o comando para rodar o teste exemplo:
>./node_modules/.bin/protractor conf/conf.js

Teste do site globalsqa:

> ./node_modules/.bin/protractor conf/globalsqa_conf.js

#
## Relatorio de testes <a name="relatorio"></a>
Comando para gerar o relatorio de teste:

> ./node_modules/.bin/allure serve allure-results/

#
## Dicas no VS Code:<a name="vscode"></a>
1. Extensões:<br>
    • JavaScript and TypeScript Nightly (Microsoft)

#
## Dicas no Navegador Chrome:<a name="chrome"></a>
1. Extensões:<br>
    • POM Builder: para ajudar na seleção dos objetos no navegador.