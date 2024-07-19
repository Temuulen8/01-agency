import Button from "@/components/button";

const Header = () => {
  return (
    <header className="flex justify-between mx-60 my-5 items-center">
      <div className="flex gap-x-10">
        <h1 className="font-bold text-3xl">Brainwave.io</h1>
        <ul className="flex gap-x-10 items-center">
          <li>Demos</li>
          <li>Pages</li>
          <li>Support</li>
          <li>Contact</li>
        </ul>
      </div>
      <Button />
    </header>
  );
};

export default Header;
