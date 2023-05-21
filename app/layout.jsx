import Header from "@component/components/Header";
import Sidebar from "@component/components/Sidebar";

export const metadata = {
  title: "Clerkie FE challenge",
  description: "Created by Grace",
};

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main>
          {/* <Sidebar /> */}
          <div className="children">
            {/* <Header /> */}
            {children}
          </div>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
