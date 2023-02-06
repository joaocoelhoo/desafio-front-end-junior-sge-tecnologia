import React from 'react';
import Header from '../components/Header';
import { screen, } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa se os elementos do header estão na tela', () => {
  it('busca elemento com data-testid: header-cats', () => {
    renderWithRouter(<Header />);

    const headerCatsLink = screen.getByTestId("header-cats");

    expect(headerCatsLink).toBeInTheDocument();
  });

  it('busca elemento com data-testid: header-form', () => {
    renderWithRouter(<Header />);

    const headerFormLink = screen.getByTestId("header-form");

    expect(headerFormLink).toBeInTheDocument();
  });
});

describe('Testa se o usuário é redirecionado ao clicar nos links do header', () => {
  it('Testa se o usuário é redirecionado para a Lista de gatos', () => {
    const { history } = renderWithRouter(<App />);
    const catsLink = screen.getByTestId('header-cats');
    userEvent.click(catsLink);
    expect(history.location.pathname).toBe('/cats');
  });

  it('Testa se o usuário é redirecionado para o Formulário', () => {
    const { history } = renderWithRouter(<App />);
    const formLink = screen.getByTestId('header-form');
    userEvent.click(formLink);
    expect(history.location.pathname).toBe('/form');
  });
});
