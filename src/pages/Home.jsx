import { useEffect, useState } from "react"
import {Container} from "../components/index.js"

function Home() {
  const textArr = ["Hello, I am Mohit Maulekhi.","A full stack web developer.","Tech Enthusiast."]
  const [txt,setTxt] = useState("")
  const [maintxt,mainSetTxt] = useState("")
  const [i,setI] = useState(0)
  let j = 0;
  useEffect(()=>{
      
      setTxt(textArr[i])
      let interval1 = setInterval(()=>{
        mainSetTxt(()=>{
          let temp = "";
          if(j<txt?.length+1) {
            temp = txt.substring(0,j)
          }
          
          else{
            setI((prev)=>{
              if(prev>textArr.length-1){
                return 0;
              }
              else{
                return prev+1;
              }
              })
          }
          // eslint-disable-next-line react-hooks/exhaustive-deps
          j = j+1
          return temp;
          
        })}
      ,100)
      

      return ()=>clearInterval(interval1)
  },[i])


  return (
    <Container element = {
      <>
      <div className="h-[40vmin] mt-[15vh] w-[40vmin] bg-white rounded-full bg-cover" style={{backgroundImage:"url(https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSBWDHXtjeMDRl3z5YaKUq2DDvEvDTtpYWCetNU006z9NzYXlH8)"}}></div>
      <div className="text-blue-800 font-serif font-bold text-[5vmin]  mt-[3vh]">{maintxt}</div>
      </>
    }
    properties = "flex-col items-center"/>
  )
}

export default Home