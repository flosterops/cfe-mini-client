export enum Namespaces {
    common = 'common',
    footer = 'footer',
    login = 'login',
    error = 'error',
}

const defaultNamespaces = [Namespaces.common, Namespaces.footer];

const withDefaultNamespaces = (value?: Namespaces | Namespaces[]): Namespaces[] => {
    if (value instanceof Array) {
        return [...defaultNamespaces, ...value];
    }

    if (typeof value === 'string') {
        return [...defaultNamespaces, value];
    }

    if (value) {
        console.warn(`${(value as any).toString()} is not string and not an array`);
    }

    return defaultNamespaces;
};

export { withDefaultNamespaces };
