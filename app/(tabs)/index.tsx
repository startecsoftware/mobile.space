import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { useDimension } from "../../hooks/useDimension";
import Icons from "../../constants/Icons";
import { useState } from "react";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import Houses from "../houses/houses";
import styles from "./indexStyle";


const { width, height } = useDimension()

export default function HomeScreen() {

  const [index, setIndex] = useState(0);

  const HousesRoute = ({ route }: { route: any }) => {
    const routeIndex = routes.findIndex(r => r.key === route.key)
    if (Math.abs(index - routeIndex) > 1) {
      return <View/>
    }

    return <Houses/>
  }

  const ApartmentRoute = ({ route }: { route: any }) => {
    const routeIndex = routes.findIndex(r => r.key === route.key)
    if (Math.abs(index - routeIndex) > 2) {
      return <View/>
    }
    return  <View  style={{ flex: 1, backgroundColor: '#f2ecf9' }}>
              <Text>Apartamentos</Text>
            </View>
  }

  const LandsRoute = ({ route }: { route: any }) => {
    const routeIndex = routes.findIndex(r => r.key === route.key)
    if (Math.abs(index - routeIndex) > 3) {
      return <View/>
    }
    return <View style={{ flex: 1, backgroundColor: '#f2ecf9' }}>
            <Text>Terrenos</Text>
          </View>
  }

  const FarmsRoute = ({ route }: { route: any }) => {
    const routeIndex = routes.findIndex(r => r.key === route.key)
    if (Math.abs(index - routeIndex) > 4) {
      return <View/>
    }
    return <View style={{ flex: 1, backgroundColor: '#f2ecf9' }}>
              <Text>Fazendas</Text>
            </View>
  }

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
              icon: ({color}) => (
                <View style={styles.container_icon}>
                  {Icons.Houses(25, 25, color, 2)}
                </View>
              ),
              label: () => <Text style={styles.container_text_navigation}>Casas</Text>
            },
            apartments: {
              icon: ({route, focused, color}) => (
                <View style={styles.container_icon}>
                  {Icons.Apartments(25, 25, color, 2)}
                </View>
              ),
              label: () => <Text style={styles.container_text_navigation}>Apartamentos</Text>
            },
            lands: {
              icon: ({route, focused, color}) => (
                <View style={styles.container_icon}>
                   {Icons.Land(25, 25, color, 2)}
                </View>
              ),
              label: () => <Text style={styles.container_text_navigation}>Terrenos</Text>
            },
            farms: {
              icon: ({route, focused, color}) => (
                <View style={styles.container_icon}>
                   {Icons.Farm(25, 25, color, 2)}
                </View>
              ),
              label: () => <Text style={styles.container_text_navigation}>Fazendas</Text>
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