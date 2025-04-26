import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";

// Pages
import HomeScreen from "./index";
import SettingsScreen from "./settings";
import EmotionsScreen from "./emotions";
import FamilyScreen from "./family";
import ActionsScreen from "./actions";
import AdjectivesScreen from "./adjectives";
import AdverbsScreen from "./adverbs";
import FoodScreen from "./food";
import FruitScreen from "./fruit";
import VegetableScreen from "./vegetables";
import BreakfastScreen from "./breakfast";
import DessertScreen from "./dessert";
import UtensilsScreen from "./utensils";
import DrinkScreen from "./drink";
import ClothingScreen from "./clothing";
import ColorScreen from "./colors";
import ShapeScreen from "./shapes";
import TimeScreen from "./time";
import TransportationScreen from "./transportation";
import WeatherScreen from "./weather";
import BodyScreen from "./body";
import HobbiesScreen from "./hobbies";
import HolidaysScreen from "./holidays";
import AnimalsScreen from "./animals";
import BirdScreen from "./bird";
import BugScreen from "./bug";
import FarmScreen from "./farm";
import ForestScreen from "./forest";
import JungleScreen from "./jungle";
import MythologicalScreen from "./mythological";
import WaterScreen from "./ocean-water";
import OtherScreen from "./other";
import PetScreen from "./pet";
import PrehistoricScreen from "./prehistoric";
import ReptileScreen from "./reptile-amphibian";
import DirectionsScreen from "./directions";
import PlacesScreen from "./places";
import OccupationsScreen from "./occupations";
import SchoolScreen from "./school";
import BathroomScreen from "./bathroom";
import PredictionScreen from "./prediction";

type FoodParamList = {
  Fruit: undefined;
  Vegetable: undefined;
  Breakfast: undefined;
  Dessert: undefined;
  Utensils: undefined;
};

type AnimalsParamList = {
  Bird: undefined;
  Bug: undefined;
  Farm: undefined;
  Forest: undefined;
  Jungle: undefined;
  Mythological: undefined;
  Water: undefined;
  Other: undefined;
  Pet: undefined;
  Prehistoric: undefined;
  Reptile: undefined;
}

import {
  TabParamList,
  TabParamListValues,
  FoodParamListValues,
  AnimalsParamListValues,
} from "./tabTypes";

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Emotions"
        component={EmotionsScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Family"
        component={FamilyScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Actions"
        component={ActionsScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Adjectives"
        component={AdjectivesScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Adverbs"
        component={AdverbsScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Food"
        component={FoodScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Fruit"
        component={FruitScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Vegetable"
        component={VegetableScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Breakfast"
        component={BreakfastScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Dessert"
        component={DessertScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Utensils"
        component={UtensilsScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
       <Tab.Screen
        name="Drink"
        component={DrinkScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Clothing"
        component={ClothingScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Colors"
        component={ColorScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Shapes"
        component={ShapeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Time"
        component={TimeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Transportation"
        component={TransportationScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Weather"
        component={WeatherScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Body"
        component={BodyScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Hobbies"
        component={HobbiesScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Holidays"
        component={HolidaysScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Animals"
        component={AnimalsScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Bird"
        component={BirdScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Bug"
        component={BugScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Farm"
        component={FarmScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Forest"
        component={ForestScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Jungle"
        component={JungleScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Mythological"
        component={MythologicalScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Water"
        component={WaterScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Pet"
        component={PetScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Prehistoric"
        component={PrehistoricScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Reptile"
        component={ReptileScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Other"
        component={OtherScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Directions"
        component={DirectionsScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Places"
        component={PlacesScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Occupations"
        component={OccupationsScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="School"
        component={SchoolScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Bathroom"
        component={BathroomScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Prediction"
        component={PredictionScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "settings" : "settings-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
    </Tab.Navigator>
  );
}

export { TabParamList, TabParamListValues, FoodParamList, FoodParamListValues, AnimalsParamList, AnimalsParamListValues };
