import { type ComponentChildren } from "preact";

export default function Container({
  children,
  tw,
}: {
  children: ComponentChildren;
  tw?: string;
}) {
  return (
    <div class={`px-6 sm:px-12 lg:px-16 xl:px-32  ${tw ?? ""}`}>{children}</div>
  );
}
