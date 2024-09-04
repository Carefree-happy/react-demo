import React, { forwardRef, useEffect, useImperativeHandle, useMemo } from "react";
import { createPortal } from "react-dom";

export interface PortalProps {
    attach?: HTMLElement | string;
    children: React.ReactNode;
}

const Portal = forwardRef((props: PortalProps, ref) => {
    const {
        attach = document.body,
        children
    } = props;

    const container = useMemo(() => {
        const el = document.createElement('div');
        el.className = `portal-wrapper`;
        return el;
    }, []);

    useEffect(() => {
        const parentElement = getAttach('div');
        parentElement?.appendChild?.(container);
        return () => {
            parentElement?.removeChild?.(container);
        }
    }, [container, attach]);

    useImperativeHandle(ref, () => container);

    return createPortal(children, container);
});

export default Portal;

export function getAttach(attach: PortalProps['attach']) {
    // 如果传入的是string，则查找相应的 dom，
    // 如果是 HTMLElement，则直接作为挂载节点
    // 否则直接返回 document.body
    if (typeof attach === 'string') {
        return document.querySelector(attach);
    }
    if (typeof attach === 'object' && attach instanceof window.HTMLElement) {
        return attach;
    }
    return document.body;
}