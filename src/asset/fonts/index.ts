import { Plus_Jakarta_Sans, Cormorant_Garamond, Play } from "next/font/google";

const fontPlay = Play({ subsets: ["latin"], weight: ["400", "700"] });
const fontJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
const fontGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export { fontGaramond, fontJakarta, fontPlay };
