import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// screen 来查询 dom，查找文本内容匹配正则 /learn react/ 的 a 标签,然后断言它在 document 内
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// 拿到渲染容器的 dom，再用 dom api 来查找 dom
// test('renders learn react link 2', () => {
//   const { container } = render(<App/>);
//   const linkElement = container.querySelector('.App-link');
//   expect(linkElement?.textContent).toMatch(/learn react/i);
// })

test('renders learn react link 2', () => {
  render(<App />);
  // 使用 getByText 查找带有 "learn react" 文本内容的链接元素
  const linkElement = screen.getByText(/learn react/i);
  // 断言该链接元素确实存在
  expect(linkElement).toBeInTheDocument();
});