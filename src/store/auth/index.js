import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentAccount: {
    id: 1,
    fullName:"Şükrü Kolay",
    username: "sukrukolay",
    avatar:
      "https://media.licdn.com/dms/image/D4D03AQFTpOChjWjs9Q/profile-displayphoto-shrink_400_400/0/1672423003048?e=1704326400&v=beta&t=V0lwz6w8EMcLSweW94-1KwlRiuA8fouThUDkUKpnqC8",
  },
  accounts: [
    {
      id: 1,
      fullName:"Şükrü Kolay",
      username: "sukrukolay",
      avatar:
        "https://media.licdn.com/dms/image/D4D03AQFTpOChjWjs9Q/profile-displayphoto-shrink_400_400/0/1672423003048?e=1704326400&v=beta&t=V0lwz6w8EMcLSweW94-1KwlRiuA8fouThUDkUKpnqC8",
    },
    {
      id: 2,
      fullName:"İsmail Kartal ",
      username: "arapismail",
      avatar:
        "https://img.a.transfermarkt.technology/portrait/big/6366-1696013891.png?lm=1"
    },
  ],
};
const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // state manipüle etme metodları
    _addAccount: (state, action) => {
      state.accounts.push(action.payload);
    },
    _removeAccount: (state, action) => {
      state.accounts = state.accounts.filter(
        (account) => account.id !== action.payload
      );
      if (state.currentAccount && action.payload === state.currentAccount.id) {
        this._setCurrentAccount(false);
      }
    },
    _setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});

export const { _addAccount, _removeAccount, _setCurrentAccount } = auth.actions;
export default auth.reducer;
