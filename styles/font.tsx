"use client";
import { Roboto, Poppins } from "next/font/google";

const roboto400 = Roboto({
  weight: "400",
  subsets: ["latin"],
  style: "normal",
});

const roboto500 = Roboto({
  weight: "500",
  subsets: ["latin"],
  style: "normal",
});

const roboto700 = Roboto({
  weight: "700",
  subsets: ["latin"],
  style: "normal",
});

const poppins300 = Poppins({
  weight: "300",
  subsets: ["latin"],
  style: "normal",
});

const poppins500 = Poppins({
  weight: "500",
  subsets: ["latin"],
  style: "normal",
});

const poppins700 = Poppins({
  weight: "700",
  subsets: ["latin"],
  style: "normal",
});

export { roboto400, roboto500, roboto700, poppins300, poppins500, poppins700 };
