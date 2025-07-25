import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Image } from "expo-image";
import {
  Alert,
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const { width } = Dimensions.get("window");

// 부케 데이터
const bouquets = [
  {
    id: 1,
    name: "로맨틱 핑크 부케",
    description: "장미와 카네이션의 달콤한 조화",
    price: "45,000원",
    image:
      "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&h=400&fit=crop",
    category: "로맨틱",
  },
  {
    id: 2,
    name: "봄날의 꿈 부케",
    description: "튤립과 백합의 싱그러운 만남",
    price: "38,000원",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    category: "봄꽃",
  },
  {
    id: 3,
    name: "햇살 가득 부케",
    description: "해바라기의 밝고 따뜻한 에너지",
    price: "42,000원",
    image:
      "https://images.unsplash.com/photo-1563292104-12742bfaaf5d?w=400&h=400&fit=crop",
    category: "밝은",
  },
  {
    id: 4,
    name: "우아한 화이트 부케",
    description: "백합과 장미의 고급스러운 우아함",
    price: "52,000원",
    image:
      "https://images.unsplash.com/photo-1565630551650-b1793301aa93?w=400&h=400&fit=crop",
    category: "우아한",
  },
  {
    id: 5,
    name: "청순한 꽃망울 부케",
    description: "하얀 장미와 안개꽃의 순수한 아름다움",
    price: "35,000원",
    image:
      "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=400&h=400&fit=crop",
    category: "청순한",
  },
  {
    id: 6,
    name: "빈티지 파스텔 부케",
    description: "파스텔 톤 꽃들의 따뜻하고 부드러운 느낌",
    price: "47,000원",
    image:
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop",
    category: "빈티지",
  },
  {
    id: 7,
    name: "열정의 레드 부케",
    description: "빨간 장미의 강렬하고 열정적인 사랑",
    price: "55,000원",
    image:
      "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&h=400&fit=crop",
    category: "열정적",
  },
  {
    id: 8,
    name: "신비로운 퍼플 부케",
    description: "보라색 꽃들의 신비롭고 고귀한 매력",
    price: "49,000원",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop",
    category: "신비로운",
  },
];

export default function BouquetGallery() {
  const handleBouquetPress = (bouquet: (typeof bouquets)[0]) => {
    Alert.alert(
      `${bouquet.name}`,
      `${bouquet.description}\n\n가격: ${bouquet.price}\n카테고리: ${bouquet.category}`,
      [
        { text: "닫기", style: "cancel" },
        {
          text: "주문하기",
          onPress: () => console.log(`${bouquet.name} 주문`),
        },
      ]
    );
  };

  const handleViewAll = () => {
    Alert.alert("전체 보기", "모든 부케를 확인하시겠습니까?");
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* 헤더 섹션 */}
      <ThemedView style={styles.header}>
        <Image
          source={require("@/assets/images/feeyou.png")}
          style={styles.logo}
        />
        <ThemedText style={styles.headerTitle}>꽃다발 갤러리</ThemedText>
        <ThemedText style={styles.headerSubtitle}>
          특별한 순간을 위한 아름다운 부케들
        </ThemedText>
      </ThemedView>

      {/* 카테고리 필터 (옵션) */}
      <ThemedView style={styles.categorySection}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            style={[styles.categoryButton, styles.activeCategory]}
          >
            <ThemedText style={styles.activeCategoryText}>전체</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <ThemedText style={styles.categoryText}>로맨틱</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <ThemedText style={styles.categoryText}>우아한</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <ThemedText style={styles.categoryText}>청순한</ThemedText>
          </TouchableOpacity>
        </ScrollView>
      </ThemedView>

      {/* 부케 갤러리 그리드 */}
      <ThemedView style={styles.galleryContainer}>
        <ThemedView style={styles.galleryGrid}>
          {bouquets.map((bouquet, index) => (
            <TouchableOpacity
              key={bouquet.id}
              style={[
                styles.bouquetCard,
                index % 2 === 0 ? styles.leftCard : styles.rightCard,
              ]}
              onPress={() => handleBouquetPress(bouquet)}
              activeOpacity={0.85}
            >
              <ThemedView style={styles.imageContainer}>
                <Image
                  source={{ uri: bouquet.image }}
                  style={styles.bouquetImage}
                  contentFit="cover"
                />
                <ThemedView style={styles.categoryBadge}>
                  <ThemedText style={styles.categoryBadgeText}>
                    {bouquet.category}
                  </ThemedText>
                </ThemedView>
              </ThemedView>

              <ThemedView style={styles.bouquetInfo}>
                <ThemedText type="defaultSemiBold" style={styles.bouquetName}>
                  {bouquet.name}
                </ThemedText>
                <ThemedText style={styles.bouquetDescription}>
                  {bouquet.description}
                </ThemedText>
                <ThemedView style={styles.priceAndButton}>
                  <ThemedText style={styles.price}>{bouquet.price}</ThemedText>
                  <ThemedView style={styles.viewButton}>
                    <ThemedText style={styles.viewButtonText}>보기</ThemedText>
                  </ThemedView>
                </ThemedView>
              </ThemedView>
            </TouchableOpacity>
          ))}
        </ThemedView>
      </ThemedView>

      {/* 더보기 버튼 */}
      <ThemedView style={styles.moreSection}>
        <TouchableOpacity style={styles.moreButton} onPress={handleViewAll}>
          <ThemedText style={styles.moreButtonText}>
            더 많은 부케 보기
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>

      {/* 하단 정보 */}
      <ThemedView style={styles.footer}>
        <ThemedText style={styles.footerTitle}>
          🌸 FeeYou 부케 갤러리
        </ThemedText>
        <ThemedText style={styles.footerText}>
          각각의 부케는 신선한 꽃으로 정성껏 제작됩니다
        </ThemedText>
        <ThemedText style={styles.footerSubText}>
          주문 문의: 010-1234-5678 | 배송 가능 지역: 전국
        </ThemedText>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE4E9",
  },
  header: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 70,
    paddingBottom: 20,
    backgroundColor: "#FFB6C8",
  },
  logo: {
    width: 79.9,
    height: 27.27,
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2D2D2D",
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    fontStyle: "italic",
  },
  categorySection: {
    paddingVertical: 15,
    paddingLeft: 20,
    backgroundColor: "#FFB6C8",
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  activeCategory: {
    backgroundColor: "#e91e63",
  },
  categoryText: {
    fontSize: 14,
    color: "#555",
    fontWeight: "500",
  },
  activeCategoryText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "600",
  },
  galleryContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  galleryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  bouquetCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    marginBottom: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6.65,
    elevation: 8,
    width: (width - 45) / 2,
  },
  leftCard: {
    marginRight: 7.5,
  },
  rightCard: {
    marginLeft: 7.5,
  },
  imageContainer: {
    position: "relative",
  },
  bouquetImage: {
    width: "100%",
    height: 160,
  },
  categoryBadge: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(233, 30, 99, 0.9)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  categoryBadgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "600",
  },
  bouquetInfo: {
    padding: 15,
  },
  bouquetName: {
    fontSize: 16,
    marginBottom: 6,
    color: "#2D2D2D",
    lineHeight: 20,
  },
  bouquetDescription: {
    fontSize: 12,
    color: "#666",
    marginBottom: 12,
    lineHeight: 16,
  },
  priceAndButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: 14,
    fontWeight: "700",
    color: "#e91e63",
  },
  viewButton: {
    backgroundColor: "#e91e63",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  viewButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
  moreSection: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: "center",
  },
  moreButton: {
    backgroundColor: "#e91e63",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
    shadowColor: "#e91e63",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
  moreButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  footer: {
    padding: 25,
    alignItems: "center",
    backgroundColor: "#FFB6C8",
    marginTop: 20,
  },
  footerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2D2D2D",
    marginBottom: 8,
  },
  footerText: {
    color: "#555",
    textAlign: "center",
    fontSize: 14,
    marginBottom: 5,
  },
  footerSubText: {
    color: "#666",
    textAlign: "center",
    fontSize: 12,
    fontStyle: "italic",
  },
});
