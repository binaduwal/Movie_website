import type React from "react"

const SectionTitle = ({children}:{children:React.ReactNode}) => {
  return (
    <h2 className="text-white text-3xl font-bold mb-6">
      {children}
    </h2>
  )
}

export default SectionTitle
