# English

## Cloning and Running on Your Machine

### Prerequisites:

-Node.js – You can download it at: https://nodejs.org/en/

-Visual Studio Code or any text editor – Download at:https://code.visualstudio.com/download

-Git - Download at: https://git-scm.com/downloads


Run the following commands in your terminal:
```  
git clone https://github.com/rlm90/test-api-e2e
```
```
cd cy_api_serverest
```

#### To install dependencies:
```
npm install 
```

#### Start the local environment:
```
npx run start
```
Or

```
npx serverest
```

After running, simply access the documentation at: http://localhost:3000/

IMPORTANT: Do not close the terminal while Serverest is running.

#### To run in headless mode via console:
```
npx cypress run
```

# Português

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

#### Para executar em modo Headlesss, via console
```
npx cypress run
```