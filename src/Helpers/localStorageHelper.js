export class Helper {
  static usersKey = "registeredUsers";
  static cardsKey = "registeredCards";
  static loggedInUserKey = "user";

  static Start() {
    // checking if there are any items stored in local storage under
    // the keys and Only if there is no data in local storage, create it.
    if (!localStorage.getItem(Helper.usersKey)) {
      Helper.SaveDataInLocalStorage(Helper.usersKey, []);
    }
    if (!localStorage.getItem(Helper.cardsKey)) {
      Helper.SaveDataInLocalStorage(Helper.cardsKey, []);
    }
  }

  static GetDataFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  static SaveDataInLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  static addItemToCollection(key, item) {
    var ArrayObject = Helper.GetDataFromLocalStorage(key);
    ArrayObject.push(item);
    Helper.SaveDataInLocalStorage(key, ArrayObject);
  }

  static RemoveUser(id) {
    var usersArrayObject = Helper.GetDataFromLocalStorage(Helper.usersKey);
    const index = usersArrayObject.findIndex((user) => user.userid == id);
    usersArrayObject.splice(index, 1);
    Helper.SaveDataInLocalStorage(Helper.usersKey, usersArrayObject);
    return;
  }

  static RemoveCard(id) {
    var CardsArrayObject = Helper.GetDataFromLocalStorage(Helper.cardsKey);
    CardsArrayObject.splice(id, 1);
    Helper.SaveDataInLocalStorage(Helper.cardsKey, CardsArrayObject);
    return;
  }

  static AddUserAccount(user) {
    Helper.addItemToCollection(Helper.usersKey, user);
  }

  static AddCard(card) {
    Helper.addItemToCollection(Helper.cardsKey, card);
  }

  static ExistingUser(email) {
    var usersArrayObject = Helper.GetDataFromLocalStorage(Helper.usersKey);
    return usersArrayObject.find((user) => user.email == email);
  }

  static Login(user) {
    if (Helper.ValidateUser(user)) {
      Helper.SaveDataInLocalStorage(Helper.loggedInUserKey, user);
    }
  }

  static ValidateUser(user) {
    var usersArrayObject = Helper.GetDataFromLocalStorage(Helper.usersKey);

    return usersArrayObject.find(
      (x) => x.email == user.email && x.password == user.password
    );
  }
}
Helper.Start();
