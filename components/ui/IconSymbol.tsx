import { Image } from "expo-image";
import { SymbolViewProps, SymbolWeight } from "expo-symbols";
import {
  OpaqueColorValue,
  type ImageStyle,
  type StyleProp,
} from "react-native";

type IconMapping = Record<SymbolViewProps["name"], any>;
type IconSymbolName = keyof typeof MAPPING;

/**
 * 아이콘 이미지 매핑
 * focused와 unfocused 상태 모두 추가
 */
const MAPPING = {
  // 홈 아이콘
  "house.fill": require("@/assets/icon/home.png"),
  house: require("@/assets/icon/home.png"),

  // 갤러리 아이콘
  "photo.fill": require("@/assets/icon/gallery.png"),
  photo: require("@/assets/icon/gallery.png"),

  // 커스텀 아이콘
  "paintbrush.fill": require("@/assets/icon/custom.png"),
  paintbrush: require("@/assets/icon/custom.png"),

  // 매거진 아이콘
  "book.fill": require("@/assets/icon/magazine.png"),
  book: require("@/assets/icon/magazine.png"),

  // 유저 아이콘
  "person.fill": require("@/assets/icon/user.png"),
  person: require("@/assets/icon/user.png"),

  // 기존 아이콘들 (호환성을 위해 유지)
  "chevron.left.forwardslash.chevron.right": require("@/assets/icon/custom.png"),
  "paperplane.fill": require("@/assets/icon/magazine.png"),
} as IconMapping;

/**
 * 이미지 기반 아이콘 컴포넌트
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color?: string | OpaqueColorValue;
  style?: StyleProp<ImageStyle>;
  weight?: SymbolWeight;
}) {
  const iconSource = MAPPING[name];

  if (!iconSource) {
    console.warn(`Icon "${name}" not found in mapping`);
    return null;
  }

  return (
    <Image
      source={iconSource}
      style={[
        {
          width: size,
          height: size,
          tintColor: color, // 색상 적용 (주석 해제)
          opacity: 1, // 투명도 강제 설정
        },
        style,
      ]}
      contentFit="contain"
      // 이미지 로드 에러 처리
      onError={(error) => {
        console.error(`Failed to load icon "${name}":`, error);
      }}
    />
  );
}
