import { isMobile } from 'react-device-detect'
import MobileApp from './MobileApp'
import DesktopApp from './DesktopApp'

function App() {
  return isMobile ? <MobileApp /> : <DesktopApp />
}

export default App