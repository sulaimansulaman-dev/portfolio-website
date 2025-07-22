import react from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-4 mt-8 text-gray-600 text-sm">
      © {new Date().getFullYear()} Sulaiman Sulaman. All rights reserved.
    </footer>
  );
}