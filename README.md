##Sistema de cadastro de médicos

* Objetivo:

Este pequeno sistema tem por objetivo gerenciar o cadastro de médicos.

* Como rodar este projeto? 

Basta clonar o repositório para sua maquina local com o git e na pasta raiz rodar o comando "npm run start"

#Funcionalidade

Este frontend se limita a criar um cadastro de médico inserindo as seguinte informações: nome, crm, telefone, celular, cep e a especialidade do médico, 
o endereço do médico é completado automaticamente através da api viacep após o usuário sair do campo de cep e desde que esteja preenchido no padrão "00000-00".

A outra funcionalidade é sobre atualizar as informações do usuário já constantes no banco de dados, exige que o usuário digite um crm e preencha o campo que desejar
alterar, clicando no botão os dados são atualizados no banco de dados. a página de cadastro funciona perfeitamente desde que inseridos os dados corretamente

#Vulnerabilidades da aplicação

A página de atualizar as informações de usuário funciona inserindo um CRM que é obrigatorio e deveria funcionar preenchendo aqualquer campo, porém até o momento deste 
commit só está atualizando se o usuário inserir uma especialidade junto, e a mesma também é atualizada, caso contrário a requisição volta com statuscode 400.

#Desenvolvimento

Essa aplicação foi desenvolvida em React.js e só tem as duas páginas referidas, foi desenvolvida usando o máximo de ferramentas quanto possível para demonstrar os 
conhecimentos, estou ciente as vulnerabilidades da aplicação, mas para deixa-la rodando perfeitamente demandaria mais tempo, então a proposta principal foi expor
os conheicmentos na linguagem.
