import { useDispatch } from 'react-redux'
import { fetchUsersRequest } from 'store'

import { OutlinedButton } from 'ui/components'
import { styled } from 'ui/styles'
import { Page } from 'app/templates/Page'

import { useHome } from './Home.hooks'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Home = () => {
  const { users } = useHome()
  const dispatch = useDispatch()

  return (
    <Page>
      <Wrapper>
        <OutlinedButton onPress={() => dispatch(fetchUsersRequest())}>Click</OutlinedButton>
        <span>Users: {users.length}</span>
      </Wrapper>
    </Page>
  )
}
