import Footer from "@/components/Shared/Footer";

const AdminLayout = ({ children }) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default AdminLayout;
