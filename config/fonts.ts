import {
  Lato as FontLato,
  Lexend_Deca as FontLexendDeca,
} from "next/font/google";

export const fontLato = FontLato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "700"],
});

export const fontLexendDeca = FontLexendDeca({
  subsets: ["latin"],
  variable: "--font-lexend-deca",
});
