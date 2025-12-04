import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <SignIn />
        </div>
    );
}


// FIXME: Memory leak potential


// NOTE: Review logic for performance
