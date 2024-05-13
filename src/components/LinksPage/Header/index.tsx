'use client';
export default function Header() {
  return (
    <header className="w-feature max-w-full mx-auto">
      <div className="w-full aspect-[3/1] bg-zinc-4 h-2/4 overflow-hidden">
        <video
          className="w-full"
          playsInline={true}
          autoPlay={true}
          muted={true}
          loop={true}
          disablePictureInPicture
          disableRemotePlayback
          preload="auto"
          onContextMenu={(e) => e.preventDefault()}
        >
          <source src="mp4/bg-v1.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="w-content max-w-full mv-0 mx-auto grid gap-0 px-4">
        <div className="relative flex justify-center items-center min-h-half-avatar py-2 my-2">
          <picture className="absolute -mt-20">
            <div className="bg-contain bg-no-repeat rounded-full aspect-square w-44 h-44 border-[1rem] border-[#16191d] bg-[url('/headshot-200x200.png')]" />
          </picture>
        </div>
        <h1 className="text-fluid-3 items-center font-bold my-0 mx-auto mt-5">
          Nicholas Wege
        </h1>
      </div>
    </header>
  );
}
