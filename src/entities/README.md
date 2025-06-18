# entities

This directory contains business entities and domain models. Entities are the core building blocks of your application's business logic and state. They are reusable and independent of specific features or UI.

## What to add here?
- Domain models (e.g., User, Product, Article)
- Entity-specific logic (selectors, adapters)
- API types and adapters

## Example
```
// src/entities/user/model.ts
export interface User {
  id: string;
  name: string;
  email: string;
}
``` 
