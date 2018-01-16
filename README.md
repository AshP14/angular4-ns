# angular4-ns
A simple Angular 4 project

## Installation:

### Before npm install please have angular-cli installed

```bash
npm install -g @angular/cli

npm install
```

### Running the application

```bash
ng serve
```
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.




### Generating Components, Directives, Pipes and Services

You can use the `ng generate` (or just `ng g`) command to generate Angular components:

```bash
ng generate component my-new-component
ng g component my-new-component # using the alias

# components support relative path generation
# if in the directory src/app/feature/ and you run
ng g component new-cmp
# your component will be generated in src/app/feature/new-cmp
# but if you were to run
ng g component ../newer-cmp
# your component will be generated in src/app/newer-cmp
# if in the directory src/app you can also run
ng g component feature/new-cmp
# and your component will be generated in src/app/feature/new-cmp
```