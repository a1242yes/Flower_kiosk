import { Image } from "expo-image";
import { ScrollView, StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

// 꽃 데이터 예시 (실제 이미지 URL 사용)
const flowers = [
  {
    id: 1,
    name: "장미",
    price: 15000,
    image:
      "https://images.unsplash.com/photo-1518895312237-a9e9e1c6203a?w=300&h=300&fit=crop",
  },
  {
    id: 2,
    name: "튤립",
    price: 8000,
    image:
      "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=300&h=300&fit=crop",
  },
  {
    id: 3,
    name: "해바라기",
    price: 12000,
    image:
      "https://images.unsplash.com/photo-1597848212624-e8bb13bb5e0c?w=300&h=300&fit=crop",
  },
  {
    id: 4,
    name: "백합",
    price: 18000,
    image:
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300&h=300&fit=crop",
  },
  {
    id: 5,
    name: "국화",
    price: 10000,
    image:
      "https://images.unsplash.com/photo-1574684891174-df0bc8e7a78c?w=300&h=300&fit=crop",
  },
  {
    id: 6,
    name: "카네이션",
    price: 9000,
    image:
      "https://images.unsplash.com/photo-1551058545-d4635aa72e8e?w=300&h=300&fit=crop",
  },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* 헤더 */}
      <ThemedView
        style={{
          position: "relative", // 추가
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
            height: 26,
            position: "absolute",
            right: 107.49,
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
        아름다운 꽃을 선택해주세요
      </ThemedText>

      {/* 꽃 목록 */}
      <ThemedView style={styles.flowerGrid}>
        {flowers.map((flower) => (
          <ThemedView key={flower.id} style={styles.flowerCard}>
            <Image
              source={{ uri: flower.image }}
              style={styles.flowerImage}
              contentFit="cover"
            />
            <ThemedText type="defaultSemiBold" style={styles.flowerName}>
              {flower.name}
            </ThemedText>
            <ThemedText style={styles.flowerPrice}>
              {flower.price.toLocaleString()}원
            </ThemedText>
            <ThemedView style={styles.addButton}>
              <ThemedText style={styles.addButtonText}>담기</ThemedText>
            </ThemedView>
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
    backgroundColor: "#f8f9fa",
  },
  header: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#666",
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
