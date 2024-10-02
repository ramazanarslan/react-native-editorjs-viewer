import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import data from './data.json';
import EditorJsViewer from 'react-native-editorjs-viewer';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <EditorJsViewer
          data={data}
          showFallback={true}
          style={styles.editorJsContainer}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  editorJsContainer: {
    padding: 10,
  },
});
