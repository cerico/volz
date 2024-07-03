import { Controller } from "@hotwired/stimulus"
import React from "react"
import { createRoot } from 'react-dom/client'
import App from "../applications/Counter/App"
export default class extends Controller {
  connect() {
    console.log("hello from react")
    const container = this.element
    const root = createRoot(container)
    root.render(<App tab="home" num={23} />)
  }
}
