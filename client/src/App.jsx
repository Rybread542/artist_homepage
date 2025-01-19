import { useState } from 'react'
import { Top_Bar } from './components/top_bar'
import { Controls_Bar } from './components/controls_bar'
import { About } from './components/about'
import { Gallery } from './components/gallery/gallery'
import { Socials_Bar } from './components/socials_bar'
import { Modal_Container } from './components/modal_components/modal_container'

function App() {

  const [ modalContent, setModalContent ] = useState(null)
  const [ modalVisible, setModalVisible ] = useState(false)

  const showModal = (newModalContent) => {
    setModalContent(newModalContent)
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  return (
    <>
    <main>
      {modalVisible && (
          <Modal_Container modalContent={modalContent} closeModal={closeModal} />
        )
      }

      <Top_Bar />
      <Controls_Bar showModal={showModal} />
      <About />
      <Gallery />
      <Socials_Bar />
    </main>
    </>
  )
}

export default App
