import type React from "react"

const SectionTitle = ({title}:{title:React.ReactNode}) => {
  return (
    <h2 className="text-primary uppercase text-3xl font-bold mb-6 ">
      {title}
    </h2>
  )
}

export default SectionTitle
