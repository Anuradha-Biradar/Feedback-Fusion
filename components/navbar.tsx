
"use client";

import Link from "next/link";
import ThemeToggle from "./theme-toggle";

import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

import { Button } from "./ui/button";

import {
  Sparkles,
  Map,
  MessageSquare,
  Shield,
} from "lucide-react";

export default function Navbar() {
  return (
    <nav className="border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        {/* Left Side */}
        <div className="flex items-center gap-6">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
                <Sparkles className="h-4 w-4 text-white" />
              </div>

              <span className="text-xl font-bold">
                Feedback Fusion
              </span>
            </div>
          </Link>

          <Link
            href="/roadmap"
            className="flex items-center gap-1 text-sm hover:text-primary"
          >
            <Map className="h-4 w-4" />
            Roadmap
          </Link>

          <Link
            href="/feedback"
            className="flex items-center gap-1 text-sm hover:text-primary"
          >
            <MessageSquare className="h-4 w-4" />
            Feedback
          </Link>

          {/* Admin Link */}
          <Link
            href="/admin"
            className="flex items-center gap-1 text-sm hover:text-primary transition-colors"
          >
            <Shield className="h-4 w-4" />
            Admin
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          <ClerkLoading>
            <p className="text-sm">Loading...</p>
          </ClerkLoading>

          <ClerkLoaded>
            <SignInButton mode="modal">
              <Button>
                Sign In
              </Button>
            </SignInButton>

            <UserButton afterSignOutUrl="/" />
          </ClerkLoaded>
        </div>
      </div>
    </nav>
  );
}