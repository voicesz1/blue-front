
export const dynamicParams = false;
export async function generateStaticParams() {
  return [
    { id: '001' },
    { id: '002' },
    { id: '003' }
  ];
}

export default function ViagemDetalhesPage() {
  // Esta página dinámica no se incluye en el export estático.
  // Si necesitas que funcione en producción, migra a Next-on-Pages (SSR) o
  // implementa generateStaticParams con IDs conocidos.
  return null;
}
