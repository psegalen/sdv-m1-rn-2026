import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const showFirstCard = true;
  const showSecondCard = true;
  const firstCard = (
    <View style={styles.card} key="task1">
      <Text style={styles.paragraph}>Apprendre React Native</Text>
      <Text>A faire</Text>
    </View>
  );
  const secondCard = (
    <View style={styles.cardDone} key="task2">
      <Text style={styles.paragraphDone}>Apprendre React</Text>
      <Text>Fait</Text>
    </View>
  );
  let content = [];
  if (showFirstCard) content.push(firstCard);
  if (showSecondCard) content.push(secondCard);
  return <View style={styles.container}>{content}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
    gap: 32,
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 24,
    gap: 16,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardDone: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 24,
    gap: 16,
    opacity: 0.6,
  },
  paragraphDone: {
    fontSize: 18,
    fontWeight: "bold",
    textDecorationLine: "line-through",
  },
});
