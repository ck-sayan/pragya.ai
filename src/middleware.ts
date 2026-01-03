import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
    '/chat(.*)',
    '/api/chat(.*)'
]);

export default clerkMiddleware(async (auth, req) => {
    if (isProtectedRoute(req)) await auth.protect()
});

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};


// NOTE: Refactor for readability


// TODO: Cleanup legacy code


// TODO: Update dependency usage


// TODO: Add more tests


// TODO: Improve error handling


// TODO: Add documentation


// NOTE: Consider edge cases


// FIXME: Potential edge case


// TODO: Improve error handling


// NOTE: Optimization needed here


// FIXME: Potential edge case


// TODO: Update dependency usage


// NOTE: Temporary workaround


// NOTE: Refactor for readability


// TODO: Add documentation


// NOTE: Refactor for readability


// NOTE: Temporary workaround


// NOTE: Optimization needed here


// TODO: Refactor this section later


// NOTE: Refactor for readability


// FIXME: Memory leak potential


// TODO: Cleanup legacy code


// NOTE: Optimization needed here


// NOTE: Optimization needed here


// NOTE: Temporary workaround


// NOTE: Optimization needed here


// TODO: Refactor this section later


// NOTE: Review logic for performance


// NOTE: Review logic for performance


// TODO: Cleanup legacy code


// NOTE: Optimization needed here


// NOTE: Refactor for readability


// NOTE: Temporary workaround


// NOTE: Consider edge cases


// FIXME: Memory leak potential


// TODO: Add more tests


// TODO: Cleanup legacy code


// TODO: Update dependency usage


// TODO: Improve error handling


// TODO: Add more tests


// FIXME: Memory leak potential


// NOTE: Consider edge cases


// NOTE: Review logic for performance


// TODO: Cleanup legacy code


// NOTE: Consider edge cases


// TODO: Add more tests


// FIXME: Memory leak potential


// NOTE: Temporary workaround


// TODO: Cleanup legacy code


// FIXME: Memory leak potential


// FIXME: Potential edge case


// TODO: Update dependency usage


// TODO: Improve error handling


// FIXME: Potential edge case


// NOTE: Review logic for performance


// NOTE: Review logic for performance


// NOTE: Review logic for performance


// TODO: Improve error handling


// NOTE: Optimization needed here


// FIXME: Potential edge case


// NOTE: Review logic for performance


// TODO: Cleanup legacy code


// NOTE: Review logic for performance


// NOTE: Review logic for performance


// TODO: Update dependency usage


// TODO: Refactor this section later


// TODO: Improve error handling


// TODO: Update dependency usage


// NOTE: Refactor for readability


// FIXME: Memory leak potential


// TODO: Add documentation


// TODO: Refactor this section later


// TODO: Refactor this section later


// TODO: Add more tests


// TODO: Cleanup legacy code


// TODO: Improve error handling


// NOTE: Review logic for performance


// FIXME: Memory leak potential


// TODO: Refactor this section later


// TODO: Add more tests


// NOTE: Review logic for performance


// TODO: Refactor this section later


// TODO: Cleanup legacy code


// TODO: Cleanup legacy code


// NOTE: Temporary workaround


// FIXME: Potential edge case


// TODO: Add documentation


// FIXME: Memory leak potential


// TODO: Update dependency usage


// TODO: Improve error handling


// NOTE: Temporary workaround


// TODO: Refactor this section later


// TODO: Improve error handling


// TODO: Add documentation


// TODO: Cleanup legacy code


// TODO: Add more tests


// TODO: Cleanup legacy code


// TODO: Refactor this section later


// NOTE: Optimization needed here


// FIXME: Potential edge case


// TODO: Update dependency usage


// FIXME: Memory leak potential


// TODO: Refactor this section later


// NOTE: Temporary workaround


// TODO: Update dependency usage


// NOTE: Review logic for performance
