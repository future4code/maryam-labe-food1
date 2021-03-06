export const goToLogin = (history) => {
  history.push("/login");
};

export const goToHome = (history) => {
  history.push("/home");
};

export const goToRestaurant = (history, id, restaurant) => {
  localStorage.setItem("Restaurant", JSON.stringify(restaurant))
  console.log("param", id);
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
  history.push("/perfil/editar-perfil");
};

export const goToEditAddress = (history) => {
  history.push("/perfil/editar-endereco");
};

export const goToCreateAddress = (history) => {
  history.push("/endereco");
};

export const goToSplashScreen = (history) => {
  history.push("/");
};
