# widgets

This directory contains composite UI blocks (widgets) that combine entities, features, and shared components. Widgets are used to build pages.

## What to add here?
- Composite UI components (e.g., UserProfileWidget, CartWidget)
- Logic that combines multiple features/entities

## Example
```
// src/widgets/UserProfileWidget.tsx
import { User } from 'entities/user/model';
import { Button } from 'shared/ui/Button';

export function UserProfileWidget({ user }: { user: User }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <Button>Follow</Button>
    </div>
  );
} 
