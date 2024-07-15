import React from 'react'
import {
  EnhancedMousePositionComponent,
  EnhancedWindowDimensionsComponent,
  EnhancedDataFetcherComponent,
  EnhancedLocalStorageComponent,
  EnhancedOnlineStatusComponent,
  EnhancedGeolocationComponent,
  EnhancedAuthenticationComponent,
  EnhancedCountdownComponent,
  EnhancedFormStateComponent,
  EnhancedNetworkRequestComponent,
} from '../hooks/hocs'

function App() {
  return (
    <div className="App">
      <header className="Header">Higher Order Components Examples</header>

      <h2>Mouse Position</h2>
      <EnhancedMousePositionComponent />

      <h2>Window Dimensions</h2>
      <EnhancedWindowDimensionsComponent />

      <h2>Data Fetcher</h2>
      <EnhancedDataFetcherComponent />

      <h2>Local Storage</h2>
      <EnhancedLocalStorageComponent />

      <h2>Online Status</h2>
      <EnhancedOnlineStatusComponent />

      <h2>Geolocation</h2>
      <EnhancedGeolocationComponent />

      <h2>Authentication</h2>
      <EnhancedAuthenticationComponent />

      <h2>Countdown</h2>
      <EnhancedCountdownComponent />

      <h2>Form State</h2>
      <EnhancedFormStateComponent />

      <h2>Network Request</h2>
      <EnhancedNetworkRequestComponent />
    </div>
  )
}

export default App
