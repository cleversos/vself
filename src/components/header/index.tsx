import Link from "next/link";
import Auth from "../auth";
const Header: React.FC = ({}) => {
    return (
      <section className="h-8">
        <nav className="border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-[1080px]">
            <span className="font-grotesk text-3xl text-green-500">vStudio</span>
            <Auth/>
          </div>
        </nav>
      </section>
    );
  };
  
  export default Header;