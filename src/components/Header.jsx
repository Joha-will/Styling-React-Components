import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className="flex flex-col items-center mt-8 mb-16">
      <img src={logo} alt="A canvas" className="object-contain w-44 h-44 mb-8" />
      <h1 className="text-4xl text-center uppercase font-semibold tracking-widest text-amber-800">ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
    </header>
  );
}
