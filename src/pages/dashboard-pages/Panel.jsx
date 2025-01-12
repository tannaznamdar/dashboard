import DashboardLayout from "../../components/layouts/DashboardLayout";
import withAuth from "../../patterns/WithAuth";


function Panel({ auth }) {
  return (
    <DashboardLayout>
      <div className="border border-dashed border-gray-300 rounded-lg p-5 h-screen">
        panel
      </div>
    </DashboardLayout>
  );
}

export default withAuth(Panel);
