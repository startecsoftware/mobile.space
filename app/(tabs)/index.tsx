import { Text, View } from "react-native";
import { useDimension } from "../../hooks/useDimension";
import Icons from "../../constants/Icons";
import { useState } from "react";
// import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import Houses from "../houses/houses";
import styles from "../../styles/indexStyles";
import { Header } from "../../components/Header/Header";
import { Tab, TabView } from '@rneui/themed'
const { width } = useDimension()

export default function HomeScreen() {

  const [index, setIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Header pageType="home-screen"/>
      <View style={{ flex: 1, width: width }}>
        <Tab
          value={index}
          onChange={(e) => setIndex(e)}
          indicatorStyle={{
            backgroundColor: '#fff',
            height: 3
          }}
          style={{
            backgroundColor: "#7d02fd"
          }}
          variant="primary"
        >
          <Tab.Item
            title="Casas"
            titleStyle={{ fontFamily: "MontserratBold", fontSize: 10 }}
            icon={<View>{Icons.Houses(25, 25, "#fff", 2)}</View>}
            containerStyle={{
              backgroundColor: "#7d02fd",
              // alignItems: 'center',
              justifyContent: 'center'
            }}
          />
          <Tab.Item
            title="Apartamento"
            titleStyle={{ fontFamily: "MontserratBold", fontSize: 10 }}
            icon={<View>{Icons.Apartments(25, 25, "#fff", 2)}</View>}
            containerStyle={{
              backgroundColor: "#7d02fd",
              // alignItems: 'center',
              justifyContent: 'center'
            }}
          />
          <Tab.Item
            title="Terrenos"
            titleStyle={{ fontFamily: "MontserratBold", fontSize: 10 }}
            icon={<View>{Icons.Land(25, 25, "#fff", 2)}</View>}
            containerStyle={{
              backgroundColor: "#7d02fd",
              // alignItems: 'center',
              justifyContent: 'center'
            }}
          />
          <Tab.Item
            title="Fazendas"
            titleStyle={{ fontFamily: "MontserratBold", fontSize: 10 }}
            icon={<View>{Icons.Farm(25, 25, "#fff", 2)}</View>}
            containerStyle={{
              backgroundColor: "#7d02fd",
              // alignItems: 'center',
              justifyContent: 'center'
            }}
          />
        </Tab>

        <TabView value={index} onChange={setIndex} animationType="spring">
            <TabView.Item style={{ width: width }}>
              <Houses/>
            </TabView.Item>
            <TabView.Item style={{ width: width }}>
              <Text>Apartamentos</Text>
            </TabView.Item>
            <TabView.Item style={{ width: width }}>
              <Text>Terrenos</Text>
            </TabView.Item>
            <TabView.Item style={{ width: width }}>
              <Text>Fazendas</Text>
            </TabView.Item>
        </TabView>
      </View>
    </View>
  )
}

