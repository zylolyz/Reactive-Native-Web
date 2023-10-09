/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// redux saga example https://rasha08.medium.com/combining-redux-sagas-for-more-scalable-stores-68d8a2629cc
import React, {FC} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import withObservables from '@nozbe/with-observables';
import {database} from './database';
import User from './model/user';

// const enhance = withObservables(['user'], () => ({
//   users: database.collections.get('users'),
// }));

const users = database.collections.get('users');
const observeUsers = () => users.query().observe();

const Chart: FC<{users: User[]}> = ({users}) => {
  if (users.length < 1) {
    return <Text>empty</Text>;
  }

  return <Text>lsw</Text>;
};

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  return (
    <View style={styles.sectionContainer}>
      {title}
      {children}
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Section title="Step One">
            Edit <Text style={styles.sectionTitle}>App.tsx</Text>
            to change this screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes" />
          <Section title="Debug" />
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
