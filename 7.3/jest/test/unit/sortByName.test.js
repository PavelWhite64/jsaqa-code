const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });
});

describe("Books names test suit no sort", () => {
  it("Books names no sort", () => {
    expect(
      sorting.sortByName(["Гарри Поттер", "Властелин Колец", "Властелин Колец"])
    ).toEqual(["Властелин Колец", "Властелин Колец", "Гарри Поттер"]);
  });
});
