import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Article from './components/Article'
import photo1 from '../blog-image-1.jpg'
import photo2 from '../blog-image-2.jpg'
import './App.css'

function App() {

  return (
    <>
    <Header />
    <Article date = "11/12/20" name = "On the Street in Brooklyn" content ="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam qui facilis ipsam. Distinctio eaque at, doloremque ea doloribus sint corrupti dicta repellendus molestias natus expedita harum odio eveniet recusandae ad."
    imgSrc = {photo1} imagAlt = "blog-image-1.jpg"/>
    <Article date = "11/11/20" name = "Vintage in Vogue" content ="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam qui facilis ipsam. Distinctio eaque at, doloremque ea doloribus sint corrupti dicta repellendus molestias natus expedita harum odio eveniet recusandae ad."
    imgSrc = {photo2} imagAlt = "blog-image-2.jpg"/>
    <Footer />
    </>
  )
}

export default App
