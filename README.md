# **Vendinha**

## **Intruções**

### **Utilizando template Github**

Caso queira utilizar o template, siga os passos abaixo.

* Clique no botão "Use this template":
  
![template-github1](https://user-images.githubusercontent.com/6816159/122781703-75e00b80-d286-11eb-9661-eee065e13720.png)

* Preencha um nome para o repositório e clique em "Create repository from template":
 
![template-github2](https://user-images.githubusercontent.com/6816159/122781724-7c6e8300-d286-11eb-9969-475e1b370515.png)


### **Rodando projeto backend**

Para executar o projeto, abra o terminal e execute os comandos a seguir:

* *Abre a pasta do projeto*

    ```bash
    cd .\backend\TemplateApi
    ```

* *Executa o projeto*

    ```bash
    dotnet run .\TemplateApi.csproj
    ```

    
* *A aplicação estará rodando no endereço e porta:*

    ```bash
    http://localhost:5000
    ```


### **Rodando projeto frontend**

Para executar o projeto, abra o terminal e execute os comandos a seguir:

* *Abre a pasta do projeto*

    ```bash
    cd .\frontend
    ```

* *Instala dependencias*

    ```bash
    npm install
    ```

* *Executa o projeto com o live-server*

    ```bash
    npm start
    ```

* *A aplicação estará rodando no endereço e porta:*

    ```bash
    http://127.0.0.1:8080
    ```

## **Cenário**

Uma vendinha precisa informatizar o controle de dívidas de seus clientes (dívidas penduradas) para facilitar a busca e o cadastro desses dados que antes eram feitas por papel. O cliente chega na loja, faz a compra e pede para o atendente pendurar para que seja acertado no final do mês.

Pensando nisso, é necessário criar um sistema simples de cadastro para que o dono da venda consiga controlar as dívidas de seus clientes.

### **Requisitos**

- O sistema deve permitir o cadastro, recuperação, atualização e exclusão de clientes ¹
- Os dados necessários para se criar a conta são:
    - Nome completo *
    - CPF *
      - Validar quantidade de caracteres
    - Descricao
      - O que comprou?
    - Situacao
      - Esta pago?
    - Valor divida *

    \*: campos obrigatórios 
- Deverá haver uma tela que liste as dividas, onde haverão as validações abaixo:        
    - Saldo devedor total deverá ser calculado de acordo com a lista de dividas com situação "false"(pendente)
    - Deve ser possível marcar uma conta como paga
    - Não deve ser possível incluir novas dividas para um mesmo cpf que possua dividas em aberto(retornar mensagem)
    - As dívidas deverão ser ordenadas por valor em ordem decrescente

¹: a persistência pode ser feita em arquivo ou em memória, não é mandatório o uso de qualquer banco de dados.

## **O projeto**
Você fará uma API que possibilidade o CRUD de dívidas com dados no formato JSON, além de desenvolver uma interface para que o atendente possa fazer essas operações.

### **Requisitos**
- A API deve ser desenvolvida preferencialmente em Asp.NET Core com a linguagem C#, quaisquer bibliotecas ou frameworks estão permitidos.
- A API deve aceitar e devolver dados no formato JSON
- A interface deve ser desenvolvida com HTML, CSS e Javascript, quaisquer bibliotecas ou frameworks estão permitidos.
- A interface deve possuir uma listagem que possibilite o cadastro, alteração(marcar como pago) e exclusão da dívida
- O cadastro deve ser validado e caso haja algum erro de validação (um campo obrigatório não foi preenchido, por exemplo), você deve mostrar o erro na tela para que o atendente possa consertar.
- O projeto deve estar salvo num repositório git **público** da sua escolha (BitBucket, GitHub, GitLab etc)
- README.md explicando o motivo do uso das bibliotecas escolhidas (caso se aplique)
- README.md deve conter instruções de como executar a aplicação

### **Avaliação**

Serão avaliados nesse projeto o seu domínio nas tecnologias .NET e Javascript, além da forma que você levou para resolver o problema.

#### **Pontos Essenciais**
- Linguagem C#
- Linguagem Javascript
- Programação orientada a objetos
- Construção de API
- Apresentação de informação
- Domínio de Git


#### **Pontos Adicionais**
- Uso de bibliotecas e frameworks Javascript como React ou Angular
- Uso de banco de dados relacional
- Uso de ORM
- REST
- Testes Unitários
- Documentação da API com postman ou swagger


**OBS**: Caso não consiga finalizar, envie até onde você conseguiu, é importante sabermos como você resolveu, ainda que parcialmente, a proposta do projeto.

## Resultado final

https://user-images.githubusercontent.com/6816159/122781646-68c31c80-d286-11eb-93e4-c342ccb1e463.mov


