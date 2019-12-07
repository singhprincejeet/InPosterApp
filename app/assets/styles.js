import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textInput: {
    borderColor: '#BEBEBE',
    borderBottomWidth: 1,
    alignSelf: 'stretch',
    marginTop: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15
  },
  sectionContainer: { alignSelf: 'stretch' },
  button: {
    marginTop: 30,
    elevation: 3,
    position: 'relative',
  },
  title: { fontSize: 50 },
  spacedArroundRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  picker: {
    marginTop: 10,
    marginLeft: 10,
  },
  error: {
    color: "#D8000C"
  },
  imageScreenContainer: {
    flex: 1,
    padding: 15,
  },
  previewImageContainer: {
    height: '50%',
    borderWidth: 1
  },
  previewImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default styles;
