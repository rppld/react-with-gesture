import * as React from 'react';

export interface GestureState {
    x: number;
    y: number;
    xDelta: number;
    yDelta: number;
    xInitial: number;
    yInitial: number;
    xPrev: number;
    yPrev: number;
    down: boolean;

    xVelocity: number;
    yVelocity: number;
}

type GestureChildComponent<T> = React.ComponentType<T & Partial<GestureState>>;

export interface GestureOptions {
  transient?: boolean;
  onAction?(action: GestureState): void;
}

export interface WithGestureProps {
    onUp?: (newProps: GestureState) => GestureState;
    onDown?: (newProps: GestureState) => GestureState;
    onMove?: (newProps: GestureState) => GestureState;

    touch?: boolean;
    mouse?: boolean;

    className?: string;
}

export interface GestureProps {
    children(props: GestureState): React.ReactNode;
}

export function withGesture<T>(
    WrappedComponent: GestureChildComponent<T>,
): React.ComponentType<T & WithGestureProps & GestureOptions>;

export function useGesture(options?: GestureOptions): [{
    onMouseDown: React.MouseEventHandler,
    onTouchDown: React.TouchEventHandler
}, GestureState];

export class Gesture extends React.Component<GestureProps & WithGestureProps & GestureOptions> {}
