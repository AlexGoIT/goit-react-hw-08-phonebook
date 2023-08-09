export const selectIsAuthorized = state => state.auth.isAuthorized;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectUserName = state => state.auth.user.name;

export const selectUserEmail = state => state.auth.user.email;
