import { useEffect, useState } from "react"

// Mouse Position Tracker
type MousePositionProps = {
  render: (props: { mousePosition: { x: number, y: number } }) => JSX.Element
}

const MousePosition = ({ render }: MousePositionProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMousePositionChange = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMousePositionChange)

    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange)
    }
  }, [])

  return render({ mousePosition })
}

// Window Dimensions Tracker
type WindowDimensionsProps = {
  render: (props: { dimensions: { width: number, height: number } }) => JSX.Element
}

const WindowDimensions = ({ render }: WindowDimensionsProps) => {
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight })

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return render({ dimensions })
}

// Data Fetcher
type DataFetcherProps = {
  url: string
  render: (props: { data: any; error: any }) => JSX.Element
}

const DataFetcher = ({ url, render }: DataFetcherProps) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
      } catch (error) {
        setError(error)
      }
    }

    fetchData()
  }, [url])

  return render({ data, error })
}

// Local Storage Manager
type LocalStorageManagerProps = {
  key: string
  render: (props: { value: string | null, setValue: (value: string) => void }) => JSX.Element
}

const LocalStorageManager = ({ key, render }: LocalStorageManagerProps) => {
  const [value, setValue] = useState<string | null>(localStorage.getItem(key))

  const setLocalStorageValue = (newValue: string) => {
    localStorage.setItem(key, newValue)
    setValue(newValue)
  }

  return render({ value, setValue: setLocalStorageValue })
}

// Online Status Tracker
type OnlineStatusProps = {
  render: (props: { isOnline: boolean }) => JSX.Element
}

const OnlineStatus = ({ render }: OnlineStatusProps) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine)

  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])

  return render({ isOnline })
}

// Geolocation Tracker
type GeolocationProps = {
  render: (props: { position: { latitude: number, longitude: number } | null, error: any }) => JSX.Element
}

const Geolocation = ({ render }: GeolocationProps) => {
  const [position, setPosition] = useState<{ latitude: number, longitude: number } | null>(null)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => setPosition({ latitude: pos.coords.latitude, longitude: pos.coords.longitude }),
      (err) => setError(err)
    )
  }, [])

  return render({ position, error })
}

// Authentication Checker
type AuthCheckerProps = {
  render: (props: { isAuthenticated: boolean }) => JSX.Element
}

const AuthChecker = ({ render }: AuthCheckerProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const auth = localStorage.getItem("auth-token")
    setIsAuthenticated(!!auth)
  }, [])

  return render({ isAuthenticated })
}

// Countdown Timer
type CountdownProps = {
  initialCount: number
  render: (props: { count: number, reset: () => void }) => JSX.Element
}

const Countdown = ({ initialCount, render }: CountdownProps) => {
  const [count, setCount] = useState(initialCount)

  useEffect(() => {
    const timer = setInterval(() => setCount(prev => prev - 1), 1000)
    return () => clearInterval(timer)
  }, [])

  const reset = () => setCount(initialCount)

  return render({ count, reset })
}

// Form State Manager
type FormStateManagerProps = {
  initialFormState: { [key: string]: string }
  render: (props: { formState: { [key: string]: string }, handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => JSX.Element
}

const FormStateManager = ({ initialFormState, render }: FormStateManagerProps) => {
  const [formState, setFormState] = useState(initialFormState)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  return render({ formState, handleChange })
}

//  Network Request
type NetworkRequestProps = {
  render: (props: { response: string | null; error: any; loading: boolean }) => JSX.Element
}

const NetworkRequest = ({ render }: NetworkRequestProps) => {
  const [response, setResponse] = useState<string | null>(null)
  const [error, setError] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await fetch('https://api.example.com/data')
        const data = await res.json()
        setResponse(data.message)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return render({ response, error, loading })
}

export {
  MousePosition,
  WindowDimensions,
  DataFetcher,
  LocalStorageManager,
  OnlineStatus,
  Geolocation,
  AuthChecker,
  Countdown,
  FormStateManager,
  NetworkRequest
}
