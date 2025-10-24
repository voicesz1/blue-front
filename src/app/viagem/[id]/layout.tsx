export const dynamicParams = false;
export async function generateStaticParams() {
  return [];
}

export default function ViagemLayout({ children }: { children: React.ReactNode }) {
  return children;
}