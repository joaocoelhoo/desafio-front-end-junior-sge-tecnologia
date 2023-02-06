import React from 'react';
import { screen, } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import { tags } from '../api-offline/tagsOffline';
import { cats } from '../api-offline/catsOffline';
import { act } from 'react-dom/test-utils';

async function mockFetch(url) {
  if(url.includes('tags')) {
    return {
      ok: true,
      status: 200,
      json: async () => tags,
    };
  }

  if(url.includes('cats')) {
    return {
      ok: true,
      status: 200,
      json: async () => cats,
    };
  }

  throw new Error(`Unhandled request: ${url}`);        
}

describe('Testa a página de Lista de Gatos', () => {
  let fetchSpy;

  beforeEach(() => {
    fetchSpy = jest.spyOn(global, 'fetch').mockImplementation(mockFetch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Testa se tags são listadas', async () => {
    act(() => {
      renderWithRouter(<App />);
      const catsLink = screen.getByTestId('header-cats');
      userEvent.click(catsLink);
    });

    expect(await screen.findByText('TAGA')).toBeInTheDocument();
    expect(await screen.findByText('TAGB')).toBeInTheDocument();
    expect(await screen.findByText('TAGC')).toBeInTheDocument();
    expect(await screen.findByText('TAGD')).toBeInTheDocument();
  });

  it('Testa se ids de cats são listados', async () => {
    act(() => {
      renderWithRouter(<App />);
      const catsLink = screen.getByTestId('header-cats');
      userEvent.click(catsLink);
    });

    expect(await screen.findByText('id: ahl')).toBeInTheDocument();
    expect(await screen.findByText('id: MTkyMDQxNg')).toBeInTheDocument();
    expect(await screen.findByText('id: m1TeHn2dH')).toBeInTheDocument();
    expect(await screen.findAllByText('id: vDFI6jI2O')).toHaveLength(2);
    expect(await screen.queryByText('id: ab5')).not.toBeInTheDocument();
  });
});
