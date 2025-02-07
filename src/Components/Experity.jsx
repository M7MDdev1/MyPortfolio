
export default function Experity({img,date,Company,discription,Title,Type}) {
  return (
    <div className={`p-3 flex items-center justify-between h-[11.1875rem] rounded-[0.62169rem] font-Poppins
    bg-[linear-gradient(110deg,#000_19.95%,#0E0717_67.64%,#14004D_107.08%,#000_156.61%,#000_183.21%)]
    sm:w-[56.846rem] sm:h-[20.32481rem]
    `}>
        <div>
            <img src={img} alt={Company} className="h-[5.5rem] sm:h-[13.75rem]"/>
        </div>

        <div className="w-[10.625rem] h-full flex flex-col justify-between">
            <h3 className="text-xl font-semibold">{Company}</h3>
            <p className="text-[#E7DFF8] text-xs leading-[1.125rem]">{discription}</p>
            <p className="text-[#D7D7D7] text-xs font-semibold">{Title}{"  "}<span className="font-light">{Type}</span></p>
            <p className="text-[#D7D7D7] text-[0.6875rem] font-light">{date}</p>
        </div>
    </div>
  )
}
