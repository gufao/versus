 Teste técnico - Front-End
 
O que será avaliado:

● Qualidade geral do código

● Tecnologias utilizadas

● Conhecimento geral das tecnologias aplicadas

● Não esqueça de comentar seu código :)

O que não será avaliado:

● Design e experiencia

Tarefa:

Hoje, na versus code, possuímos 2 serviços que são fundamentais para o funcionamento da plataforma, nossa API e nosso serviço de sockets. Sua tarefa será:

1. Criar um formulário de login
2. Gerar o token de autenticação através da API
3. Com o token gerado, utiliza-lo para autenticar sua sessão no socket service
4. Receber e exibir os eventos dos sockets
5. Mostrar as informacoes basicas do usuario
a. Username
b. Steam account
c. Riot account
d. Se ele está em algum campeonato

Informações adicionais:

Url da API: ​https://core-kael.versusco.de/ 

Socket host: ​https://core-titan.versusco.de/ 

Usuario para testes: ViRRO - 12345678 

Socket lib: ​https://socket.io/

Authentication type: Bearer

End-point de autenticacao da API: 
POST ​https://core-kael.versusco.de/oauth Campos esperados: username e password (json object)

Evento de autenticação do socket: ​authentication

Conteúdo: Token recebido pela API (sem chaves ou formatação, somente o token)

End-point para ler as informacoes basicas do usuario: GET https://core-kael.versusco.de/me
    
