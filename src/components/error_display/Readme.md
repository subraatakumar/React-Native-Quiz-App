# Error display component

The easiest way to display multiple error components

### Steps

- import ErrorProvider from ErrorDisplay.tsx and wrap your main app

### Adding and Removing Error Texts

```js
    import {useErrorContext} from '@components/error_display/ErrorDisplay';
    ...
    const {addErrorText, removeErrorText} = useErrorContext();
    addErrorText("My Error Text");
    removeErrorText("My Error Text"); // If you are not removing then also it will be removed after 10 seconds
```
