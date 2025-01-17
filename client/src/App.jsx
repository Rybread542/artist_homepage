import { useState } from 'react'
import { top_bar } from './components/top_bar'
import { controls_bar } from './components/controls_bar'
import { about } from './components/about'
import { gallery } from './components/gallery/gallery'
import { socials_bar } from './components/socials_bar'
import { modal_container } from './components/modal_components/modal_container'

function App() {

  const [ modalContent, setModalContent ] = useState(null)
  const [ modalVisible, setModalVisible ] = useState(false)

  const showModal = (newModalContent) => {
    setModalVisible(true)
    setModalContent(newModalContent)
  }

  return (
    <>
      {modalVisible && (
          <modal_container content={modalContent} />
        )
      }

      <top_bar />
      <controls_bar showModal={showModal} />
      {/* Top graphical component */}
      {/* Controls bar */}
      {/* About */}
      {/* Gallery scroller */}
      {/* Social bar */}
    </>
  )
}

export default App
