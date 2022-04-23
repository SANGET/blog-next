import Header from "@/components/header";
import Meta from "../components/meta";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Header />
      <div className="min-h-screen mb-4">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
