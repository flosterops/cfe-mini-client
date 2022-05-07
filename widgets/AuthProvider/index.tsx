import { ReactNode, ReactNodeArray, useEffect } from 'react';
import { AuthContext, useAuthProvider } from 'helpers/useAuth';

interface IAuthProvider {
    children: ReactNode | ReactNodeArray;
}

const AuthProvider = ({ children }: IAuthProvider) => {
    const auth = useAuthProvider();
    // On the change user auth changing locale to default and to user locale
    // TODO Should to think how to fetch locale before the first render
    useEffect((): void => {
        // TODO add locale from use AUTH
    }, [auth.user]);
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
