import {Container} from "../components/index.js"
import { PDFViewer } from "@react-pdf/renderer"
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    padding:10,
    backgroundColor: '#FFF',
    color:'#000000',
    fontSize:10.5
  },
  name:{
    width:550,
    textAlign:'center',
    fontSize:16,
    fontWeight:'ultrabold',

  },
  centerText:{
    width:550,
    textAlign:'center'
  },
  line:{
    height:2,
    width:550,
    backgroundColor:"#000000",
    marginVertical:5,
  },
  bolder:{
    fontSize:16,
    fontWeight:'ultrabold',
  },
});

// Create Document Component
const MyDocument = () => (
  <Document style={styles.Document}>
    <Page size="A4" style={styles.page}>
      <View style={styles.main}>
        <View style={styles.head}>
        <View><Text style={styles.name}>Mohit Maulekhi</Text></View>
        <View><Text style={styles.centerText}>Ghaziabad, Uttar Pradesh | Ph no.:+917827838523 | mohitmaulekhi312@gmail.com</Text></View>
        <View><Text style={styles.centerText}>LinkedIn:https://www.linkedin.com/in/mohit-maulekhi-222395267/, GitHub:https://github.com/MohitMaulekhi</Text></View>
        </View>
        <View style={styles.line}/>
        <View><Text style={styles.bolder} >OBJECTIVE</Text></View>
        <View style={styles.line}/>
      </View>
      <View>
        <Text>Highly motivated and skilled BTech student seeking an Internship or Job opportunity to apply and enhance my knowledge in computer applications and softwaredevelopment . Eager to work with a dynamic team, contribute to real worldprojects,and develop practical experience in the industry. Hardworking and Passionate Jobseeker with strong organizational skills.</Text>
      </View>
      <View style={styles.line}/>
      <View><Text style={styles.bolder} >EDUCATION</Text></View>
      <View style={styles.line}/>
    </Page>
  </Document>
);
function Resume() {
  return (
    <Container element = {
      <PDFViewer className="h-[90vh] w-[95vw]">
        <MyDocument/>
      </PDFViewer>
    }
    properties = 'items-center justify-center' />
  )
}

export default Resume