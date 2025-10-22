import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Article from './components/Article'
import './App.css'

function App() {

  return (
    <>
    <Header />
    <Article date = "11/12/20" name = "On the Steet in Brooklyn" content ="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam qui facilis ipsam. Distinctio eaque at, doloremque ea doloribus sint corrupti dicta repellendus molestias natus expedita harum odio eveniet recusandae ad."
    imgSrc = "./src/assets/blog-image-1.jpg" imagAlt = "blog-image-1.jpg"/>
    <Article date = "11/11/20" name = "Vintage in Vogue" content ="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam qui facilis ipsam. Distinctio eaque at, doloremque ea doloribus sint corrupti dicta repellendus molestias natus expedita harum odio eveniet recusandae ad."
    imgSrc = "./src/assets/blog-image-2.jpg" imagAlt = "blog-image-2.jpg"/>
    <Footer />
    </>
  )
}

export default App
