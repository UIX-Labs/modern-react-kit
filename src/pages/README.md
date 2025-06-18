# pages

This directory contains top-level pages of your application. Each page is a route and composes widgets, features, and entities to build the UI.

## What to add here?
- Page components (e.g., HomePage, ProfilePage)
- Route-level logic

## Example
```
// src/pages/HomePage.tsx
import { UserProfileWidget } from 'widgets/UserProfileWidget';

export function HomePage() {
  // ...page logic
  return <UserProfileWidget user={{ id: '1', name: 'Alice', email: 'alice@example.com' }} />;
} 
