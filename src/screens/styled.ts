import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { theme } from './../global/theme';

export const Container = styled.View`
  flex: 1;
  background: ${theme.colors.primary};
  align-items: center;
  justify-content: center;
  padding: ${RFValue(20)}px;
`;

export const Title = styled.Text``;

export const SocialContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ProfileImage = styled.Image`
  width: ${RFValue(120)}px;
  height: ${RFValue(120)}px;
  border-width: ${RFValue(8)}px;

  border-color: ${theme.colors.contrast};
  border-radius: 8px;

  margin: ${RFValue(30)}px 0;
`;

export const ProfileName = styled.Text`
  color: ${theme.colors.text};
  font-size: ${RFValue(20)}px;
  font-family: ${theme.fonts.semi};
`;

export const ProfileEmail = styled.Text`
  color: ${theme.colors.text};
  font-size: ${RFValue(20)}px;
  font-family: ${theme.fonts.regular};
`;

export const IconButton = styled.TouchableOpacity`
  margin: ${RFValue(30)}px 0;
`;

export const Icon = styled(Feather)`
  color: ${theme.colors.danger};
  font-size: ${RFValue(30)}px;
`;
