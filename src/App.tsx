import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import useForm from './hooks/useForm'
import useRoute from './hooks/useRoute'

import colors from './theme/themeСolors'
import GlobalStyle from './theme/global-styles'

import Header from './Components/Header/Header'
import Form from './Components/Form/Form'
import Preview from './Components/Preview/Preview'
import Footer from './Components/Footer/Footer'
import { Layout } from './App-styles'

const App: React.FC = () => {
  const { page, routeHandler } = useRoute()

  const {
    personalData,
    onChangeChildInput,
    onChangeFormInput,
    onAddChild,
    onDeleteChild,
    MAX_NUMBER_OF_CHILDREN,
  } = useForm()

  return (
    <>
      <ThemeProvider theme={colors}>
        <GlobalStyle />
        <Layout className='layout'>
          <Header routeHandler={routeHandler} />
          {page === 'form' ? (
            <Form
              personalData={personalData}
              onAddChild={onAddChild}
              onChangeChildInput={onChangeChildInput}
              onChangeFormInput={onChangeFormInput}
              onDeleteChild={onDeleteChild}
              routeHandler={routeHandler}
              MAX_NUMBER_OF_CHILDREN={MAX_NUMBER_OF_CHILDREN}
            />
          ) : page === 'preview' ? (
            <Preview personalData={personalData} />
          ) : null}
          <Footer />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default App
