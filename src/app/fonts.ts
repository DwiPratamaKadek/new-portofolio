import { Roboto_Mono, Azeret_Mono,Poppins } from "next/font/google";

export const robotoMono = Roboto_Mono({
//   variable: "--font-roboto-mono",
  subsets: ["latin"]
});

export const azeretMono = Azeret_Mono({
  subsets: ["latin"],
  weight: ['100', '400', '700'],
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ['100', '400', '700']
})