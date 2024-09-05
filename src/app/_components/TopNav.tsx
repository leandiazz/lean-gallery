'use client'

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { CustomUploadButton } from "./CustomUploadButtom";

export default function TopNav() {
  return (
    <nav className='flex w-full items-center justify-between p-4 text-xl font-semibold border-b'>
      <div>Gallery</div>
      <div className="flex flex-row gap-4 items-center">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn >
          <CustomUploadButton />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  )
}

