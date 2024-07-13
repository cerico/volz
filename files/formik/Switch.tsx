import "./Switch.scss"
import { useTheme } from "../contexts"

const Switch = () => {
  const { theme, setTheme } = useTheme()
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === "light"}
        onChange={() => setTheme(theme === "light" ? "dark" : "light")}
      />
      <span className="slider round" />
    </label>
  )
}

export default Switch
