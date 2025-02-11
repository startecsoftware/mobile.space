import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { useDimension } from "../../hooks/useDimension";
import Icons from "../../constants/Icons";
import { useState } from "react";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import Houses from "../houses/houses";


const { width, height } = useDimension()

export default function HomeScreen() {

  const [index, setIndex] = useState(0);

  const HousesRoute = () => (
    <Houses/>
  )

  const ApartmentRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#f2ecf9' }}>
      <Text>Apartamentos</Text>
    </View>
  )

  const LandsRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#f2ecf9' }}>
      <Text>Terrenos</Text>
    </View>
  )

  const FarmsRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#f2ecf9' }}>
      <Text>Fazendas</Text>
    </View>
  )

  const renderScene = SceneMap({
    houses: HousesRoute,
    apartments: ApartmentRoute,
    lands: LandsRoute,
    farms: FarmsRoute
  })

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#7d02fd' }}
      tabStyle={{ backgroundColor: '#7d02fd' }}
    />
  )

  const routes = [
    { key: 'houses', title: 'Casas' },
    { key: 'apartments', title: 'Apartamentos'},
    { key: 'lands', title: 'Terrenos' },
    { key: 'farms', title: 'Fazendas' }
  ]


  return (
    <View style={styles.container}>
      <View style={styles.container_header}>
        <View style={{ paddingTop: 40 }}>
          <TouchableOpacity style={styles.container_search_button}>
            <View>
              {Icons.Search(15, 15, 'black', 2)}
            </View>
            <View>
              <Text style={styles.container_input_text}>Inicie sua busca</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1, width: width }}>
        <TabView
          options={{
            houses: {
              label: ({focused}) => (
                <View style={styles.container_navigation}>
                  <View style={styles.container_icon}>
                    {focused ? Icons.Houses(30, 30, '#fff', 2) : Icons.Houses(30, 30, '#fff', 1)}
                  </View>
                  {/* <Text style={focused ? styles.container_text_navigation : styles.container_text_navigation_inactive}>Casas</Text> */}
                </View>
              )
            },
            apartments: {
              label: ({focused}) => (
                <View style={styles.container_navigation}>
                  <View style={styles.container_icon}>
                    { focused ? Icons.Apartments(30, 30, '#fff', 2) : Icons.Apartments(30, 30, '#fff', 1)}
                  </View>
                  {/* <Text style={focused ? styles.container_text_navigation : styles.container_text_navigation_inactive}>Apartamentos</Text> */}
                </View>
              )
            },
            lands: {
              label: ({focused}) => (
                <View style={styles.container_navigation}>
                  <View style={styles.container_icon}>
                    { focused ? Icons.Land(30, 30, '#fff', 2) : Icons.Land(30, 30, '#fff', 1)}
                  </View>
                  {/* <Text style={focused ? styles.container_text_navigation : styles.container_text_navigation_inactive}>Terrenos</Text> */}
                </View>
              )
            },
            farms: {
              label: ({focused}) => (
                <View style={styles.container_navigation}>
                  <View style={styles.container_icon}>
                    {focused ? Icons.Farm(30, 30, '#fff', 2) : Icons.Farm(30, 30, '#fff', 1)}
                  </View>
                  {/* <Text style={focused ? styles.container_text_navigation : styles.container_text_navigation_inactive}>Fazendas</Text> */}
                </View>
              )
            }
          }}
          swipeEnabled={false}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={renderTabBar}
          initialLayout={{ width: width }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  container_header: {
    backgroundColor: '#7d02fd',
    width: width,
    height: height * 0.15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container_search_button: {
    backgroundColor: '#fff',
    width: 280,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    flexDirection: 'row',
  },
  container_input_text: {
    fontFamily: "MontserratBold"
  },
  container_icon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  container_navigation: {
    // backgroundColor: 'red',
    width: 50,
    height: 40,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  container_navigation_inactive: {

  },
  container_text_navigation: {
    fontSize: 10,
    fontFamily: 'MontserratBold',
    color: '#fff'
  },
  container_text_navigation_inactive: {
    fontSize: 10,
    fontFamily: 'Montserrat',
    color: '#fff'
  }
})