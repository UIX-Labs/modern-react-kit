# features

This directory contains isolated, reusable features of your application. Each feature solves a specific business task and can use entities, shared, and widgets.

## What to add here?
- Feature logic (e.g., authentication, cart, search)
- UI and state for a specific feature
- Feature-specific hooks and components

## Example
```
// src/features/auth/ui/LoginForm.tsx
export function LoginForm() {
  // ...login form logic
  return <form>...</form>;
} 
