TESTE DE INTERFACE DO USUÁRIO
Laboratório de Validação de Interface e Experiência do Usuário
Este projeto é um ambiente controlado projetado para garantir que elementos visuais e funcionais funcionem corretamente, sejam intuitivos e consistentes para o usuário final. O laboratório foca na usabilidade, navegabilidade e aparência através dos seguintes pilares:

🛠️ Funcionalidades e Validações
1. Sistema de Temas (Modo Escuro e Claro)
Dual-Tone Architecture: O sistema utiliza variáveis globais para alternar entre uma interface de alto contraste (Dark Mode) e uma interface focada em legibilidade e conforto visual (Light Mode).

Persistência de Estilo: A arquitetura garante que a identidade visual e a consistência das cores sejam mantidas independentemente do tema selecionado, validando a integridade da aparência.


3. Validação de Input
Feedback de Foco: O campo de texto possui uma regra de estilo onde o foco altera a cor da borda via CSS, facilitando a identificação visual da área ativa para o usuário.

Integridade de Layout: Inclui testes de tratamento de texto (overflow), onde conteúdos excessivamente longos são cortados automaticamente com reticências para não quebrar a estrutura do dashboard.


3. Estados Assíncronos
Feedback de Processamento: O sistema simula interações de "vida real" onde o botão assume um estado de carregamento (loading), fornecendo feedback visual enquanto uma tarefa é processada.

Prevenção de Erros: Durante o estado assíncrono, as interações são bloqueadas para evitar cliques duplos e envios repetidos de dados, garantindo a funcionalidade correta dos botões.


4. Notificações
Respostas do Sistema: Implementação de notificações (Toasts) dinâmicas que validam a resposta visual de eventos do sistema.

Confirmação de Ações: O usuário recebe mensagens claras de "Sucesso" ou "Erro" após interagir com os elementos, garantindo que o fluxo de navegação seja intuitivo e informativo.

Desenvolvido para fins acadêmicos e validação de competências de UI/UX Engineering.

FEITO POR PEDRO HENRIQUE E LUCIANO PARA FINS ACADÊMICOS.
