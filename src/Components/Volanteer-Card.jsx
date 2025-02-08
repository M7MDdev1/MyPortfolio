export default function VolanteerCard({ img, Company, Title, Link }) {
  return (
    <a href="google.com"
      className={`p-3 flex items-center justify-around h-[11.1875rem] rounded-[0.62169rem] font-Poppins
    bg-[linear-gradient(110deg,#000_19.95%,#0E0717_67.64%,#14004D_107.08%,#000_156.61%,#000_183.21%)]`}
    >
      <div>
        <img src={img} alt={Company} className="h-[5.5rem]" />
      </div>

      <div className="w-[10.625rem] h-full flex flex-col justify-center gap-y-4">
        <h3 className="text-[1.375rem] font-semibold">{Title}</h3>
        <p className=" text-[0.875rem] leading-[0.875rem] font-medium">
          {Company}
        </p>
      </div>
    </a>
  );
}
