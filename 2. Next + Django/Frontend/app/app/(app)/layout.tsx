import Sidebar from "../components/Sidebar";
import "@/app/styles/globals.css";

export default function appLayout({ children }: LayoutProps<"/">) {
   return (
      <html
         lang="en"
      >
         <body className="min-h-full flex flex-row">
            <Sidebar/>
            {children}
         </body>
      </html>
   );
}
