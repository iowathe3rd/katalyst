import { PropsWithChildren } from "react";

export default function Container(props: PropsWithChildren) {
  return (
    <div className="max-w-screen-2xl mx-auto px-6 md:px-14 xl:px-14">
      {props.children}
    </div>
  );
}
