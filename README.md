# Ecommerce Next

### Technologies

- NextJS 12
- SCSS
- React Bootstrap 2/Bootstrap 5
- React Hook Form
- Axios
- Hygen

##### Coming soon:

- TypeScript
- Global State

##### Related:

- [Django API](https://github.com/mattjaikaran/ecommerce-api)
- [Strapi CMS](https://github.com/mattjaikaran/ecommerce-cms)

## CLI

Using Hygen to scaffold pages, components, forms. All generators are located in `_templates` directory.

Install Hygen globally

```bash
$ npm i -g hygen
```

### Components

Create a new component named MyComponent in `@/components/shared/MyComponent/index.jsx`

```bash
$ hygen component new
1. What is the component name? MyComponent
2. What is the component type? shared
3. Do you want to add a stylesheet? (y/N) y

or using flags
$ hygen component new --name MyComponent --type shared --hasStyles
```

Adding a stylesheet will

1. create the stylesheet in `@/components/MyComponent/MyComponent.module.scss`
2. will import the stylesheet into MyComponent and include it in the parent div

### Pages

To create a new page named MyPage in `pages/my-page.js`

```bash
$ hygen page new
1. What is the page title? MyPage
2. What is the page description? this is my description

or
$ hygen page new --title MyPage --desc this is my description
```

### Views

Create a new view named TestView in `@/views/dotcom/TestView/index.jsx`

```bash
  $ hygen view new
  1. What is the view name? TestView
  2. What is the view type? dotcom
  3. Do you want to add a stylesheet? (y/N) y

  or using flags
  $ hygen view new --name TestView --type dotcom --hasStyles
```

### Forms

Create a new form named MyForm in `@/components/forms/utils/MyForm/index.jsx`

```bash
$ hygen form new
1. What is the form name? MyForm
2. What is the form type? utils

or
$ hygen form new --name MyComponent --type utils
```

## Getting Started

Run the development server:

```bash
$ git clone URL
$ cd ecommerce-next
$ yarn
$ yarn dev
```

Front End server runs on [http://localhost:3000](http://localhost:3000)

## Live Demo

Navigate to [https://ecommerce-store-nextjs.vercel.app/](https://ecommerce-store-nextjs.vercel.app/) to see a live demo.
