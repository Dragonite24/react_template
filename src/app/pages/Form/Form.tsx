import { useNavigate } from 'react-router-dom'

import { Page } from 'app/templates/Page'
import { styled } from 'ui/styles'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Form: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Page>
      <Wrapper></Wrapper>
    </Page>
  )
}
