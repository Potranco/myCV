
import { render, screen } from '@testing-library/react';
import Credits from './Credits';

test('renders Credits component', () => {
  render(<Credits />);
  
  const heading = screen.getByRole('heading', { name: /🎬 Créditos/i });
  expect(heading).toBeInTheDocument();

  const protagonist = screen.getByText(/Protagonizado por:/i);
  expect(protagonist).toBeInTheDocument();

  const directors = screen.getByText(/Directores:/i);
  expect(directors).toBeInTheDocument();

  const design = screen.getByText(/Diseño:/i);
  expect(design).toBeInTheDocument();

  const art = screen.getByText(/Arte:/i);
  expect(art).toBeInTheDocument();

  const creativeAssistant = screen.getByText(/Asistente creativo:/i);
  expect(creativeAssistant).toBeInTheDocument();

  const production = screen.getByText(/Producción:/i);
  expect(production).toBeInTheDocument();

  const qualityControl = screen.getByText(/Control de calidad:/i);
  expect(qualityControl).toBeInTheDocument();
});
