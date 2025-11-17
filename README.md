# .NET 10 with Vue Example

This is an example using .NET 10 and Vue.js to create a reactive app. 

To build and run the app, use:

```shell
cd DotNetWithVue/wwwroot/vue
npm install
npm run build
```

Then run your dotnet 10 project, either with your IDE or
```shell
dotnet run
```

## Concepts

### Attributes

The Vue.js files are created in wwwroot/vue and are handled by the file `main.js`. This determines the data being passed to the Vue ƒiles as `Attributes`, or `$attrs`. The
App and AppRouter components then take these props and handle the loading appropriately.

### async Components

The majority of files would be Async Components, which means they are only loaded at run time and not compiled in. This is done to handle so the entire Vue app is not loaded on every single page,
but only when the user goes to the correct page.

## ToDos:
- [ ] Add TypeScript integration
