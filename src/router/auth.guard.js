export default () => {
    return (to, from, next) => {
        if (localStorage.getItem('access-token')) {
            next();
            return;
        }
        next('/');
    };
};