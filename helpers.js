import { renderApp, getToken } from "./index.js";
import { activeLikes } from "./api.js";

export function saveUserToLocalStorage(user) {
  window.localStorage.setItem("user", JSON.stringify(user));
}

export function getUserFromLocalStorage(user) {
  try {
    return JSON.parse(window.localStorage.getItem("user"));
  } catch (error) {
    return null;
  }
}

export function removeUserFromLocalStorage(user) {
  window.localStorage.removeItem("user");
}

export function userLike(arrey) {
  const token = getToken();
  const likeButtonElm = document.querySelectorAll('.like-button')

  for (const likeButtonElms of likeButtonElm) {
    likeButtonElms.addEventListener('click', () => {
      if (token) {
        likeButtonElms.classList.add('loadLikes')
        const index = likeButtonElms.dataset.index;
        return activeLikes({ likeId: likeButtonElms.dataset.postId, token: getToken(), activityLike: arrey[index].isLiked })
          .then((newPost) => {
            arrey[index] = newPost;
            renderApp();
        })
      }else {console.log ('Авторизуйтесь')}
    })
  } 
}