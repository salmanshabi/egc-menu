export default function SplashScreen({ exiting }) {
  return (
    <div
      className={`fixed inset-0 z-50 bg-menu-cream flex items-center justify-center transition-opacity duration-500 ${
        exiting ? "opacity-0" : "opacity-100"
      }`}
    >
      <img
        src="/logo.png"
        alt="Eman's Garden Cafe"
        className={`w-52 h-52 object-contain transition-all duration-700 ease-out ${
          exiting ? "scale-110 opacity-0" : "animate-splash-logo"
        }`}
      />
    </div>
  );
}
