export default function VolanteerCard({ img, Company, Title }) {
  return (
    <div
      className={`p-3 flex items-center justify-between h-[11.1875rem] rounded-[0.62169rem] font-Poppins
    bg-[linear-gradient(110deg,#000_19.95%,#0E0717_67.64%,#14004D_107.08%,#000_156.61%,#000_183.21%)]
    
    md:w-[56.846rem] md:h-[20.32481rem] md:justify-center md:gap-x-12
    `}
    >
      <div>
        <img src={img} alt={Company} className="h-[5.5rem] md:h-[13.75rem]" />
      </div>

      <div className="w-[10.625rem] md:w-[20.69925rem] h-full flex flex-col justify-center gap-y-4 md:gap-y-8 ">
        <h3 className="text-[1.375rem] md:text-[3.03588rem] font-semibold">
          {Company}
        </h3>
        <p className=" text-[0.875rem] md:text-[2rem] leading-[0.875rem] font-medium">
          {Title}
        </p>
      </div>
    </div>
  );
}
