import Header from "@/app/(register)/components/header/header";
import { Toaster } from "sonner";

const HeaderPage = () => {
  return (
    <>
      <Header />
      <Toaster duration={3500} position="bottom-right" />
    </>
  );
};

export default HeaderPage;
