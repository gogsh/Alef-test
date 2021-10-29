import { useState } from 'react'
import { Pages } from '../Types'

const useRoute = () => {
  const [page, setPage] = useState<Pages>('form')

  const routeHandler = (e: React.ChangeEvent<any>) => {
    if (e.target.name !== page) {
      setPage(e.target.name)
    }
  }

  return {
    page,
    routeHandler
  }
}

export default useRoute
