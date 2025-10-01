import { useState } from 'react';

import Navbar from './components/Navbar'
import BackgroundWall from './components/mainSection/Background'
import Title from './components/mainSection/Title';
import Slider from './components/mainSection/Slider';
import BlogCards from './components/mainSection/BlogCards';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.scss';

function App() {

  let [inputText, setInputText] = useState("");

  return (
    <>
      <Navbar setInputText={setInputText} />
      <BackgroundWall />
      <Title />
      <Slider />
      <BlogCards inputText={inputText} />
      <Footer />
    </>
  )
}

export default App
