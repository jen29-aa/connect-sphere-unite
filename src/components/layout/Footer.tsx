
import React from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Link to="/" className="font-bold text-lg text-primary">ConnectSphere</Link>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Building stronger communities through skill sharing
          </p>
        </div>
        <div className="flex gap-4">
          <Link to="/about" className="text-sm text-muted-foreground hover:underline underline-offset-4">
            About
          </Link>
          <Link to="/terms" className="text-sm text-muted-foreground hover:underline underline-offset-4">
            Terms
          </Link>
          <Link to="/privacy" className="text-sm text-muted-foreground hover:underline underline-offset-4">
            Privacy
          </Link>
        </div>
        <p className="text-center text-sm text-muted-foreground md:text-right">
          Made with <Heart className="inline h-4 w-4 text-destructive" /> for local communities
        </p>
      </div>
    </footer>
  );
}
