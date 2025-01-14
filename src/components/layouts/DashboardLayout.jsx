import Navbar from "../../components/dashboard/DashboardNavbar";
import Sidbar from "../../components/dashboard/DashboardSidbar";


export default function DashboardLayout({ children }) {

 

  return (
    <>
      <div className="mx-auto">
        <div className="flex flex-col">
          <Sidbar/>

          <div className="lg:pl-80 md:pl-72">
            <Navbar />

            <div className="md:p-10 px-4 py-7 h-full bg-white dark:bg-slate-600 dark:text-white">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}