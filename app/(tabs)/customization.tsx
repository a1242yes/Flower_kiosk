import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Image } from "expo-image";
import { ScrollView, StyleSheet } from "react-native";

// 커스터마이징 옵션들
const customOptions = [
  {
    id: 1,
    title: "꽃 선택",
    description: "원하는 꽃을 직접 선택하세요",
    icon: "🌸",
    color: "#FF6B9D",
  },
  {
    id: 2,
    title: "색상 조합",
    description: "색상을 자유롭게 조합하세요",
    icon: "🎨",
    color: "#4ECDC4",
  },
  {
    id: 3,
    title: "포장지 선택",
    description: "다양한 포장지 중에서 선택하세요",
    icon: "🎁",
    color: "#45B7D1",
  },
  {
    id: 4,
    title: "메시지 카드",
    description: "특별한 메시지를 추가하세요",
    icon: "💌",
    color: "#96CEB4",
  },
];

export default function HEODKScreen() {
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

      <ThemedText style={styles.headerSubtitle}>나만의 부케 만들기</ThemedText>

      {/* 커스터마이징 단계 */}
      <ThemedView style={styles.stepsContainer}>
        <ThemedText style={styles.stepsTitle}>커스터마이징 단계</ThemedText>

        {customOptions.map((option, index) => (
          <ThemedView key={option.id} style={styles.stepCard}>
            <ThemedView
              style={[styles.stepIcon, { backgroundColor: option.color }]}
            >
              <ThemedText style={styles.stepIconText}>{option.icon}</ThemedText>
              <ThemedText style={styles.stepNumber}>{index + 1}</ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContent}>
              <ThemedText type="defaultSemiBold" style={styles.stepTitle}>
                {option.title}
              </ThemedText>
              <ThemedText style={styles.stepDescription}>
                {option.description}
              </ThemedText>
            </ThemedView>
            <ThemedView style={styles.startButton}>
              <ThemedText style={styles.startButtonText}>시작</ThemedText>
            </ThemedView>
          </ThemedView>
        ))}
      </ThemedView>

      {/* 미리보기 영역 */}
      <ThemedView style={styles.previewSection}>
        <ThemedText style={styles.previewTitle}>미리보기</ThemedText>
        <ThemedView style={styles.previewCard}>
          <ThemedView style={styles.previewPlaceholder}>
            <ThemedText style={styles.previewText}>🌹</ThemedText>
            <ThemedText style={styles.previewSubtext}>
              선택한 꽃들이 여기에 표시됩니다
            </ThemedText>
          </ThemedView>
        </ThemedView>
      </ThemedView>

      {/* 하단 정보 */}
      <ThemedView style={styles.footer}>
        <ThemedText style={styles.footerText}>
          단계별로 진행하여 나만의 특별한 부케를 만들어보세요
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
  stepsContainer: {
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  stepsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  stepCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    flexDirection: "row",
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
  stepIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    position: "relative",
  },
  stepIconText: {
    fontSize: 24,
  },
  stepNumber: {
    position: "absolute",
    bottom: -5,
    right: -5,
    backgroundColor: "#fff",
    borderRadius: 10,
    width: 20,
    height: 20,
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold",
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 16,
    marginBottom: 5,
  },
  stepDescription: {
    fontSize: 14,
    color: "#666",
  },
  startButton: {
    backgroundColor: "#4CAF50",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 15,
  },
  startButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
  previewSection: {
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  previewTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  previewCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
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
  previewPlaceholder: {
    alignItems: "center",
  },
  previewText: {
    fontSize: 50,
    marginBottom: 10,
  },
  previewSubtext: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
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
