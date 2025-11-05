import Joystick from '@/components/Joystick';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.mainText}>Dron kamera gürüntüsü</Text>
        <Image
          style={styles.mapView}
          source={require('../../assets/images/mapView.jpg')}
          resizeMode="contain"
        />
      </View>
      <View style={styles.controller}>
          <View style={styles.controlsRow}>
            <View style={styles.joystickWrapper}>
              <Joystick />
            </View>
            <View style={styles.UpDown}>
              <TouchableOpacity style={styles.actionButton} onPress={() => console.log('Action pressed')}>
                <Image style={styles.dronIcon} source={require('../../assets/images/dronUp.png')} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton} onPress={() => console.log('Action pressed')}>
                <Image style={styles.dronIcon} source={require('../../assets/images/dronDown.png')} />
              </TouchableOpacity>
            </View>
          </View>
      </View>
      
      <View>
        
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  mainText: {
    fontSize: 30,
    marginLeft: 20,
    marginTop: 10
  },
  mapView: {
    width: '95%',
    height: 400,
    alignSelf: 'center',
    borderRadius: 8,
  },
  controller: {
    flex: 1,
    justifyContent: 'flex-start'

  },
  controlsRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 50,
    alignItems: 'center',
    paddingVertical: 12,
  },
  joystickWrapper: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButton: {
    width: 70,
    height: 100,
    borderRadius: 12,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  UpDown: {
    gap: 10
  },
  dronIcon: {
    width: '60%',
    height: 73
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
