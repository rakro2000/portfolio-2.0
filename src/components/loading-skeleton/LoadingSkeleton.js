import ContentLoader from "react-content-loader";
import { useMediaQuery } from "react-responsive";

export default function LoadingSkeleton() {
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });
  const spaceBtw = {
    margin: isMobile ? "0 0 2rem 0" : "unset",
  };

  return (
    <>
      <ContentLoader
        style={spaceBtw}
        className="btn default rounded"
        speed={1}
        backgroundColor={"#beb4a6"}
        foregroundColor={"#ffffff"}
        viewBox="0 0 200 200"
        width={"243px"}
        height={"250px"}
      >
        <rect x="0" y="0" rx="5" ry="5" width="200" height="150" />
        <rect x="0" y="170" rx="4" ry="4" width="200" height="11" />
        <rect x="0" y="190" rx="3" ry="3" width="150" height="8" />
      </ContentLoader>
      <ContentLoader
        style={spaceBtw}
        className="btn default rounded"
        speed={1}
        backgroundColor={"#beb4a6"}
        foregroundColor={"#ffffff"}
        viewBox="0 0 200 200"
        width={"243px"}
        height={"250px"}
      >
        <rect x="0" y="0" rx="5" ry="5" width="200" height="150" />
        <rect x="0" y="170" rx="4" ry="4" width="200" height="11" />
        <rect x="0" y="190" rx="3" ry="3" width="150" height="8" />
      </ContentLoader>
      <ContentLoader
        style={spaceBtw}
        className="btn default rounded"
        speed={1}
        backgroundColor={"#beb4a6"}
        foregroundColor={"#ffffff"}
        viewBox="0 0 200 200"
        width={"243px"}
        height={"250px"}
      >
        <rect x="0" y="0" rx="5" ry="5" width="200" height="150" />
        <rect x="0" y="170" rx="4" ry="4" width="200" height="11" />
        <rect x="0" y="190" rx="3" ry="3" width="150" height="8" />
      </ContentLoader>
      <ContentLoader
        style={spaceBtw}
        className="btn default rounded"
        speed={1}
        backgroundColor={"#beb4a6"}
        foregroundColor={"#ffffff"}
        viewBox="0 0 200 200"
        width={"243px"}
        height={"250px"}
      >
        <rect x="0" y="0" rx="5" ry="5" width="200" height="150" />
        <rect x="0" y="170" rx="4" ry="4" width="200" height="11" />
        <rect x="0" y="190" rx="3" ry="3" width="150" height="8" />
      </ContentLoader>
      <ContentLoader
        style={spaceBtw}
        className="btn default rounded"
        speed={1}
        backgroundColor={"#beb4a6"}
        foregroundColor={"#ffffff"}
        viewBox="0 0 200 200"
        width={"243px"}
        height={"250px"}
      >
        <rect x="0" y="0" rx="5" ry="5" width="200" height="150" />
        <rect x="0" y="170" rx="4" ry="4" width="200" height="11" />
        <rect x="0" y="190" rx="3" ry="3" width="150" height="8" />
      </ContentLoader>
      <ContentLoader
        style={spaceBtw}
        className="btn default rounded"
        speed={1}
        backgroundColor={"#beb4a6"}
        foregroundColor={"#ffffff"}
        viewBox="0 0 200 200"
        width={"243px"}
        height={"250px"}
      >
        <rect x="0" y="0" rx="5" ry="5" width="200" height="150" />
        <rect x="0" y="170" rx="4" ry="4" width="200" height="11" />
        <rect x="0" y="190" rx="3" ry="3" width="150" height="8" />
      </ContentLoader>
    </>
  );
}
