import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface AppProviderProps {
  children: React.ReactNode;
}

interface AppContextData {
  menuType: "Appetizer" | "Pasta" | "Pizza" | "Salad" | "Soup" | "Dessert";
  setMenuType: React.Dispatch<
    React.SetStateAction<
      "Appetizer" | "Pasta" | "Pizza" | "Salad" | "Soup" | "Dessert"
    >
  >;
  menuCategories: {
    id: number;
    name: string;
    menuType: "Appetizer" | "Pasta" | "Pizza" | "Salad" | "Soup" | "Dessert";
  }[];
  drinksType: "Wine" | "Cocktail" | "Beer";
  setDrinksType: React.Dispatch<
    React.SetStateAction<"Wine" | "Cocktail" | "Beer">
  >;
  drinksCategories: {
    id: number;
    name: string;
    drinksType: "Wine" | "Cocktail" | "Beer";
  }[];
}

const AppContext = createContext<AppContextData>({} as any);

export function AppProvider({ children }: AppProviderProps) {
  const [menuType, setMenuType] = useState<
    "Appetizer" | "Pasta" | "Pizza" | "Salad" | "Soup" | "Dessert"
  >("Appetizer");

  const [drinksType, setDrinksType] = useState<"Wine" | "Cocktail" | "Beer">(
    "Wine"
  );

  const menuCategories = [
    {
      id: 0,
      name: "Aperitivos",
      menuType: "Appetizer",
    },
    {
      id: 1,
      name: "Massa",
      menuType: "Pasta",
    },
    {
      id: 2,
      name: "Pizza",
      menuType: "Pizza",
    },
    {
      id: 3,
      name: "Salada",
      menuType: "Salad",
    },
    {
      id: 4,
      name: "Sopa",
      menuType: "Soup",
    },
    {
      id: 5,
      name: "Sobremesa",
      menuType: "Dessert",
    },
  ] as {
    id: number;
    name: string;
    menuType: "Appetizer" | "Pasta" | "Pizza" | "Salad" | "Soup" | "Dessert";
  }[];

  const drinksCategories = [
    {
      id: 0,
      name: "Vinho",
      drinksType: "Wine",
    },
    {
      id: 1,
      name: "Cocktail",
      drinksType: "Cocktail",
    },
    {
      id: 2,
      name: "Cerveja",
      drinksType: "Beer",
    },
  ] as {
    id: number;
    name: string;
    drinksType: "Wine" | "Cocktail" | "Beer";
  }[];

  const value = {
    menuType,
    setMenuType,
    menuCategories,
    drinksType,
    setDrinksType,
    drinksCategories,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}
