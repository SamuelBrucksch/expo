import React from 'react';
import { type TextStyle } from 'react-native';
import type { Href } from '../types';
interface SidebarProps {
    children?: React.ReactNode;
    displayMode?: 'over' | 'beside' | undefined;
}
interface SidebarTriggerProps {
    children?: React.ReactNode;
    href?: Href;
    notCollapsible?: boolean;
}
export declare function NativeButton({ children, style, }: {
    children?: React.ReactNode;
    style?: TextStyle;
}): React.JSX.Element;
declare function SidebarNavigator({ children, displayMode }: SidebarProps): React.JSX.Element;
export declare const Sidebar: typeof SidebarNavigator & {
    Trigger: ({ children }: SidebarTriggerProps) => string | number | bigint | true | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null;
    Header: (({ children }: {
        children?: React.ReactNode;
    }) => React.JSX.Element) & {
        Title: ({ children, large }: {
            children?: React.ReactNode;
            large?: boolean;
        }) => React.JSX.Element;
        Right: ({ children }: {
            children?: React.ReactNode;
        }) => React.JSX.Element;
        Left: ({ children }: {
            children?: React.ReactNode;
        }) => React.JSX.Element;
    };
};
export {};
//# sourceMappingURL=split-view.d.ts.map