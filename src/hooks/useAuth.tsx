import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

WebBrowser.maybeCompleteAuthSession();

interface IAuthHookProvider {
  children: ReactNode;
}

export interface ISocialUser {
  name: string;
  email: string;
  avatar: string;
}

interface IAuthHookContext {
  isLoadingLogin: boolean;
  signInGoogle(): Promise<void>;
  signOutGoogle(): Promise<void>;
  user: ISocialUser | undefined;
}

const AuthHookContext = createContext({} as IAuthHookContext);

function AuthHookProvider({ children }: IAuthHookProvider) {
  const [isLoadingLogin, setIsLoadingLogin] = useState(false);
  const [user, setUser] = useState<ISocialUser>();

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: process.env.ANDROID_CLIENT_ID,
    expoClientId: process.env.EXPO_CLIENT_ID,
  });

  async function signInGoogle() {
    setIsLoadingLogin(true);
    await promptAsync({ useProxy: false });
    setIsLoadingLogin(false);
  }

  async function signOutGoogle() {
    setIsLoadingLogin(true);
    setTimeout(() => {
      setUser(undefined);
      setIsLoadingLogin(false);
    }, 2000);
  }

  useEffect(() => {
    (async () => {
      if (response?.type === 'success') {
        const fetchResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
          headers: { Authorization: `Bearer ${response.authentication?.accessToken}` },
        });
        const { name, email, picture } = await fetchResponse.json();
        setUser({
          name: name,
          email: email,
          avatar: picture,
        });
      }
    })();
  }, [response]);

  return (
    <>
      <AuthHookContext.Provider value={{ isLoadingLogin, signInGoogle, signOutGoogle, user }}>
        {children}
      </AuthHookContext.Provider>
    </>
  );
}

function useAuth() {
  return useContext(AuthHookContext);
}

export { AuthHookProvider, useAuth };
