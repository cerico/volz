import { useEffect, useState } from "react"

const withMousePosition = (Component: any) => {
  return (props: any) => {
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

    return <Component {...props} mousePosition={mousePosition} />
  }
}

const MousePositionComponent = ({ mousePosition }: { mousePosition: { x: number, y: number } }) => (
  <p>Mouse Position: ({mousePosition.x}, {mousePosition.y})</p>
)

const EnhancedMousePositionComponent = withMousePosition(MousePositionComponent)

//  withWindowDimensions
const withWindowDimensions = (Component: any) => {
  return (props: any) => {
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

    return <Component {...props} dimensions={dimensions} />
  }
}

const WindowDimensionsComponent = ({ dimensions }: { dimensions: { width: number, height: number } }) => (
  <p>Window Dimensions: {dimensions.width} x {dimensions.height}</p>
)

const EnhancedWindowDimensionsComponent = withWindowDimensions(WindowDimensionsComponent)

const withDataFetcher = (url: string) => (Component: any) => {
  return (props: any) => {
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

    return <Component {...props} data={data} error={error} />
  }
}


const DataFetcherComponent = ({ data, error }: { data: any, error: any }) => (
  error ? <p>Error: {error.message}</p> : <p>Data: {data?.title}</p>
)

const EnhancedDataFetcherComponent = withDataFetcher("https://jsonplaceholder.typicode.com/posts/1")(DataFetcherComponent)

//  withLocalStorage
const withLocalStorage = (key: string) => (Component: any) => {
  return (props: any) => {
    const [value, setValue] = useState<string | null>(localStorage.getItem(key))

    const setLocalStorageValue = (newValue: string) => {
      localStorage.setItem(key, newValue)
      setValue(newValue)
    }

    return <Component {...props} value={value} setValue={setLocalStorageValue} />
  }
}

const LocalStorageComponent = ({ value, setValue }: { value: string | null, setValue: (value: string) => void }) => (
  <div>
    <p>Local Storage Value: {value}</p>
    <button onClick={() => setValue("New Value")}>Set Value</button>
  </div>
)

const EnhancedLocalStorageComponent = withLocalStorage("username")(LocalStorageComponent)

const withOnlineStatus = (Component: any) => {
  return (props: any) => {
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

    return <Component {...props} isOnline={isOnline} />
  }
}

const OnlineStatusComponent = ({ isOnline }: { isOnline: boolean }) => (
  <p>{isOnline ? "Online" : "Offline"}</p>
)

const EnhancedOnlineStatusComponent = withOnlineStatus(OnlineStatusComponent)

const withGeolocation = (Component: any) => {
  return (props: any) => {
    const [position, setPosition] = useState<{ latitude: number, longitude: number } | null>(null)
    const [error, setError] = useState<any>(null)

    useEffect(() => {
      navigator.geolocation.getCurrentPosition(
        (pos) => setPosition({ latitude: pos.coords.latitude, longitude: pos.coords.longitude }),
        (err) => setError(err)
      )
    }, [])

    return <Component {...props} position={position} error={error} />
  }
}

const GeolocationComponent = ({ position, error }: { position: { latitude: number, longitude: number } | null, error: any }) => (
  error ? <p>Error: {error.message}</p> : <p>Position: {position?.latitude}, {position?.longitude}</p>
)

const EnhancedGeolocationComponent = withGeolocation(GeolocationComponent)

const withAuthentication = (Component: any) => {
  return (props: any) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
      const auth = localStorage.getItem("auth-token")
      setIsAuthenticated(!!auth)
    }, [])

    return <Component {...props} isAuthenticated={isAuthenticated} />
  }
}

const AuthenticationComponent = ({ isAuthenticated }: { isAuthenticated: boolean }) => (
  <p>{isAuthenticated ? "Authenticated" : "Not Authenticated"}</p>
)

const EnhancedAuthenticationComponent = withAuthentication(AuthenticationComponent)

const withCountdown = (initialCount: number) => (Component: any) => {
  return (props: any) => {
    const [count, setCount] = useState(initialCount)

    useEffect(() => {
      const timer = setInterval(() => setCount(prev => prev - 1), 1000)
      return () => clearInterval(timer)
    }, [])

    const reset = () => setCount(initialCount)

    return <Component {...props} count={count} reset={reset} />
  }
}

const CountdownComponent = ({ count, reset }: { count: number, reset: () => void }) => (
  <div>
    <p>Countdown: {count}</p>
    <button onClick={reset}>Reset</button>
  </div>
)

const EnhancedCountdownComponent = withCountdown(10)(CountdownComponent)

const withFormState = (initialFormState: { [key: string]: string }) => (Component: any) => {
  return (props: any) => {
    const [formState, setFormState] = useState(initialFormState)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormState({ ...formState, [e.target.name]: e.target.value })
    }

    return <Component {...props} formState={formState} handleChange={handleChange} />
  }
}

const FormStateComponent = ({ formState, handleChange }: { formState: { [key: string]: string }, handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => (
  <div>
    <input name="username" value={formState.username} onChange={handleChange} />
    <p>Form Value: {formState.username}</p>
  </div>
)

const EnhancedFormStateComponent = withFormState({ username: "" })(FormStateComponent)

const withNetworkRequest = (url: string) => (Component: any) => {
  return (props: any) => {
    const [response, setResponse] = useState<string | null>(null)
    const [error, setError] = useState<any>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true)
        try {
          const res = await fetch(url)
          const data = await res.json()
          setResponse(data.message)
        } catch (err) {
          setError(err)
        } finally {
          setLoading(false)
        }
      }

      fetchData()
    }, [url])

    return <Component {...props} response={response} error={error} loading={loading} />
  }
}


const NetworkRequestComponent = ({ response, error, loading }: { response: string | null, error: any, loading: boolean }) => (
  loading ? <p>Loading...</p> : error ? <p>Error: {error.message}</p> : <p>Response: {response}</p>
)

const EnhancedNetworkRequestComponent = withNetworkRequest('https://api.example.com/data')(NetworkRequestComponent)

export {
  EnhancedMousePositionComponent,
  EnhancedWindowDimensionsComponent,
  EnhancedDataFetcherComponent,
  EnhancedLocalStorageComponent,
  EnhancedOnlineStatusComponent,
  EnhancedGeolocationComponent,
  EnhancedAuthenticationComponent,
  EnhancedCountdownComponent,
  EnhancedFormStateComponent,
  EnhancedNetworkRequestComponent
}
