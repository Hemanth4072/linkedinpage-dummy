import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const ProfileButton = ({label, primary}) => (
  <TouchableOpacity style={[styles.button, primary ? styles.buttonPrimary : styles.buttonSecondary]}>
    <Text style={[styles.buttonText, primary ? styles.buttonTextPrimary : styles.buttonTextSecondary]}>{label}</Text>
  </TouchableOpacity>
);

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#f3f2ef" />
      <ScrollView style={styles.page} contentContainerStyle={styles.content}>
        <View style={styles.profileCard}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80',
            }}
            style={styles.coverImage}
          />

          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
            }}
            style={styles.avatar}
          />

          <View style={styles.profileBody}>
            <Text style={styles.name}>Hemanth Kumar Arigela</Text>
            <Text style={styles.pronouns}>He/Him</Text>
            <Text style={styles.headline}>
              Java Backend Engineer | System Architecture | Spring Boot | Microservices | Scalable Backend
              Systems | 2+ Years
            </Text>
            <Text style={styles.location}>India · Contact info</Text>
            <Text style={styles.connections}>1,983 followers · 500+ connections</Text>

            <View style={styles.buttonRow}>
              <ProfileButton label="Open to" primary />
              <ProfileButton label="Add section" />
              <ProfileButton label="Enhance profile" />
            </View>

            <View style={styles.openToWorkCard}>
              <Text style={styles.openTitle}>Open to work · Recruiters only</Text>
              <Text style={styles.openText}>India | On-site · Hybrid · Remote</Text>
              <Text style={styles.showDetails}>Show details</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f3f2ef',
  },
  page: {
    flex: 1,
  },
  content: {
    padding: 12,
  },
  profileCard: {
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#d9d9d9',
  },
  coverImage: {
    width: '100%',
    height: 180,
  },
  avatar: {
    width: 112,
    height: 112,
    borderRadius: 56,
    borderWidth: 4,
    borderColor: '#ffffff',
    position: 'absolute',
    top: 120,
    left: 18,
  },
  profileBody: {
    paddingTop: 64,
    paddingHorizontal: 18,
    paddingBottom: 20,
  },
  name: {
    fontSize: 32,
    fontWeight: '700',
    color: '#222222',
  },
  pronouns: {
    marginTop: 4,
    color: '#6f6f6f',
    fontSize: 18,
  },
  headline: {
    marginTop: 14,
    fontSize: 22,
    lineHeight: 34,
    color: '#222222',
  },
  location: {
    marginTop: 12,
    fontSize: 18,
    color: '#666666',
  },
  connections: {
    marginTop: 10,
    fontSize: 19,
    color: '#0a66c2',
    fontWeight: '600',
  },
  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
    gap: 10,
  },
  button: {
    borderRadius: 22,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1,
  },
  buttonPrimary: {
    backgroundColor: '#0a66c2',
    borderColor: '#0a66c2',
  },
  buttonSecondary: {
    backgroundColor: '#ffffff',
    borderColor: '#707070',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
  },
  buttonTextPrimary: {
    color: '#ffffff',
  },
  buttonTextSecondary: {
    color: '#0a66c2',
  },
  openToWorkCard: {
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#dde8f3',
    padding: 14,
  },
  openTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222222',
  },
  openText: {
    marginTop: 6,
    fontSize: 17,
    color: '#4a4a4a',
  },
  showDetails: {
    marginTop: 8,
    color: '#0a66c2',
    fontWeight: '700',
    fontSize: 18,
  },
});
