import './globals.css';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <style>
                    @import
                    url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Squada+One&display=swap');
                </style>
                <title>Trufixxy</title>

                <link rel="icon" href="/logo.svg" type="image/x-icon" />
            </head>

            <body className="bg-primary">
                <Navbar />

                {children}

                <Footer />
            </body>
        </html>
    );
}
