import {
  changeLocalStorage,
  createLocalStorage,
  getAllLocalStorage,
} from "./storage";
const setItemMock = jest.spyOn(Storage.prototype, "setItem");
const getItemMock = jest.spyOn(Storage.prototype, "getItem");

const diobank = {
  login: false,
};

describe("StorageService", () => {
  it("should return an object with storage methods", () => {
    getAllLocalStorage();
    expect(getItemMock).toHaveBeenCalled();
  });

  it("should build an object localStorage", () => {
    createLocalStorage();
    expect(setItemMock).toHaveBeenCalledWith(
      "diobank",
      JSON.stringify(diobank),
    );
  });

  it("should update the localStorage with the new value", () => {
    changeLocalStorage(diobank);
    expect(setItemMock).toHaveBeenCalledWith(
      "diobank",
      JSON.stringify(diobank),
    );
  });
});
