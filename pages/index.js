import Loader from "../components/common/loader";
import Format from "../components/layout/format";
import CategoryPost from "../components/sections/categoryPost";
import Hero from "../components/sections/hero";
import LetestPost from "../components/sections/letestPost";
import PopularPost from "../components/sections/popularPost";
import Fetcher from "../lib/fetcher";

export default function Home() {
  const {isLoading} = Fetcher('/trending');
  if (isLoading) {
    return <Loader />
  }
  return (
    <Format>

      <Hero />
      <LetestPost />
      <PopularPost />
      <CategoryPost />
    </Format>
  )
}
