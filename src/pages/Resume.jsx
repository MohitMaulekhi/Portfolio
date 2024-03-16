import { Container } from "../components/index.js"
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer"
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 10,
    backgroundColor: '#FFF',
    color: '#000000',
    fontSize: 12,
    flex: 1,
    flexDirection: 'column'
  },
  name: {
    width: 550,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'ultrabold',

  },
  centerText: {
    width: 550,
    textAlign: 'center'
  },
  line: {
    height: 2,
    width: 550,
    backgroundColor: "#000000",
    marginVertical: 7.5,
  },
  bolder: {
    fontSize: 20,
    fontWeight: 'ultrabold',
  },
  padding: {
    paddingHorizontal: 5
  },
  projectHeading:{
    textDecoration:'underline',
    fontSize:16,
    fontWeight:'semibold'
  },
  project:{
    padding:8
  },
  projectText:{
    marginVertical:4
  }
});

// Create Document Component
const MyDocument = () => (
  <Document  title="Resume.pdf" author="Mohit Maulekhi"  style={styles.Document}>
    <Page  size="A4" style={styles.page}>
      <View>
        <View style={styles.head}>
          <View><Text style={styles.name}>Mohit Maulekhi</Text></View>
          <View><Text style={styles.centerText}>Ghaziabad, Uttar Pradesh | Ph no.:+917827838523 | mohitmaulekhi312@gmail.com</Text></View>
          <View><Text style={styles.centerText}>LinkedIn:https://www.linkedin.com/in/mohit-maulekhi-222395267/, GitHub:https://github.com/MohitMaulekhi</Text></View>
        </View>
        <View style={styles.line} />
        <View><Text style={styles.bolder} >OBJECTIVE</Text></View>
        <View style={styles.line} />

        <View>
          <Text>Highly motivated and skilled BTech student seeking an Internship or Job opportunity to apply and enhance my knowledge in computer applications and softwaredevelopment . Eager to work with a dynamic team, contribute to real worldprojects,and develop practical experience in the industry. Hardworking and Passionate Jobseeker with strong organizational skills.</Text>
        </View>
        <View style={styles.line} />
        <View><Text style={styles.bolder} >EDUCATION</Text></View>
        <View style={styles.line} />
        <View style={[styles.bolder, styles.padding]}><Text>-Bachelor of Technology in Information Technology</Text></View>
        <View style={styles.padding}><Text>Netaji Subhas University of Technology,Delhi</Text></View>
        <View style={[styles.bolder, styles.padding]}><Text>-Senior Secondary Exam</Text></View>
        <View style={styles.padding}><Text>Rajkiya Pratibha Vikas Vidyalaya, Delhi-92</Text></View>
        <View style={styles.line} />
        <View><Text style={styles.bolder} >SKILLS</Text></View>
        <View style={styles.line} />
        <View style={styles.padding}>
            <Text>1. HTML</Text>
            <Text>2. CSS</Text>
            <Text>3. Javascript</Text>
            <Text>4. React</Text>
            <Text>5. Express</Text>
            <Text>6. MongoDB</Text>
            <Text>7. MySql</Text>
            <Text>8. Core C++, Advance C++</Text>
            <Text>9. Basics of Python</Text>
            <Text>10. Data Structures and Algorithms</Text>
            <Text>11. LateX</Text>
            <Text>12. OOPs</Text>
        </View>
        <View style={styles.line} />
        <View><Text style={styles.bolder} >PROJECTS</Text></View>
        <View style={styles.line} />
        <View><Text style={styles.projectHeading}>Best Blogs</Text></View>
        <View style={styles.project}>
            <Text style={styles.projectText}>Description: The &apos;Best Blogs&lsquo; project is modern social meadia webiste which allow user to post their daily blogs along with image using different kind of fonts, styles and many other options. The site allow user to perform all the user and blogs related CRUD operations. A person can see others blogs in gkobal section. The webiste is fully responsive and work on any device width.</Text>
            <Text style={styles.projectText}>
              Tech Stack: Reactjs, CSS, HTML, Tailwind CSS, Cloudinary, Express, MongoDb, Mongoose, Axios, Bcrypt, Jsonwebtoken, Multer
            </Text>
        </View>
      </View>
    </Page>
  </Document>
);
function Resume() {
  return (
    <Container element={
      <PDFDownloadLink document={<MyDocument />} fileName="Resume">
        <PDFViewer className="h-[90vh] w-[95vw]">
          <MyDocument />
        </PDFViewer>
      </PDFDownloadLink>
    }
      properties='items-center justify-center' />
  )
}

export default Resume