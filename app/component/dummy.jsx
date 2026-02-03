

// "use client";

// import { LucideMenu } from "lucide-react";
// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";

// const categories = [
//   { name: "HOME", href: "/" },
//   { name: "BUSINESS", href: "/business" },
//   { name: "POLITICS", href: "/politics" },
//   { name: "SPORTS", href: "/sports" },
//   { name: "TECH", href: "/tech" },
//   { name: "TRAVEL", href: "/travel" },
//   { name: "INVESTIGATION", href: "/investigation" },
// ];

// export default function Header() {
//   const [today, setToday] = useState("");
//   const [scrolled, setScrolled] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const date = new Date();
//     setToday(
//       date.toLocaleDateString("en-US", {
//         weekday: "long",
//         day: "numeric",
//         month: "long",
//         year: "numeric",
//       })
//     );
//   }, []);

//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 120);
//     };
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <header
//       className={`sticky top-0 z-50 w-full border-b border-gray-300 bg-white transition-all duration-300`}
//     >
//       {/* ================= NORMAL HEADER ================= */}
//       {!scrolled && (
//         <div className="px-5">
//           <div className="relative flex items-center justify-center py-4">
//             {/* Menu */}
//             <button className="absolute left-4">
//               <LucideMenu />
//             </button>

//             {/* Title */}
//             <div className="text-center">
//               <h1 className="pt-3 text-6xl font-semibold tracking-wide">
//                 PULSES PRO
//               </h1>
//               <p className="text-sm">{today}</p>
//             </div>
//           </div>

//           {/* Categories */}
//           <nav className="flex justify-center gap-10 border-t border-gray-300 py-3 text-md font-bold tracking-wide text-gray-800">
//             {categories.map((cat) => (
//               <a
//                 key={cat.name}
//                 href={cat.href}
//                 className={`transition-colors ${
//                   pathname === cat.href
//                     ? "text-[#7351a8]"
//                     : "hover:text-[#7351a8]"
//                 }`}
//               >
//                 {cat.name}
//               </a>
//             ))}
//           </nav>
//         </div>
//       )}

//       {/* ================= SCROLLED HEADER ================= */}
//       {scrolled && (
//         <div className="flex items-center justify-between px-5 py-3">
//           {/* Left */}
//           <div className="flex items-center gap-4">
//             <button className="md:hidden">
//               <LucideMenu />
//             </button>
//             <span className="text-xl font-bold tracking-wide">
//               PULSES PRO
//             </span>
//           </div>

//           {/* Right Categories */}
//           <nav className="hidden md:flex gap-6 text-sm font-bold tracking-wide text-gray-800">
//             {categories.map((cat) => (
//               <a
//                 key={cat.name}
//                 href={cat.href}
//                 className={`transition-colors ${
//                   pathname === cat.href
//                     ? "text-[#7351a8]"
//                     : "hover:text-[#7351a8]"
//                 }`}
//               >
//                 {cat.name}
//               </a>
//             ))}
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }
