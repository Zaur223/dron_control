import Joystick from '@/components/Joystick';
import { useState } from 'react';
import { Dimensions, Image, ScrollView, SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
  const [activeView, setActiveView] = useState<'SIFT' | 'map' | 'graph'>('map');


  const getImageSource = () => {
    switch (activeView) {
      case 'SIFT':
        return require('../../assets/images/SIFT_view.png');
      case 'map':
        return require('../../assets/images/map_view.png');
      case 'graph':
        return require('../../assets/images/grafic_view.png');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
              <View style={styles.joystickWrapper} pointerEvents='box-none'>
                <Joystick  />
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
          <View style={styles.mapWrapper}>
            <View style={styles.switchButtons}>
              <TouchableOpacity 
                style={[styles.switchButton, activeView === 'SIFT' && styles.activeButton]} 
                onPress={() => setActiveView('SIFT')}
              >
                <Text style={activeView === 'SIFT' ? styles.activeButtonText : styles.buttonText}>SIFT</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.switchButton, activeView === 'map' && styles.activeButton]}
                onPress={() => setActiveView('map')}
              >
                <Text style={activeView === 'map' ? styles.activeButtonText : styles.buttonText}>Harita</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.switchButton, activeView === 'graph' && styles.activeButton]}
                onPress={() => setActiveView('graph')}
              >
                <Text style={activeView === 'graph' ? styles.activeButtonText : styles.buttonText}>Grafik</Text>
              </TouchableOpacity>
            </View>
            <Image style={styles.imageView} source={getImageSource()} resizeMode='contain' />
          </View>
        </View>

        <View style={styles.controlWrapper}>
          <View style={styles.controlButtons}>
            <View>
              <TouchableOpacity style={[styles.controlButton, styles.controlButtonGreen]}>
                <Text style={styles.controlButtonText}>Uçuşu Başlat</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.controlButton, styles.controlButtonGrey]}>
                <Text style={styles.controlButtonText}>Takip Et</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={[styles.controlButton, styles.controlButtonBlue]}>
                <Text style={styles.controlButtonText}>Video kaydet</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.controlButton, styles.controlButtonRed]}>
                <Text style={styles.controlButtonText}>Geri Dön</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.detectionWrapper}>
            <Text style={styles.detectionTitle}>Tespit Edilen Nesneler</Text>
            <SectionList
              style={styles.sectionList}
              sections={[
                {
                  title: 'Nesneler',
                  data: [
                    'Araba: 3',
                    'İnsan: 2',
                    'Bina: 1',
                  ],
                },
              ]}
              renderItem={({item}) => (
                <View style={styles.detectionItem}>
                  <Text style={styles.detectionText}>{item}</Text>
                </View>
              )}
              renderSectionHeader={({section}) => (
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionHeaderText}>{section.title}</Text>
                </View>
              )}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
          </View>
        </View>

        <View style={styles.data}>
          <Text style={styles.dataMainText}>Dron Çalışıyor</Text>
          <View style={styles.dataWrapper}>
            <View>
              <View style={styles.dataItem}>
                <Image source={require('../../assets/images/camera.png')} />
                <View>
                  <Text style={{fontSize: 18, fontWeight: 'bold'}}>Kamera</Text>
                  <Text>Çalışıyor</Text>
                </View>
              </View>
              <View style={styles.dataItem}>
                <Image source={require('../../assets/images/dron_icon.png')} />
                <View>
                  <Text style={{fontSize: 18, fontWeight: 'bold'}}>GPS</Text>
                  <Text>Çalışmıyor</Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>Uçus süresi: 00:45:24</Text>
              <View style={styles.dataItem}>
                <Image source={require('../../assets/images/battary.png')} />
                <Text style={{marginTop: 10}}>%68</Text>
              </View>
              <View style={styles.dataItem}>
                <Image source={require('../../assets/images/dron_icon2.png')} />
                <Text style={{marginTop: 10}}>Yükseklik - 200 m</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const { width, height } = Dimensions.get('window');

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
  mapWrapper: {
    flex: 1,
    alignItems: 'center'
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  switchButtons: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    width: 365,
    marginTop: 60,
  },
  switchButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#D9D9D9',
    width: 60,
    height: 35,
    marginHorizontal: 4,
  },
  activeButton: {
    backgroundColor: '#00D4FF',
  },
  buttonText: {
    color: '#000',
    fontSize: 14,
  },
  activeButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  imageView: {
    marginTop: 20,
    borderRadius: 7,
    width: width * 0.95,
    height: height * 0.3,
  },
  controlWrapper: {
    marginTop: 30
  },
  controlButtons: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 20
  },
  controlButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 160,
    height: 70,
    borderRadius: 5,
    marginVertical: 4,
  },
  controlButtonGreen: {
    backgroundColor: '#50AA59',
  },
  controlButtonGrey: {
    backgroundColor: '#DCDCDC',
  },
  controlButtonBlue: {
    backgroundColor: '#11DEFE',
  },
  controlButtonRed: {
    backgroundColor: '#D95A5A',
  },
  controlButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  detectionWrapper: {
    marginTop: 20,
    marginHorizontal: 10,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    padding: 15,
  },
  detectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#343a40',
  },
  sectionList: {
    width: '100%',
  },
  detectionItem: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
  detectionText: {
    fontSize: 16,
    color: '#495057',
  },
  sectionHeader: {
    backgroundColor: '#e9ecef',
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#212529',
  },
  separator: {
    height: 1,
    backgroundColor: '#dee2e6',
  },
  data: {
    marginTop: 30
  },
  dataMainText: {
    fontSize: 24,
    marginLeft: 20,
    fontWeight: 'bold'
  },
  dataWrapper: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
    gap: 30
  },
  dataItem: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    marginBottom: 15
  },

});
