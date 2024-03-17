import { Container } from "../components/index.js"
import { BlobProvider, PDFViewer } from "@react-pdf/renderer"
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { BrowserView, MobileView } from 'react-device-detect';

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
  projectHeading: {
    textDecoration: 'underline',
    fontSize: 16,
    fontWeight: 'semibold'
  },
  project: {
    padding: 8
  },
  projectText: {
    marginVertical: 4
  }
});

// Create Document Component
const MyDocument = () => (
  <Document title="Resume.pdf" author="Mohit Maulekhi" style={styles.Document}>
    <Page size="A4" style={styles.page}>
      <View>
        <View style={styles.head}>
          <View><Text style={styles.name}>Mohit Maulekhi</Text></View>
          <View><Text style={styles.centerText}>Ghaziabad, Uttar Pradesh | Ph no.:+917827838523 | mohitmaulekhi312@gmail.com</Text></View>
          <View><Text>LinkedIn:https://www.linkedin.com/in/mohit-maulekhi-222395267/, GitHub:https://github.com/MohitMaulekhi</Text></View>
        </View>
        <View style={styles.line} />
        <View><Text style={styles.bolder} >OBJECTIVE</Text></View>
        <View style={styles.line} />

        <View>
          <Text style={[{ paddingRight: 8 }]}>A highly motivated and skilled BTech student seeking an internship or job opportunity to apply and enhance my knowledge in computer applications and software development. I am eager to collaborate with a dynamic team, contribute to real-world projects, and gain practical experience in the industry. I am a hardworking and passionate job seeker with strong organizational skills.</Text>
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
          <Text style={[{ marginVertical: 3 }]}>1. Programming Languages: HTML, CSS, JavaScript, React, Express, Core C++, Advanced C++, Python (Basics)</Text>
          <Text style={[{ marginVertical: 3 }]}>2. Databases: MongoDB, MySQL</Text>
          <Text style={[{ marginVertical: 3 }]}>3. Other Skills: Data Structures and Algorithms, LaTeX, Object-Oriented Programming (OOPs)</Text>
        </View>
        <View style={styles.line} />
        <View><Text style={styles.bolder} >PROJECTS</Text></View>
        <View style={styles.line} />
        <View><Text style={styles.projectHeading}>Best Blogs</Text></View>
        <View style={styles.project}>
          <Text style={styles.projectText}>Description: Developed a modern social media website for users to post daily blogs with images, utilizing various font styles and options. Implemented CRUD operations for user and blog management. Ensured full responsiveness across devices for seamless user experience.
          </Text>
          <Text style={styles.projectText}>
            Tech Stack: Reactjs, CSS, HTML, Tailwind CSS, Cloudinary, Express, MongoDb, Mongoose, Axios, Bcrypt, Jsonwebtoken, Multer, Tiny-mce
          </Text>
        </View>
      </View>
    </Page>
  </Document>
);
function Resume() {
  return (
    <Container element={
      <>
        <BrowserView>
          <PDFViewer className="h-[90vh] w-[90vw]">
            <MyDocument />
          </PDFViewer>
        </BrowserView>
        <MobileView>
          <BlobProvider document={<MyDocument />} filename='Resume.pdf'>
            {({ url }) => {
              return <button className="bg-blue-600 text-white p-2 text-center mt-[30vh]"><a href={url}>Download</a></button>
            }}
          </BlobProvider>
        </MobileView>
      </>

    }
      properties='items-center justify-center' />
  )
}

export default Resume