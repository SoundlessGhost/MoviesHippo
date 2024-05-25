import AllMovies from "@/components/AllMovies";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function HomePage() {
  return (
    <MaxWidthWrapper>
      <div>
        <AllMovies />
      </div>
    </MaxWidthWrapper>
  );
}
