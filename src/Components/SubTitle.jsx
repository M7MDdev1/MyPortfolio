export default function SubTitle({children, className=""}) {
  return (
    <h2 className={`font-semibold text-[2rem] bg-[linear-gradient(90deg,#514BC0_-26.96%,#FFF_31.54%)] bg-clip-text text-transparent ${className}`}>
    {children}
  </h2>
  )
}
