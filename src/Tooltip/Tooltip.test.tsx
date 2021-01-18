import React from 'react';
import { render, screen } from '@testing-library/react';
import Tooltip from './Tooltip';

test('renders tooltip', () => {
  render(
    <Tooltip tooltipContent="Tooltip content">
      <div className="tooltipTarget">Tooltip target</div>
    </Tooltip>
  );
  const tooltipElement = screen.getByText(/Tooltip content/i);
  expect(tooltipElement).toBeInTheDocument();

  const tooltipTarget = screen.getByText(/Tooltip target/i);
  expect(tooltipTarget).toBeInTheDocument();
});
