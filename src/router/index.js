import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes.js'
import { Auth } from 'aws-amplify'; 

const router = createRouter({
  history: createWebHistory(),
  routes
});
  
const isAuthenticated = async () => {
  try {
    await Auth.currentAuthenticatedUser();
    return true;
  } catch (error) {
    return false;
  }
};
  

router.beforeEach(async (to, from, next) => {

  const userIsAuthenticated = await isAuthenticated();
  if (to.meta.requiresAuth) {
    if (!userIsAuthenticated) {
      next('/login');
    } else {
      // await Auth.signOut();
      next();
    }
  } else {
    if (userIsAuthenticated) {
      await Auth.signOut();
      next();
    } else {
      next();
    }
  }
});

export default router;