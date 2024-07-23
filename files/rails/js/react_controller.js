import { Controller } from "@hotwired/stimulus"
import React from "react"
import { createRoot } from 'react-dom/client'
import Root from "../applications/Konjic/App"
export default class extends Controller {
  connect() {
    console.log("hello from konjic")
    const container = this.element
    const root = createRoot(container)
    root.render(<Root tab="home" num={23} />)
  }
}
