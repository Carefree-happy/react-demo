import React from 'react';
import { render } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
import { createIcon } from './createIcon';

// 创建一个简单的 SVG 图标
const TestIconContent = (
    <path d="M512 0C229.2 0 0 229.2 0 512s229.2 512 512 512 512-229.2 512-512S794.8 0 512 0z m0 933.1c-232.1 0-421.1-189-421.1-421.1S279.9 90.9 512 90.9 933.1 279.9 933.1 512 744.1 933.1 512 933.1z" />
);

// 使用 createIcon 创建一个 Icon 组件
const TestIcon = createIcon({
    content: TestIconContent,
    iconProps: {
        size: '24px',
        spin: true,
    },
    viewBox: '0 0 1024 1024',
});

describe('createIcon', () => {
    it('renders correctly with given props', () => {
        const { container } = render(<TestIcon />);

        const svgElement = container.querySelector('svg');
        expect(svgElement).toBeInTheDocument();
        expect(svgElement).toHaveAttribute('viewBox', '0 0 1024 1024');
        expect(svgElement).toHaveAttribute('width', '24px');
        expect(svgElement).toHaveAttribute('height', '24px');
        expect(svgElement).toHaveClass('icon');
        expect(svgElement).toHaveClass('icon-spin');
        expect(svgElement?.querySelector('path')).toBeInTheDocument();
    });

    it('passes additional props to the Icon component', () => {
        const { container } = render(<TestIcon className="custom-class" style={{ color: 'red' }} />);

        const svgElement = container.querySelector('svg');
        expect(svgElement).toHaveClass('custom-class');
        expect(svgElement).toHaveStyle('color: red');
    });
});
