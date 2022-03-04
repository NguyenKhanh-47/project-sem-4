export const routersNotAuth = [
  {
    title: 'Login Page',
    component: 'login',
    path: '/login',
    isProtected: false,
  },
  {
    title: 'Register Page',
    component: 'register',
    path: '/register',
    isProtected: false,
  },
  {
    title: 'Product Page',
    component: 'product',
    path: '/product/:category',
    isProtected: false,
    exact: false
  },
  {
    title: 'Home Page',
    component: 'home',
    path: '/home',
    isProtected: false,
  },
  {
    title: 'Contact Page',
    component: 'contact',
    path: '/contact',
    isProtected: false,
  },
  {
    title: 'Product detail Page',
    component: 'productDetail',
    path: '/detail/:productId',
    isProtected: false,
  },
  {
    title: 'Cart detail Page',
    component: 'cart',
    path: '/cart',
    isProtected: false,
  },
];

export const routersAuth = [
  {
    title: 'Message Page',
    component: 'message',
    path: '/message',
    isProtected: false,
  },
  {
    title: 'Home Page',
    component: 'home',
    path: '/home',
    isProtected: false,
  },
  {
    title: 'Profile Page',
    component: 'profile',
    path: '/profile/:username',
    isProtected: false,
  },
  {
    title: 'Product Page',
    component: 'product',
    path: '/product',
    isProtected: false,
  },
];
