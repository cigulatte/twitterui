import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Posts from '../../../components/Posts';
import Stories from '../../../components/Stories';

const PostList = () => {
  return (
    <View style={styles.container}>
      <Stories />
      <Posts />
    </View>
  );
};

export default PostList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
