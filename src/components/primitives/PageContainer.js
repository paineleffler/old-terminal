
import styled from 'styled-components'

const PageContainer = styled.div`
  min-height: 100vh;
  background: ${props => (props.theme.background)};
  color: ${props => (props.theme.color)};
  *::selection {
    background-color: ${props => (props.theme.cursor)};
    color: ${props => (props.theme.color)};
  }
`

export default PageContainer
