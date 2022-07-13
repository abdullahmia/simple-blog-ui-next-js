import Format from "../components/layout/format";
import CategoryPost from "../components/sections/categoryPost";
import Hero from "../components/sections/hero";
import LetestPost from "../components/sections/letestPost";
import PopularPost from "../components/sections/popularPost";

export default function Home() {
  return (
    <Format>
      <Hero />
      <LetestPost />
      <PopularPost />
      <CategoryPost />
    </Format>
  )
}
