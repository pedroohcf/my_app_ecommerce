export interface PaginaProps {
    children: React.ReactNode;
}

export default function Pagina(props: PaginaProps) {
   return (
      <div className="flex flex-col min-h-screen">
         <main className="flex-1">
            {props.children}
         </main>
      </div>
   );
}