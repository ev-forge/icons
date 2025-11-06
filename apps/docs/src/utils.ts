import type { Metadata } from "@ev-forge/icons";

type onGetItemsPerPageInput<T> = {
  page: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
  itemsList: T[];
  restOfItems: number;
};

export const onGetItemsPerPage = <G>({
  page,
  itemsPerPage,
  totalItems,
  totalPages,
  itemsList,
  restOfItems,
}: onGetItemsPerPageInput<G>): G[] => {
  if (page > totalPages) return [];

  const start = (page - 1) * itemsPerPage + 1 - 1;
  const end =
    page * itemsPerPage < totalItems - restOfItems
      ? page * itemsPerPage
      : totalItems;

  const data = itemsList.slice(start, end);
  return data;
};

export const filterItems = (query: string, items: Metadata[]): Metadata[] => {
  if (!query) return [];
  const queryLowerCase = query.toLowerCase();
  return items
    .filter((c) => {
      // ℹ️ search into name and aliases
      return [c.name, ...c.aliases].some((c) =>
        c.toLowerCase().includes(queryLowerCase)
      );
    })
    .slice(0, 30);
};
