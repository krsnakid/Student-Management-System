import { useEffect, useState } from 'react'

function useLocalStorage(key, initialVal) {
  
  const [val, setVal] = useState(() => {
    const storedVal = localStorage.getItem(key)
    return storedVal !== null ? JSON.parse(storedVal) : initialVal
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(val))
  }, [key, val])

  return [val, setVal]
}

export default useLocalStorage