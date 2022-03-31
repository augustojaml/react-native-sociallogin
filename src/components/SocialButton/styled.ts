import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { theme } from './../../global/theme';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(60)}px;
  background: ${theme.colors.contrast};

  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 0 20px;

  border-radius: 8px;
`;

export const Image = styled.Image`
  height: ${RFValue(40)}px;
  width: ${RFValue(40)}px;
  margin-right: 20px;
`;

export const Title = styled.Text`
  color: ${theme.colors.text};
  font-size: ${RFValue(20)}px;
  font-family: ${theme.fonts.semi};
`;
