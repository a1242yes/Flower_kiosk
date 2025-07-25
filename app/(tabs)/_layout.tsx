import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FFFFFF", // 활성 탭 색상을 흰색으로 변경
        tabBarInactiveTintColor: "#F07BA2", // 비활성 탭 색상 (iOS 기본값)
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: {
          backgroundColor: "#FFB6C1", // 분홍색 배경
          height: Platform.OS === "ios" ? 96 : 76, // 높이 증가
          paddingBottom: Platform.OS === "ios" ? 20 : 10,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          marginTop: 1.5,
          fontWeight: "600",
        },
        tabBarIconStyle: {
          marginBottom: 1.5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "홈",
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol
              size={22}
              name={focused ? "house.fill" : "house"}
              color={color} // 자동으로 흰색(활성) 또는 회색(비활성) 적용
              style={{ opacity: 1 }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="bouquetGallery"
        options={{
          title: "갤러리",
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol
              size={22}
              name={focused ? "photo.fill" : "photo"}
              color={color}
              style={{ opacity: 1 }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="customization"
        options={{
          title: "커스텀",
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol
              size={22}
              name={focused ? "paintbrush.fill" : "paintbrush"}
              color={color}
              style={{ opacity: 1 }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="magazine"
        options={{
          title: "매거진",
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol
              size={22}
              name={focused ? "book.fill" : "book"}
              color={color}
              style={{ opacity: 1 }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "유저",
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol
              size={22}
              name={focused ? "person.fill" : "person"}
              color={color}
              style={{ opacity: 1 }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
