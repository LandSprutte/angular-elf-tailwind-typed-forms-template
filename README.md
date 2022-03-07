# Angular Elf Tailwind and Typed Forms.

Angular template using, Elf as state management, Tailwind for styling and Typed Forms for managing forms.
Can be used in projects where team conventions is important/necessary. Say for a new team or a big project.

# Project Structure

## API Proxies

Typically services the is either generated from an OpenAPI-spec or a GraphQL schema.

## API Services

Wrapper for API-proxies used in Elf-repositories or Typed Form services. Generally everywhere state is stored.

### Mappers

Mappers live along side API Services, to ensure easier DTO to frontend mapping. These are only injected in API services.

## Elf Repositories

Application wide state services. Manages state and stores state to query from an observable.

## Typed Forms

Forms the way it should be... Ensures typing on the forms you create. Also shares state between related and unrelated Forms.
Say a input from a General-form directly impacts wether or not a date-picker should show or not in a Voucher-form.

## Component Types

**Layout** typically wraps either the application or the current page. Here we have stuff like navigation, headers and footers.
**Pages** will usually map directly to a Route in angular. This is where you organize how the diferent components for the current page is presented.
**Components** Components composed by UI-components: combining a label+input to make a TextField for a form. Will sometimes also be components composed by other components, e.g. FilteredList of TextFields.
**Forms** are composed by Components and uses FormServices to keep state updated on the form.
**UI** small reuseable components, inputs, tables, list, labels, buttons etc...
