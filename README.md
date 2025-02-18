# Unexpected Navigation in React Router v6 with Dynamic Route Segments

This repository demonstrates a subtle bug in React Router v6 related to navigation with dynamic route segments. The bug occurs when the dynamic segment value is not properly handled, leading to unexpected navigation behavior and potential 404 errors.

## Bug Description
Navigating to a route with a dynamic segment using `useNavigate` or `<Link>` can fail if the dynamic segment value contains special characters or is optional.  The issue lies in how the route path is constructed, which may not correctly escape or handle optional segments.

## Solution
The solution involves carefully sanitizing the dynamic segment value before using it in the route path.  This includes encoding special characters and handling optional values gracefully.  The solution also demonstrates using `useSearchParams` to handle query parameters cleanly.