import { Image } from "expo-image";
import { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { getCategoryData } from "@/data/categories";

const articles = [
  {
    id: 1,
    title: "기념일 추천 꽃",
    subtitle: "기념일 추천 꽃, 꽃말, 꽃다발",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=200&fit=crop",
    date: "2024.03.15",
    category: "기념일",
  },
  {
    id: 2,
    title: "감사 추천 꽃",
    subtitle: "감사한 사람에게 주는 꽃 추천",
    image:
      "https://images.unsplash.com/photo-1605716868855-7038cbb76739?w=400&h=200&fit=crop",
    date: "2024.03.12",
    category: "감사",
  },
  {
    id: 3,
    title: "생일 추천 꽃",
    subtitle: "각 꽃이 가진 특별한 의미를 알아보세요",
    image:
      "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=400&h=200&fit=crop",
    date: "2024.03.10",
    category: "생일",
  },
  {
    id: 4,
    title: "사랑 추천 꽃",
    subtitle: "사랑하는 사람에게 선물하는 꽃",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=200&fit=crop",
    date: "2024.03.08",
    category: "사랑",
  },
  {
    id: 5,
    title: "승진 추천 꽃",
    subtitle: "승진한 분께 드리기 좋은 꽃",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=200&fit=crop",
    date: "2024.03.08",
    category: "승진",
  },
];

// 카테고리별 기본 이미지 정의
const categoryImages = {
  전체: require("@/assets/indexCategory/love.png"),
  기념일: require("@/assets/indexCategory/anniversary.png"),
  감사: require("@/assets/indexCategory/thank.png"),
  생일: require("@/assets/indexCategory/birth.png"),
  사랑: require("@/assets/indexCategory/love.png"),
  승진: require("@/assets/indexCategory/promotion.png"),
};

// 카테고리별 선택된 상태 이미지 정의
const categorySelectedImages = {
  전체: require("@/assets/indexCategory/love2.png"),
  기념일: require("@/assets/indexCategory/anniversary2.png"),
  감사: require("@/assets/indexCategory/thank2.png"),
  생일: require("@/assets/indexCategory/birth2.png"),
  사랑: require("@/assets/indexCategory/love2.png"),
  승진: require("@/assets/indexCategory/promotion2.png"),
};

const categories = ["기념일", "감사", "생일", "사랑", "승진"];

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState("기념일");

  // 선택된 카테고리에 따라 데이터 가져오기
  const currentData = getCategoryData(selectedCategory);

  return (
    <ScrollView style={styles.container}>
      {/* 헤더 */}
      <ThemedView
        style={{
          position: "relative",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 20,
          marginTop: 67.85,
        }}
      >
        <Image
          source={require("@/assets/images/cart.png")}
          style={{
            width: 26,
            height: 28,
            position: "absolute",
            right: 22,
          }}
        />
        <Image
          source={require("@/assets/images/feeyou.png")}
          style={{
            width: 79.9,
            height: 27.27,
            alignSelf: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      </ThemedView>

      <ThemedText style={styles.headerSubtitle}>
        {currentData.title} <br></br>
        {currentData.subtitle}
      </ThemedText>

      {/* 카테고리 섹션 */}
      <ThemedView style={styles.categorySection}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryScrollView}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              onPress={() => setSelectedCategory(category)}
              style={styles.categoryButton}
            >
              <Image
                source={
                  selectedCategory === category
                    ? categorySelectedImages[category]
                    : categoryImages[category]
                }
                style={styles.categoryImage}
              />
              <ThemedText style={styles.categoryText}>{category}</ThemedText>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ThemedView>

      {/* 꽃 목록 */}
      <ThemedView style={styles.flowerGrid}>
        {currentData.flowers.map((flower) => (
          <ThemedView key={flower.id} style={styles.flowerCard}>
            <Image source={{ uri: flower.image }} style={styles.flowerImage} />
            <ThemedText type="defaultSemiBold" style={styles.flowerName}>
              {flower.name}
            </ThemedText>
            <ThemedText style={styles.flowerPrice}>
              {flower.price.toLocaleString()}원
            </ThemedText>
            <TouchableOpacity style={styles.addButton}>
              <ThemedText style={styles.addButtonText}>담기</ThemedText>
            </TouchableOpacity>
          </ThemedView>
        ))}
      </ThemedView>

      {/* 하단 정보 */}
      <ThemedView style={styles.footer}>
        <ThemedText style={styles.footerText}>
          꽃을 선택하고 '담기' 버튼을 눌러주세요
        </ThemedText>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffffff",
  },
  header: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  headerSubtitle: {
    fontSize: 20,
    color: "#323232",
    marginTop: 34.88,
    marginLeft: 25,
    marginBottom: 20,
  },
  categorySection: {
    marginBottom: 20,
  },
  categoryScrollView: {
    paddingHorizontal: 15,
  },
  categoryButton: {
    alignItems: "center",
    marginRight: 3,
    padding: 10,
    borderRadius: 15,
    minWidth: 80,
  },
  categoryImage: {
    width: 61,
    height: 61,
    borderRadius: 25,
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
  flowerGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  flowerCard: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  flowerImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: 10,
  },
  flowerName: {
    fontSize: 18,
    marginBottom: 5,
    textAlign: "center",
  },
  flowerPrice: {
    fontSize: 16,
    color: "#e91e63",
    fontWeight: "bold",
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: "#4CAF50",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  footer: {
    padding: 20,
    alignItems: "center",
  },
  footerText: {
    color: "#666",
    textAlign: "center",
  },
});
