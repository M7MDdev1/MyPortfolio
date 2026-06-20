export default function XpWindow({ title, icon = "📄", children, className = "", titleRight = null }) {
  return (
    <div
      className={`rounded-[3px] overflow-hidden border border-[#111] shadow-[1px_1px_0_#555,-1px_-1px_0_#111] ${className}`}
    >
      {/* Title bar */}
      <div className="flex items-center justify-between px-2 py-[5px] bg-gradient-to-r from-[#0A3090] via-[#2060C8] to-[#0C389A] select-none">
        <span className="text-white text-xs font-mono font-bold flex items-center gap-1.5 truncate">
          <span className="text-sm leading-none">{icon}</span>
          {title}
        </span>
        <div className="flex items-center gap-1 shrink-0 ml-2">
          {titleRight && <span className="text-white/60 text-xs font-mono mr-2">{titleRight}</span>}
          <button
            className="w-[18px] h-[15px] text-[9px] font-black bg-gradient-to-b from-[#C8C8C8] to-[#A0A0A0] text-[#222] flex items-center justify-center rounded-[1px] border-t border-l border-t-white border-l-white border-b border-r border-b-[#666] border-r-[#666] hover:from-white hover:to-[#C8C8C8] leading-none"
          >
            _
          </button>
          <button
            className="w-[18px] h-[15px] text-[9px] font-black bg-gradient-to-b from-[#C8C8C8] to-[#A0A0A0] text-[#222] flex items-center justify-center rounded-[1px] border-t border-l border-t-white border-l-white border-b border-r border-b-[#666] border-r-[#666] hover:from-white hover:to-[#C8C8C8] leading-none"
          >
            □
          </button>
          <button
            className="w-[18px] h-[15px] text-[9px] font-black bg-gradient-to-b from-[#CC3030] to-[#991010] text-white flex items-center justify-center rounded-[1px] border-t border-l border-t-[#FF7070] border-l-[#FF7070] border-b border-r border-b-[#550000] border-r-[#550000] hover:from-[#EE4444] leading-none"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Window body */}
      <div className="bg-[#252525] border-t border-[#444]">
        {children}
      </div>
    </div>
  );
}
