import { render, fireEvent, screen } from '@testing-library/react';
import Toggle from './Toggle';

// test('toggle', () => {
//   const { container } = render(<Toggle/>);
//   expect(container.querySelector('p')?.textContent).toBe('close');
//   fireEvent.click(container.querySelector('button')!);
//   expect(container.querySelector('p')?.textContent).toBe('open');
// });

test('toggle', () => {
  render(<Toggle />);
  // 检查初始状态下 <p> 标签的文本是否为 'close'
  expect(screen.getByText('close')).toBeInTheDocument();
  // 点击按钮
  fireEvent.click(screen.getByRole('button'));
  // 检查点击后 <p> 标签的文本是否为 'open'
  expect(screen.getByText('open')).toBeInTheDocument();
});
