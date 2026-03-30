## Clonando e executando em sua máquina

### Pré-requisito:

-Node.js - Você encontra em: https://nodejs.org/en/

-Visual Studio Code ou qualquer editor de texto. Você encontra em: https://code.visualstudio.com/download

-Git: você encontra em: https://git-scm.com/downloads


Via terminal, rode os seguintes comandos:
```  
git clone https://github.com/rlm90/test-api-e2e
```
```
cd cy_api_serverest
```

#### Para instalar as dependencias:
```
npm install 
```

#### Suba o ambiente localhost
```
npx run start
```
Ou

```
npx serverest
```

Após a execução, basta acessar a documentação http://localhost:3000/ 

IMPORTANTE: Não feche o terminal com a execução do Serverest enquanto estiver usando.

#### Para executar em moodo Headlesss, via console
```
npx cypress run
```