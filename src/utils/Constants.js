import {Dimensions, Platform} from 'react-native';

export const Colors = {
  primaryColor: '#1da1f2',
  secondaryColor: '#dbe0e4',
  likeColor: 'tomato',
  rtColor: '#62d2a2',
};

export const WIDTH = Dimensions.get('screen').width;
export const HEIGHT = Dimensions.get('screen').height;

export const SPACING = 10;
export const ITEM_SIZE = Platform.OS === 'ios' ? WIDTH * 0.8 : WIDTH * 0.82;
export const ITEM_HEIGHT = ITEM_SIZE * 1.2;
export const EMPTY_ITEM_SIZE = (WIDTH - ITEM_SIZE) / 2;
export const BACKDROP_HEIGHT = HEIGHT * 0.65;

export const LOGO_SIZE = 30;
export const ICON_SIZE = 28;
export const CARD_ICON_SIZE = 24;
export const STORIES_ITEM_SIZE = 50;
