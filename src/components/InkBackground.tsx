const InkBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Large ink blob - top right */}
      <div className="ink-blob ink-blob-1 absolute -top-32 -right-32 w-[600px] h-[600px] opacity-[0.04]" />
      
      {/* Medium ink blob - bottom left */}
      <div className="ink-blob ink-blob-2 absolute -bottom-40 -left-40 w-[500px] h-[500px] opacity-[0.03]" />
      
      {/* Small accent blob - center right */}
      <div className="ink-blob ink-blob-3 absolute top-1/2 right-20 w-[300px] h-[300px] opacity-[0.025]" />
      
      {/* Floating ink drops */}
      <div className="ink-drop ink-drop-1 absolute top-1/4 left-1/4 w-4 h-4 opacity-[0.08]" />
      <div className="ink-drop ink-drop-2 absolute top-3/4 right-1/3 w-3 h-3 opacity-[0.06]" />
      <div className="ink-drop ink-drop-3 absolute top-1/3 right-1/4 w-2 h-2 opacity-[0.07]" />
      <div className="ink-drop ink-drop-4 absolute bottom-1/4 left-1/3 w-5 h-5 opacity-[0.05]" />
      
      {/* Ink splatter lines */}
      <svg className="absolute top-20 left-10 w-32 h-32 opacity-[0.03] ink-splatter-1" viewBox="0 0 100 100">
        <path
          d="M10,50 Q30,20 50,50 T90,50"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-foreground"
        />
      </svg>
      
      <svg className="absolute bottom-32 right-40 w-24 h-24 opacity-[0.025] ink-splatter-2" viewBox="0 0 100 100">
        <path
          d="M20,80 Q50,20 80,60"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-foreground"
        />
      </svg>
    </div>
  );
};

export default InkBackground;
