import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import GoogleIcon from '../assets/image/google.png';
import { SocialButton } from '../components/SocialButton';
import { theme } from '../global/theme';
import { useAuth } from '../hooks/useAuth';
import {
  Container,
  Icon,
  IconButton,
  ProfileEmail,
  ProfileImage,
  ProfileName,
  SocialContainer,
} from './styled';

export function Home() {
  const { user, signInGoogle, signOutGoogle, isLoadingLogin } = useAuth();

  console.log(isLoadingLogin);

  return (
    <>
      <StatusBar style="light" />
      <Container>
        {!user ? (
          <SocialButton
            onPress={signInGoogle}
            isLoading={isLoadingLogin}
            image={GoogleIcon}
            title="Entrar com Google"
          />
        ) : (
          <SocialContainer>
            <ProfileImage source={{ uri: user.avatar }} />
            <ProfileName>{user.name}</ProfileName>
            <ProfileEmail>{user.email}</ProfileEmail>
            <IconButton onPress={signOutGoogle}>
              {isLoadingLogin ? (
                <ActivityIndicator size={35} color={theme.colors.text} />
              ) : (
                <Icon name="power" />
              )}
            </IconButton>
          </SocialContainer>
        )}
      </Container>
    </>
  );
}
