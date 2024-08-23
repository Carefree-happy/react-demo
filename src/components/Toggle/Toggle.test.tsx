import { render, fireEvent, screen } from '@testing-library/react';
import Toggle from './Toggle';

// test('toggle', () => {
//   const { container } = render(<Toggle/>);
//   expect(container.querySelector('p')?.textContent).toBe('close');
//   fireEvent.click(container.querySelector('button')!);
//   expect(container.querySelector('p')?.textContent).toBe('open');
// });

test('toggle', async() => {
  render(<Toggle />);
  // 检查初始状态下 <p> 标签的文本是否为 'close'
  expect(screen.getByText('close')).toBeInTheDocument();
  // 点击按钮
  fireEvent.click(screen.getByRole('button'));
  // 1.检查点击后 <p> 标签的文本是否为 'open'
  // expect(screen.getByText('open')).toBeInTheDocument();
  // 2.等待文本内容从 'close' 变为 'open'
  // await waitFor(() => expect(screen.getByText('open')).toBeInTheDocument(), {
  //   timeout: 3000,
  // });
  const openText = await screen.findByText('open', {}, { timeout: 3000 });
  expect(openText).toBeInTheDocument();
});
