## Tecnologias utilizadas

### Node
Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web

### Express
Express.js é um framework para Node.js que fornece recursos mínimos para construção de servidores web. Foi lançado como software livre e de código aberto sob a Licença MIT. É um dos mais populares frameworks para servidores em Node.js.

### PostgreSQL
PostgreSQL é um sistema gerenciador de banco de dados relacional, desenvolvido como projeto de código aberto.

### Typescript
TypeScript é um superconjunto de JavaScript desenvolvido pela Microsoft que adiciona tipagem e alguns outros recursos a linguagem. Anders Hejlsberg, arquiteto da linguagem C# e criador das linguagens Delphi e Turbo Pascal, trabalhou no desenvolvimento do TypeScript.

### Docker
O docker é uma alternativa de virtualização em que o kernel da máquina hospedeira é compartilhado com a máquina virtualizada ou o software em operação, portanto um desenvolvedor pode agregar a seu software a possibilidade de levar as bibliotecas e outras dependências do seu programa junto ao software com menos perda de desempenho do que a virtualização do hardware de um servidor completo. Assim, o docker torna operações em uma infraestrutura como serviços web mais intercambiável, eficientes e flexíveis.

### JEST
Jest é um poderoso Framework de Testes em JavaScript com um foco na simplicidade.

## Práticas de desenvolvimento utilizadas e ferramentas
*TDD - desenvolvimento orientado a testes*

*DDD - desenvolvimento orientado pelo domínio*

*eslint - processo de aplicar regras a uma base de código e destacar padrões ou códigos problemáticos que não aderem a determinadas diretrizes de estilo.*

*pretier - responsável por formatar o código de acordo com essas regras.*


# Para rodar a aplicação
```
$ yarn
```

```
$ docker-compose up -d
```

```
$ yarn typeorm migration:run
```

```
$ yarn dev
```

# Build e testes
```
$ yarn build
```

```
$ yarn test
```

# ENDPOINTS

[INSOMNIA.YML](https://github.com/henriquemennabarreto/compasso/blob/main/Insomnia_2021-07-07.yml)
[INSOMNIA.JSON](https://github.com/henriquemennabarreto/compasso/blob/main/Insomnia_2021-07-07.json)

A api possui autenticação jwt, portanto é necessário criar um usuário e depois fazer login para ter acesso ao bearer token, o qual será utilizado nas demais requisições.
