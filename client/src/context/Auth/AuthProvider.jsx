import { useCallback, useEffect, useMemo, useState } from 'react'
import Cookies from 'js-cookie'
import { AuthContext } from './AuthContext'
import IndexService from '../../services/api/IndexService'

const AuthProvider = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  const setTokenData = useCallback((tokenData) => {
    setToken(tokenData)

    if (tokenData) {
      Cookies.set('auth-token', tokenData)
    } else {
      Cookies.remove('auth-token')
    }
  }, [])

  const signOut = useCallback(() => {
    setUser(null)
    setToken(null)
  }, [setTokenData])

  const loadData = useCallback(async () => {
    const tokenData = Cookies.get('auth-token')
    setToken(tokenData)

    try {
      if (tokenData) {
        const { data } = await IndexService.getHome()
        console.log(data)
        setUser(data) 
      }
    } catch {
      setToken(null)
    } finally {
      setIsLoaded(true)
    }
  }, [setTokenData])

  useEffect(() => {
    loadData()
  }, [loadData])

  const contextValue = useMemo(
    () => ({
      isLoaded,
      user,
      token,
      setUser,
      setTokenData,
      signOut
    }), [isLoaded, user, token, setTokenData, signOut]
  )

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
