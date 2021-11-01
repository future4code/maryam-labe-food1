export const goToLogin = (history) => {
    history.push("/login");
};

export const goToHome = (history) => {
    history.push("/");
};

export const goToRestaurant = (history, id) => {
    history.push(`/restaurante/${id}`);
};

export const goToSignUp = (history) => {
    history.push("/cadastro");
};

export const goToCart = (history) => {
    history.push("/carrinho");
};

export const goToProfile = (history) => {
    history.push("/perfil/");
};

export const goToEditProfile = (history) => {
    history.push("/perfil/editar");
};