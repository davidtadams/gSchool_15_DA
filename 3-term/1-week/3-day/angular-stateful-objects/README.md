# State in Angular

## Setup

```
npm install
npm start
```

## Car Wash Challenge

Use `ng-submit` to move cars through the car washing process.

**Default page setup**

```
When the page loads
The "Washing..." column should just show the "Nothing's being washed right now" message
And the "Polishing..." column should just show the "Nothing's being polished right now" message
And the history column should just show the "Nothing's been washed" message
```

NOTE: angular is already installed via `bower` - figure out how to wire it up from there.

**User starts washing**

```
When a user fills out the intake form
And clicks "Start Washing"
Then the intake form fields should become blank
And the information from the intake form should appear in the "Washing..." column
```

**User starts polishing**

```
When a user fills out the "Washing..." form
And clicks "Send to Polish"
Then the "Washing..." column should show the default message
And the "Polishing..." column should be populated
```

NOTE: when a user starts the process again (new intake form), make sure that the value of the "Washed by" field has been cleared out.

**User marks the car as complete**

```
When a user fills out the "Polishing..." form
And clicks "Mark Complete"
Then the "Polishing..." column should show the default message
And a row should be added to the history table
```
