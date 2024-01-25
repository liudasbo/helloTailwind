export default function MobileNav(props) {
  const handleOverlayClick = () => {
    console.log("overlay");
  };

  return (
    <>
      <div
        style={props.style}
        className="fixed bg-background h-screen right-0 z-10"
      >
        <div>
          <div className="flex items-center">
            <h1>close</h1>
            <img src="/src/assets/logo.svg" alt="logo" className="h-10 m-3" />
          </div>
        </div>
      </div>
      <div
        onClick={handleOverlayClick}
        style={props.style}
        className=" w-full h-full fixed z--20 bg-black opacity-50"
      ></div>
    </>
  );
}
