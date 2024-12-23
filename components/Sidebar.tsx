'use client'
import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { signOutUser } from "@/lib/actions/user.actions";
import { CircleArrowLeft } from "lucide-react";

interface Props {
  fullName: string;
  avatar: string;
  email: string;
}

const Sidebar = ({ fullName, avatar, email }: Props) => {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <Link href="/dashboard">
        <Image
          src="https://cdn.prod.website-files.com/66d40a2948a9f7c769434696/66d4402763dc6e8af2b4607c_Logo%20(6).svg"
          alt="logo"
          width={130}
          height={30}
          className="hidden h-auto lg:block "
        />

        <Image
          src="https://cdn.prod.website-files.com/66d40a2948a9f7c769434696/66d4402763dc6e8af2b4607c_Logo%20(6).svg"
          alt="logo"
          width={52}
          height={52}
          className="lg:hidden"
        />
      </Link>

      <div className="sidebar-user-info">
        <Image
          src={avatar}
          alt="Avatar"
          width={44}
          height={44}
          className="sidebar-user-avatar"
        />
        <div className="hidden lg:block">
          <p className="subtitle-2 capitalize">{fullName}</p>
          <p className="caption">{email}</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        <ul className="flex flex-1 flex-col gap-6">
          {navItems.map(({ url, name, icon }) => (
            <a key={name} href={url} className="lg:w-full">
              <li
                className={cn(
                  "sidebar-nav-item",
                  pathname === url && "shad-active"
                )}
              >
                <Image
                  src={icon}
                  alt={name}
                  width={24}
                  height={24}
                  className={cn(
                    "nav-icon",
                    pathname === url && "nav-icon-active"
                  )}
                />
                <p className="hidden lg:block">{name}</p>
              </li>
            </a>
          ))}

          
        </ul>
        <form 
            action={async () => {

              await signOutUser();
            }}
          >
            <button type="submit" className="font-bold bg-[#5ea977] text-white outline-none w-full flex items-center mt-5 transition-all justify-center rounded-full py-3 hover:bg-black ">
              Logout 
            </button>
          </form>
      </nav>

      {/* <Image
        src="/assets/images/files-2.png"
        alt="logo"
        width={506}
        height={418}
        className="w-full"
      /> */}
    </aside>
  );
};
export default Sidebar;
