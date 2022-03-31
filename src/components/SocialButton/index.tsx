import React from 'react';
import { ActivityIndicator, ImageSourcePropType, TouchableOpacityProps } from 'react-native';
import { theme } from '../../global/theme';
import { Container, Image, Title } from './styled';

interface Props extends TouchableOpacityProps {
  image: ImageSourcePropType;
  title?: string;
  isLoading?: boolean;
}

export function SocialButton({ image, title = 'SignIn', isLoading = false, ...rest }: Props) {
  return (
    <>
      <Container {...rest} activeOpacity={0.6}>
        {isLoading ? (
          <ActivityIndicator size={35} color={theme.colors.text} />
        ) : (
          <>
            <Image source={image} />
            <Title>{title}</Title>
          </>
        )}
      </Container>
    </>
  );
}
