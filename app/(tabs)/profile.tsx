import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Image } from "expo-image";
import { ScrollView, StyleSheet } from "react-native";

export default function ProfileScreen() {
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

      <ThemedText style={styles.headerSubtitle}>내 프로필</ThemedText>

      {/* 프로필 정보 */}
      <ThemedView style={styles.profileSection}>
        <ThemedView style={styles.profileCard}>
          <ThemedView style={styles.profileImageContainer}>
            <ThemedText style={styles.profileImageText}>👤</ThemedText>
          </ThemedView>
          <ThemedText style={styles.userName}>사용자</ThemedText>
          <ThemedText style={styles.userEmail}>user@example.com</ThemedText>
        </ThemedView>
      </ThemedView>

      {/* 메뉴 옵션들 */}
      <ThemedView style={styles.menuSection}>
        <ThemedView style={styles.menuItem}>
          <ThemedText style={styles.menuText}>주문 내역</ThemedText>
          <ThemedText style={styles.menuArrow}>›</ThemedText>
        </ThemedView>

        <ThemedView style={styles.menuItem}>
          <ThemedText style={styles.menuText}>찜한 상품</ThemedText>
          <ThemedText style={styles.menuArrow}>›</ThemedText>
        </ThemedView>

        <ThemedView style={styles.menuItem}>
          <ThemedText style={styles.menuText}>배송지 관리</ThemedText>
          <ThemedText style={styles.menuArrow}>›</ThemedText>
        </ThemedView>

        <ThemedView style={styles.menuItem}>
          <ThemedText style={styles.menuText}>고객센터</ThemedText>
          <ThemedText style={styles.menuArrow}>›</ThemedText>
        </ThemedView>

        <ThemedView style={styles.menuItem}>
          <ThemedText style={styles.menuText}>설정</ThemedText>
          <ThemedText style={styles.menuArrow}>›</ThemedText>
        </ThemedView>
      </ThemedView>

      {/* 하단 정보 */}
      <ThemedView style={styles.footer}>
        <ThemedText style={styles.footerText}>
          FeeYou와 함께 아름다운 꽃을 만나보세요
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
  profileSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  profileCard: {
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
  profileImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  profileImageText: {
    fontSize: 40,
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 14,
    color: "#666",
  },
  menuSection: {
    paddingHorizontal: 20,
  },
  menuItem: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  menuText: {
    fontSize: 16,
    fontWeight: "500",
  },
  menuArrow: {
    fontSize: 20,
    color: "#ccc",
  },
  footer: {
    padding: 20,
    alignItems: "center",
    marginTop: 20,
  },
  footerText: {
    color: "#666",
    textAlign: "center",
    fontSize: 14,
  },
});
