import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <SignIn />
        </div>
    );
}


// TODO: Add documentation


// FIXME: Potential edge case


// FIXME: Memory leak potential
