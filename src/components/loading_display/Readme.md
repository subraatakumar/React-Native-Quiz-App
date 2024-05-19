# Loading Dialog Modals

```js
import LoadingModalProvider from '@components/loading_display/LoadingDisplay';
...
<LoadingModalProvider>
    {children}
</LoadingModalProvider>
```

```js
// In the component
  const {addLoadingDialog, removeLoadingDialog} = useLoadingModalContext();
  ...
  addLoadingDialog({{id:1, loadingDialogText: "Please wait..."}})
  ...
  removeLoadingDialog(1)
```
