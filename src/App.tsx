import { isMobile } from 'react-device-detect'
import MobileApp from './mobile/MobileApp'
import DesktopApp from './desktop/DesktopApp'

function App() {
  return isMobile ? <MobileApp /> : <DesktopApp />
}

export default App