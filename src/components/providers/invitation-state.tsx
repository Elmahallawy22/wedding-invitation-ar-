"use client";

import { createContext, useContext } from "react";

// Create a context to manage the invitation open state
const InvitationOpenContext = createContext(false);

export const InvitationOpenProvider = InvitationOpenContext.Provider;

export function useInvitationOpen() {
  return useContext(InvitationOpenContext);
}
