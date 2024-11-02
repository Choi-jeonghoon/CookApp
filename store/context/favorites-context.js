import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [], //즐겨찾기 음식의 id 관리를 위해 배열(리스트)형식으로

  //실제함수가 아닌 가짜 정의를 내릴예정 이라서 화살표 함수를 추가
  addFavorite: (id) => {}, //새로운 id 추가를 위함
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);
  const addFavorite = (id) => {
    setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
  };

  const removeFavorite = (id) => {
    setFavoriteMealIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  };

  const vlaue = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={vlaue}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
