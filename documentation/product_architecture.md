# Product Management Architecture

This feature manages the products lifecycle, including fetching, display, and categorization within a responsive grid.

## Overview
Built with **TanStack Query** (React Query) and **Axios**, the system follows a clean service pattern to decouple API calls from UI logic.

## Flow Diagram

```mermaid
graph TD
    A[User Land-Page/Products-Page] --> B[React Query Hook (useProducts)]
    B --> C[Fetch API Client]
    
    C -->|Fetch Request| D[External API / Mock Data]
    D -->|Fetch Response| E[API Client Interceptors]
    
    E --> F[Handle Auth & Errors]
    F --> G[Update Cache (React Query)]
    
    G --> H[ProductGrid Component Re-renders]
    H --> I[Map Products List]
    
    I --> J[Individual ProductCard Components]
    J --> K[Format Currency & Price]
    J --> L[Render Ratings & Badges]
    
    K & L --> M[Product Details Navigation]
```

## Implementation Details

### 1. Separation of Concerns
Components don't directly call axios. Instead:
- `endpoints/`: Store pure URL strings.
- `services/`: Use Axios to hit endpoints.
- `hooks/`: Wrap services in `useQuery` for caching and loading states.
- `components/`: Purely display data provided by hooks.

### 2. Error Resilience
The `ProductGrid` implements a fallback system. If the API returns an error or empty data, it uses a mock set to allow the user to continue browsing the theme and layout.

### 3. Component Hierarchy
- `ProductGrid`: The main container responsible for the list and filtering.
- `ProductCard`: A premium card visual including badges, hover effects, and price formatting.
- `Hero`: High-impact entrance with product call-to-actions.

## Extending Products
To add features like filtering by category:
1. Update `ProductService.getAll` to accept query params.
2. Update the `useProducts` hook to include search/filter state as a dependency.
3. Add a filter UI to `ProductsPage.tsx` and pass the selected category to the hook.
