import Nav from "@/components/nav";
import Appointment from "@/components/appointment";

import "./index.scss";

type Props = {
  children: React.ReactNode;
};

const Main = (props: Props) => {
  const { children } = props;

  return (
    <main>
      {children}
      <Nav />
      <Appointment />
    </main>
  );
};

export default Main;
