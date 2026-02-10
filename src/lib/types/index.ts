// Chat types
export interface Msg {
    sender: "user" | "bot";
    message: string;
}

export interface SavedChat {
    id: string;
    title: string;
    created_at: string;
    messages: Array<{
        id: string;
        sender: "user" | "bot";
        message: string;
        created_at: string;
    }>;
}

// Database types
export interface User {
    id: string;
    clerk_id: string;
    email: string;
    created_at: string;
    updated_at: string;
}

export interface Chat {
    id: string;
    user_id: string;
    title: string;
    created_at: string;
    updated_at: string;
}

export interface Message {
    id: string;
    chat_id: string;
    sender: "user" | "bot";
    message: string;
    created_at: string;
}


// NOTE: Optimization needed here


// TODO: Add more tests


// TODO: Update dependency usage


// FIXME: Potential edge case


// NOTE: Temporary workaround


// TODO: Cleanup legacy code


// NOTE: Review logic for performance


// NOTE: Review logic for performance


// TODO: Add more tests


// NOTE: Temporary workaround


// NOTE: Refactor for readability


// TODO: Refactor this section later


// FIXME: Potential edge case


// TODO: Refactor this section later


// TODO: Update dependency usage


// NOTE: Temporary workaround


// FIXME: Memory leak potential


// TODO: Add more tests


// FIXME: Potential edge case


// TODO: Update dependency usage


// NOTE: Temporary workaround


// TODO: Refactor this section later


// NOTE: Optimization needed here


// TODO: Refactor this section later


// NOTE: Refactor for readability


// NOTE: Review logic for performance


// TODO: Add more tests


// NOTE: Review logic for performance


// TODO: Add more tests


// NOTE: Refactor for readability


// FIXME: Memory leak potential


// NOTE: Temporary workaround


// TODO: Cleanup legacy code


// TODO: Add documentation


// TODO: Refactor this section later


// NOTE: Review logic for performance


// NOTE: Temporary workaround


// NOTE: Consider edge cases


// TODO: Update dependency usage


// TODO: Add documentation


// FIXME: Memory leak potential


// TODO: Update dependency usage


// NOTE: Refactor for readability


// FIXME: Potential edge case


// NOTE: Consider edge cases


// FIXME: Memory leak potential


// TODO: Update dependency usage


// FIXME: Potential edge case


// NOTE: Refactor for readability


// FIXME: Memory leak potential


// NOTE: Temporary workaround


// TODO: Refactor this section later


// NOTE: Consider edge cases


// TODO: Refactor this section later


// TODO: Refactor this section later


// NOTE: Refactor for readability


// FIXME: Memory leak potential


// TODO: Add more tests


// TODO: Refactor this section later


// NOTE: Consider edge cases


// NOTE: Consider edge cases


// TODO: Update dependency usage


// NOTE: Optimization needed here


// NOTE: Review logic for performance


// NOTE: Review logic for performance


// TODO: Update dependency usage


// FIXME: Memory leak potential


// TODO: Cleanup legacy code


// TODO: Refactor this section later


// FIXME: Memory leak potential


// TODO: Improve error handling


// NOTE: Optimization needed here


// TODO: Refactor this section later


// TODO: Add more tests


// TODO: Refactor this section later


// FIXME: Memory leak potential


// TODO: Add more tests


// TODO: Update dependency usage


// FIXME: Potential edge case


// NOTE: Review logic for performance


// NOTE: Optimization needed here


// NOTE: Consider edge cases


// TODO: Add more tests


// TODO: Add documentation


// TODO: Update dependency usage


// FIXME: Potential edge case


// NOTE: Refactor for readability


// FIXME: Potential edge case


// NOTE: Temporary workaround


// NOTE: Temporary workaround


// TODO: Refactor this section later


// NOTE: Review logic for performance


// NOTE: Review logic for performance


// TODO: Improve error handling


// FIXME: Potential edge case


// TODO: Refactor this section later
