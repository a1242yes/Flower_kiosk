import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Image } from "expo-image";
import { ScrollView, StyleSheet } from "react-native";

// 매거진 아티클 데이터
const articles = [
  {
    id: 1,
    title: "봄맞이 꽃 관리법",
    subtitle: "봄철 꽃을 더 오래 예쁘게 유지하는 방법",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=200&fit=crop",
    date: "2024.03.15",
    category: "관리법",
  },
  {
    id: 2,
    title: "결혼식 부케 트렌드",
    subtitle: "2024년 웨딩 부케 최신 트렌드를 알아보세요",
    image:
      "https://images.unsplash.com/photo-1605716868855-7038cbb76739?w=400&h=200&fit=crop",
    date: "2024.03.12",
    category: "트렌드",
  },
  {
    id: 3,
    title: "꽃말로 전하는 마음",
    subtitle: "각 꽃이 가진 특별한 의미를 알아보세요",
    image:
      "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=400&h=200&fit=crop",
    date: "2024.03.10",
    category: "꽃말",
  },
  {
    id: 4,
    title: "집에서 키우는 화분 관리",
    subtitle: "실내 화분을 건강하게 키우는 노하우",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=200&fit=crop",
    date: "2024.03.08",
    category: "가드닝",
  },
];

const categories = ["전체", "관리법", "트렌드", "꽃말", "가드닝"];

export default function CMDKScreen() {
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
        꽃과 함께하는 라이프스타일
      </ThemedText>

      {/* 카테고리 */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryContainer}
      >
        {categories.map((category, index) => (
          <ThemedView
            key={index}
            style={[
              styles.categoryButton,
              index === 0 && styles.activeCategoryButton,
            ]}
          >
            <ThemedText
              style={[
                styles.categoryText,
                index === 0 && styles.activeCategoryText,
              ]}
            >
              {category}
            </ThemedText>
          </ThemedView>
        ))}
      </ScrollView>

      {/* 매거진 아티클 */}
      <ThemedView style={styles.articlesContainer}>
        {articles.map((article) => (
          <ThemedView key={article.id} style={styles.articleCard}>
            <Image
              source={{ uri: article.image }}
              style={styles.articleImage}
              contentFit="cover"
            />
            <ThemedView style={styles.articleContent}>
              <ThemedView style={styles.articleHeader}>
                <ThemedText style={styles.categoryTag}>
                  {article.category}
                </ThemedText>
                <ThemedText style={styles.articleDate}>
                  {article.date}
                </ThemedText>
              </ThemedView>
              <ThemedText type="defaultSemiBold" style={styles.articleTitle}>
                {article.title}
              </ThemedText>
              <ThemedText style={styles.articleSubtitle}>
                {article.subtitle}
              </ThemedText>
              <ThemedView style={styles.readButton}>
                <ThemedText style={styles.readButtonText}>읽어보기</ThemedText>
              </ThemedView>
            </ThemedView>
          </ThemedView>
        ))}
      </ThemedView>

      {/* 하단 정보 */}
      <ThemedView style={styles.footer}>
        <ThemedText style={styles.footerText}>
          꽃과 관련된 다양한 정보와 팁을 만나보세요
        </ThemedText>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFB6C8",
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  categoryContainer: {
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  categoryButton: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
  },
  activeCategoryButton: {
    backgroundColor: "#e91e63",
  },
  categoryText: {
    fontSize: 14,
    color: "#666",
  },
  activeCategoryText: {
    color: "#fff",
    fontWeight: "bold",
  },
  articlesContainer: {
    paddingHorizontal: 15,
  },
  articleCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    marginBottom: 15,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  articleImage: {
    width: "100%",
    height: 150,
  },
  articleContent: {
    padding: 15,
  },
  articleHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  categoryTag: {
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    fontSize: 12,
    color: "#666",
  },
  articleDate: {
    fontSize: 12,
    color: "#999",
  },
  articleTitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  articleSubtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 15,
    lineHeight: 20,
  },
  readButton: {
    backgroundColor: "#4CAF50",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  readButtonText: {
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
