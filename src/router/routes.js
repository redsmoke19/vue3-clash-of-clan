import items from "@/mocks/items";

export default [
  {
    path: "/",
    name: "HomePage",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/about",
    name: "AboutPage",
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/:itemAlias",
    name: "itemAlias",
    component: () => import("@/views/Card.vue"),

    // Вот с такой конструкцией ниже у меня получилось добиться желаемого,
    // но тут немого не понятно, такое ощущение, что это костыль какой-то.
    // И второй момент, если мне нужно перебирать и искать маршруты через js то тут все ок,
    // просто заипортировал js файл и по нему ищешь, как я и сделал.
    // А что если у меня данные хранятся в json ? Как тогда их парсить тут ?

    beforeEnter: (to, from, next) => {
      const routeParams = to.params.itemAlias;
      const isValid = items.some((item) => {
        return item.alias === routeParams;
      });

      if (!isValid) {
        next({ name: "404" });
      } else {
        next();
      }
    },
  },
  // Вот тут в поле path без второй * не работает почему-то. Объясни, пожалуйста, почему так и все ли тут правильно
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("@/views/404.vue"),
  },
];
