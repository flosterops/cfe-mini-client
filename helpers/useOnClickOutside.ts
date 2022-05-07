import { useEffect } from 'react';

function useOnClickOutside(ref: any, handler: (...args: any) => void): any {
    useEffect((): void | (() => void) => {
        const listener = (event: MouseEvent | TouchEvent): void => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }

            handler(event);
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, handler]);
}

export { useOnClickOutside };
