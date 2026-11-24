import './globals.css';
import './contact.css';

export const metadata = {
  title: 'Snaxon — Pure goodness in every bite',
  description: 'Premium roasted foxnuts, simply made for better snacking.'
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
