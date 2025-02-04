
export default function ScoreCard({children, number,className=""}) {
  return (
    <div className={`bg-[#0E0E10] border border-[#1C1C21] rounded-xl text-center font-Manrope px-[0.88rem] py-5 ${className}`}>
        <p className="text-[1.75rem] font-semibold">{number}+</p>
        <p className="text-[#797C86] text-[0.875rem] leading-[1.3125rem]">{children}</p>
    </div>
  )
}
