import { useState } from 'react'

export const useModalState = ({ initialOpen = false } = {}) => {
  const [isOpen, setIsOpen] = useState(initialOpen)

  const onOpen = () => {
    setIsOpen(true)
  }

  const onClose = () => {
    setIsOpen(false)
  }

  const onToggle = () => {
    setIsOpen(!isOpen)
  }

  return { onOpen, onClose, isOpen, onToggle }
}


// client code 

// const Client = () => {
//   const { isOpen, onToggle } = useModalState()

//   const handleClick = () => {
//     onToggle()
//   }

//   return (
//     <div>
//       <button onClick={handleClick} />
//       <Modal open={isOpen} />
//     </div>
//   )
// }

// export default Client