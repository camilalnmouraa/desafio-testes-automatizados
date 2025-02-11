describe('Formulário de Cadastro', () => {
  beforeEach(() => {
    cy.visit('ui/src/index.html');
  });

  it('Deve cadastrar com sucesso quando todos os campos são preenchidos corretamente', () => {
    cy.preencherCadastro('Usuário Teste', 'teste@teste.com', 'teste@teste.com', 'Teste123');
    cy.getDataCy('btn-cadastrar').click();
    cy.getDataCy('mensagem').should('have.text', 'Cadastro realizado com sucesso!');
  });

  it('Deve exibir erro ao tentar enviar sem preencher os campos', () => {
    cy.getDataCy('btn-cadastrar').click(); 
    cy.getDataCy('mensagem')
      .should('be.visible')
      .and('have.text', 'Todos os campos são obrigatórios!');
  });

  it('Deve exibir erro ao inserir uma senha fraca', () => {
    cy.preencherCadastro('Usuário Teste', 'teste@teste.com', 'teste@teste.com', '12345');
    cy.getDataCy('btn-cadastrar').click();
    cy.getDataCy('mensagem')
      .should('be.visible')
      .and('have.text', 'A senha deve ter pelo menos 8 caracteres, 1 letra maiúscula e 1 número.');
  });

  it('Deve exibir erro quando os e-mails não forem iguais', () => {
    cy.preencherCadastro('Usuário Teste', 'teste@teste.com', 'diferente@teste.com', 'Teste123');
    cy.getDataCy('btn-cadastrar').click();
    cy.getDataCy('mensagem')
      .should('be.visible')
      .and('have.text', 'Os e-mails não coincidem!');
  });
});