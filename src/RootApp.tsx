import { BrowserRouter as Router } from 'react-router-dom'

import { RootRouter } from 'rootRouter'
import { GlobalStyles } from 'ui/styles/global'

export const RootApp: React.FC = () => {
  return (
    <Router>
      <RootRouter />
      <GlobalStyles />
    </Router>
  )
}
