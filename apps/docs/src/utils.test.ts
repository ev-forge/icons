import { expect, test } from "vitest";
import { filterItems, onGetItemsPerPage } from "./utils";

test("test with page inner the range pages", () => {
  expect(
    onGetItemsPerPage<number>({
      page: 4,
      itemsPerPage: 2,
      totalItems: 13,
      totalPages: 4,
      itemsList: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33],
      restOfItems: 1,
    })
  ).toEqual([26, 27]);
});

test("test with page outer the range pages", () => {
  expect(
    onGetItemsPerPage<number>({
      page: 4,
      itemsPerPage: 5,
      totalItems: 13,
      totalPages: 4,
      itemsList: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33],
      restOfItems: 1,
    })
  ).toEqual([]);
});

test("test with query", () => {
  expect(
    filterItems("alarm", [
      { name: "AlarmClock", code: "solidAlarmClock", aliases: [] },
      { name: "AlignCenter", code: "solidAlignCenter", aliases: [] },
      { name: "AlignJustify", code: "solidAlignJustify", aliases: [] },
      { name: "AlignLeft", code: "solidAlignLeft", aliases: [] },
      { name: "AlignRight", code: "solidAlignRight", aliases: [] },
    ])
  ).toEqual([{ name: "AlarmClock", code: "solidAlarmClock", aliases: [] }]);
});

test("test without query", () => {
  expect(
    filterItems("", [
      { name: "AlarmClock", code: "solidAlarmClock", aliases: [] },
      { name: "AlignCenter", code: "solidAlignCenter", aliases: [] },
      { name: "AlignJustify", code: "solidAlignJustify", aliases: [] },
      { name: "AlignLeft", code: "solidAlignLeft", aliases: [] },
      { name: "AlignRight", code: "solidAlignRight", aliases: [] },
    ])
  ).toEqual([]);
});

test("test with query does not match", () => {
  expect(
    filterItems("%$", [
      { name: "AlarmClock", code: "solidAlarmClock", aliases: [] },
      { name: "AlignCenter", code: "solidAlignCenter", aliases: [] },
      { name: "AlignJustify", code: "solidAlignJustify", aliases: [] },
      { name: "AlignLeft", code: "solidAlignLeft", aliases: [] },
      { name: "AlignRight", code: "solidAlignRight", aliases: [] },
    ])
  ).toEqual([]);
});
