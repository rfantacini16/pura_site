import type { Metadata } from "next";
import { PAGE_METADATA } from "@/lib/site-data";

export const metadata: Metadata = {
  title: PAGE_METADATA.comoFunciona.title,
  description: PAGE_METADATA.comoFunciona.description,
  alternates: {
    canonical: "/como-funciona",
  },
};

export default function ComoFuncionaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
