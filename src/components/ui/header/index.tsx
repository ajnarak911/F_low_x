import Link from "next/link";
import Image from "next/image";
import { BookOpen, CreditCard, Github, Users, Zap } from "lucide-react";
import pic from "@/app/assets/pic.png"; // ✅ Correct image import

const navItems = [
  { name: "Features", href: "#features", icon: Zap },
  { name: "Templates", href: "#templates", icon: BookOpen },
  { name: "Pricing", href: "#pricing", icon: CreditCard },
  { name: "Community", href: "#community", icon: Users },
  { name: "GitHub", href: "#github", icon: Github },
];

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-primary/10">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 animate-fade-in cursor-pointer">
              <Image
                src={pic}
                alt="Logo"
                width={200}
                height={190}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) => (
              <Link
                href={item.href}
                key={item.name}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </Link>
            ))}
          </nav>

        </div>
      </div>
    </header>
  );
};

export default Header;
