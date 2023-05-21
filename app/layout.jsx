import Sidebar from '@component/components/Sidebar';

export const metadata = {
    title: "Clerkie FE challenge",
    description: "Created by Grace"
}

const RootLayout = ({ children }) => {
  return (
    <html>
        <body>
            <main>
                <Sidebar />
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout;