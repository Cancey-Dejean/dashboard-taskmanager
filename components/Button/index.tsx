const Button = ({ label }: { label: string }) => {
  return (
    <button className="btn-shadow  flex gap-4 bg-blue-2 py-4 px-5 rounded-lg text-white">
      {label || "Button"}
    </button>
  )
}

export default Button
