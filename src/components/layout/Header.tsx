
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, MapPin, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useIsMobile } from "@/hooks/use-mobile";

export function Header() {
  const isMobile = useIsMobile();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="inline-block font-bold text-xl text-primary">ConnectSphere</span>
          </Link>
          {!isMobile && (
            <nav className="flex items-center space-x-4 text-sm font-medium">
              <Link to="/" className="transition-colors hover:text-primary">
                Home
              </Link>
              <Link to="/skills" className="transition-colors hover:text-primary">
                Skills
              </Link>
              <Link to="/events" className="transition-colors hover:text-primary">
                Events
              </Link>
              <Link to="/challenges" className="transition-colors hover:text-primary">
                Challenges
              </Link>
            </nav>
          )}
        </div>

        <div className="flex-1 flex justify-end items-center space-x-2">
          {!isMobile && (
            <div className="relative w-full max-w-sm lg:max-w-md">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for skills or people..."
                className="pl-8 w-full"
              />
            </div>
          )}
          
          {isMobile && (
            <>
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)} aria-label="Search">
                <Search className="h-[1.2rem] w-[1.2rem]" />
              </Button>
              {isSearchOpen && (
                <div className="absolute top-14 left-0 w-full bg-background shadow-lg py-2 px-4 z-50 border-b">
                  <div className="relative w-full">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search for skills or people..."
                      className="pl-8 w-full"
                      autoFocus
                    />
                  </div>
                </div>
              )}
            </>
          )}

          <Button variant="ghost" size="icon" aria-label="Location">
            <MapPin className="h-[1.2rem] w-[1.2rem]" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Notifications">
            <Bell className="h-[1.2rem] w-[1.2rem]" />
          </Button>

          <Avatar>
            <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" />
            <AvatarFallback>EJ</AvatarFallback>
          </Avatar>

          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Menu">
                  <Menu className="h-[1.2rem] w-[1.2rem]" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4 mt-6">
                  <Link to="/" className="text-lg font-medium hover:text-primary">
                    Home
                  </Link>
                  <Link to="/skills" className="text-lg font-medium hover:text-primary">
                    Skills
                  </Link>
                  <Link to="/events" className="text-lg font-medium hover:text-primary">
                    Events
                  </Link>
                  <Link to="/challenges" className="text-lg font-medium hover:text-primary">
                    Challenges
                  </Link>
                  <Link to="/profile" className="text-lg font-medium hover:text-primary">
                    My Profile
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
}
