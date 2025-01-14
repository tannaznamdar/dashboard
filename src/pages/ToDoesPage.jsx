import PageLayout from "../components/layouts/PageLayout";
import ToDoes from "../components/todoes/ToDoes";

export default function ToDoesPage() {
  return (
    <>
      <PageLayout />
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-5">
        <ToDoes />
      </div>
    </>
  );
}
