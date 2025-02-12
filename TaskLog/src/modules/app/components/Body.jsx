import { Route, Routes, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { backgroundImageStyle } from '../../../config/index.js'
import { DashBoard } from '../../tasks/index.js'
import { Home } from '../../home/index.js'
import { UserProfile, Register } from '../../users/index.js'

const Body = () => {
  const location = useLocation()

  const fullScreenBackgroundStyle = {
    ...backgroundImageStyle,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100vw'
  }

  return (
    <div style={fullScreenBackgroundStyle} className="w-full h-full">
      <Routes location={location}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ y: 0, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -1000, opacity: 0 }} // Se mueve hacia arriba
              transition={{ duration: 0.5 }}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/create-account"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Register />
            </motion.div>
          }
        />
        <Route
          path="/dash-board"
          element={
            <motion.div
              initial={{ y: 1000, opacity: 0 }} // Entra desde abajo
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -1000, opacity: 0 }} // Sale hacia arriba
              transition={{ duration: 0.5 }}
            >
              <DashBoard />
            </motion.div>
          }
        />
        <Route
          path="/user-profile"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <UserProfile />
            </motion.div>
          }
        />
      </Routes>
    </div>
  )
}

export default Body
